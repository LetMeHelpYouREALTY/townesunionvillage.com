'use client'

import { useCallback, useEffect, useId, useRef, useState } from 'react'
import {
  amenityCategories,
  communityCenter,
  curatedPlaces,
  defaultAmenityCategory,
  mapsEmbedFallbackUrl,
  type AmenityCategoryId,
  type CuratedPlace,
} from 'app/config/map'
import { loadGoogleMaps, mapsAuthFailed } from 'app/lib/google-maps-loader'
import { searchCategory } from 'app/lib/places-search'

const MAP_HEIGHT_CLASS = 'min-h-[420px] h-[420px] sm:h-[480px]'

type MapPlace = {
  id: string
  name: string
  address: string
  lat: number
  lng: number
  mapsUri?: string
}

type AmenityMapProps = {
  className?: string
  showCuratedList?: boolean
  initialCategory?: AmenityCategoryId
}

function placeDirectionsByAddress(address: string) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`
}

function curatedForCategory(category: AmenityCategoryId): CuratedPlace[] {
  return curatedPlaces.filter((p) => p.category === category)
}

function buildCommunityInfoContent(): HTMLElement {
  const wrap = document.createElement('div')
  wrap.style.maxWidth = '240px'
  wrap.style.padding = '4px 0'
  const title = document.createElement('strong')
  title.textContent = communityCenter.label
  const lineBreak1 = document.createElement('br')
  const addr = document.createElement('span')
  addr.style.fontSize = '13px'
  addr.style.color = '#374151'
  addr.textContent = communityCenter.address
  const lineBreak2 = document.createElement('br')
  const link = document.createElement('a')
  link.href = placeDirectionsByAddress(communityCenter.address)
  link.target = '_blank'
  link.rel = 'noopener noreferrer'
  link.style.fontSize = '13px'
  link.textContent = 'Directions'
  wrap.append(title, lineBreak1, addr, lineBreak2, link)
  return wrap
}

function buildPlaceInfoContent(place: MapPlace): HTMLElement {
  const wrap = document.createElement('div')
  wrap.style.maxWidth = '260px'
  wrap.style.padding = '4px 0'
  const title = document.createElement('strong')
  title.textContent = place.name
  const lineBreak1 = document.createElement('br')
  const addr = document.createElement('span')
  addr.style.fontSize = '13px'
  addr.style.color = '#374151'
  addr.textContent = place.address
  const lineBreak2 = document.createElement('br')
  const link = document.createElement('a')
  link.href =
    place.mapsUri ??
    `https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}`
  link.target = '_blank'
  link.rel = 'noopener noreferrer'
  link.style.fontSize = '13px'
  link.textContent = 'Directions'
  wrap.append(title, lineBreak1, addr, lineBreak2, link)
  return wrap
}

export default function AmenityMap({
  className = '',
  showCuratedList = true,
  initialCategory = defaultAmenityCategory,
}: AmenityMapProps) {
  const mapPanelRef = useRef<HTMLDivElement>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<google.maps.Map | null>(null)
  const communityMarkerRef = useRef<google.maps.marker.AdvancedMarkerElement | google.maps.Marker | null>(
    null
  )
  const placeMarkersRef = useRef<(google.maps.marker.AdvancedMarkerElement | google.maps.Marker)[]>([])
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const [isVisible, setIsVisible] = useState(false)
  const [category, setCategory] = useState<AmenityCategoryId>(initialCategory)
  const [apiState, setApiState] = useState<'idle' | 'loading' | 'ready' | 'fallback'>('idle')
  const [places, setPlaces] = useState<MapPlace[]>([])
  const [preferCuratedList, setPreferCuratedList] = useState(false)

  const tabsId = useId()

  const enterFallback = useCallback(() => {
    if (mapRef.current) {
      mapRef.current = null
    }
    communityMarkerRef.current = null
    placeMarkersRef.current = []
    infoWindowRef.current?.close()
    setPlaces([])
    setPreferCuratedList(true)
    setApiState('fallback')
  }, [])

  const clearPlaceMarkers = useCallback(() => {
    placeMarkersRef.current.forEach((m) => {
      if ('map' in m && m.map) {
        m.map = null
      } else if ('setMap' in m) {
        m.setMap(null)
      }
    })
    placeMarkersRef.current = []
  }, [])

  const openInfo = useCallback((map: google.maps.Map, position: google.maps.LatLngLiteral, content: HTMLElement) => {
    if (!infoWindowRef.current) {
      infoWindowRef.current = new google.maps.InfoWindow()
    }
    infoWindowRef.current.setContent(content)
    infoWindowRef.current.setPosition(position)
    infoWindowRef.current.open({ map })
  }, [])

  const initMap = useCallback(async () => {
    const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    if (!key || !mapContainerRef.current || mapsAuthFailed) {
      enterFallback()
      return
    }

    setApiState('loading')
    try {
      await loadGoogleMaps(key)
      const { Map } = (await google.maps.importLibrary('maps')) as google.maps.MapsLibrary
      const center = { lat: communityCenter.lat, lng: communityCenter.lng }
      const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID

      const map = new Map(mapContainerRef.current, {
        center,
        zoom: 13,
        mapId: mapId || undefined,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
      })
      mapRef.current = map

      const communityContent = buildCommunityInfoContent()

      try {
        const { AdvancedMarkerElement } = (await google.maps.importLibrary(
          'marker'
        )) as google.maps.MarkerLibrary
        const communityMarker = new AdvancedMarkerElement({
          map,
          position: center,
          title: communityCenter.label,
        })
        communityMarker.addListener('click', () => {
          openInfo(map, center, communityContent)
        })
        communityMarkerRef.current = communityMarker
      } catch {
        const marker = new google.maps.Marker({
          map,
          position: center,
          title: communityCenter.label,
        })
        marker.addListener('click', () => {
          openInfo(map, center, communityContent)
        })
        communityMarkerRef.current = marker
      }

      setApiState('ready')
    } catch {
      enterFallback()
    }
  }, [enterFallback, openInfo])

  const renderPlaceMarkers = useCallback(
    async (mapPlaces: MapPlace[]) => {
      const map = mapRef.current
      if (!map || apiState !== 'ready') return

      clearPlaceMarkers()

      let AdvancedMarkerElement: typeof google.maps.marker.AdvancedMarkerElement | undefined
      try {
        const lib = (await google.maps.importLibrary('marker')) as google.maps.MarkerLibrary
        AdvancedMarkerElement = lib.AdvancedMarkerElement
      } catch {
        AdvancedMarkerElement = undefined
      }

      mapPlaces.forEach((place) => {
        const position = { lat: place.lat, lng: place.lng }
        const content = buildPlaceInfoContent(place)

        if (AdvancedMarkerElement) {
          const marker = new AdvancedMarkerElement({
            map,
            position,
            title: place.name,
          })
          marker.addListener('click', () => openInfo(map, position, content))
          placeMarkersRef.current.push(marker)
        } else {
          const marker = new google.maps.Marker({
            map,
            position,
            title: place.name,
          })
          marker.addListener('click', () => openInfo(map, position, content))
          placeMarkersRef.current.push(marker)
        }
      })
    },
    [apiState, clearPlaceMarkers, openInfo]
  )

  const fetchNearbyPlaces = useCallback(
    async (cat: AmenityCategoryId) => {
      const map = mapRef.current
      if (!map || apiState !== 'ready') return

      const categoryConfig = amenityCategories.find((c) => c.id === cat)
      if (!categoryConfig) return

      try {
        const center = { lat: communityCenter.lat, lng: communityCenter.lng }
        const rawPlaces = await searchCategory(center, cat, categoryConfig.placeTypes)

        const mapped: MapPlace[] = rawPlaces.flatMap((p, index) => {
          const loc = p.location
          if (!loc) return []
          const json = loc.toJSON?.() ?? { lat: loc.lat(), lng: loc.lng() }
          const name = p.displayName ? String(p.displayName) : 'Place'
          return [
            {
              id: p.id ?? `place-${index}`,
              name,
              address: p.formattedAddress ?? '',
              lat: json.lat,
              lng: json.lng,
              mapsUri: p.googleMapsURI ?? undefined,
            },
          ]
        })

        if (mapped.length === 0) {
          setPlaces([])
          setPreferCuratedList(true)
          clearPlaceMarkers()
          return
        }

        setPreferCuratedList(false)
        setPlaces(mapped)
        await renderPlaceMarkers(mapped)
      } catch {
        setPlaces([])
        setPreferCuratedList(true)
        clearPlaceMarkers()
      }
    },
    [apiState, clearPlaceMarkers, renderPlaceMarkers]
  )

  useEffect(() => {
    const onAuthFailure = () => {
      enterFallback()
    }
    window.addEventListener('gmaps:auth-failure', onAuthFailure)
    return () => window.removeEventListener('gmaps:auth-failure', onAuthFailure)
  }, [enterFallback])

  useEffect(() => {
    const el = mapPanelRef.current
    if (!el) return

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setIsVisible(true)
          observerRef.current?.disconnect()
        }
      },
      { rootMargin: '120px' }
    )
    observerRef.current.observe(el)

    return () => observerRef.current?.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    void initMap()
  }, [isVisible, initMap])

  useEffect(() => {
    if (apiState !== 'ready') return
    void fetchNearbyPlaces(category)
  }, [apiState, category, fetchNearbyPlaces])

  const curated = curatedForCategory(category)
  const useFallback = apiState === 'fallback'
  const showGooglePlacesList =
    apiState === 'ready' && places.length > 0 && !preferCuratedList

  return (
    <div className={className}>
      <div
        role="tablist"
        aria-label="Filter nearby places by category"
        className="flex flex-wrap gap-2 mb-4"
        id={tabsId}
      >
        {amenityCategories.map((cat) => {
          const selected = category === cat.id
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${tabsId}-panel`}
              id={`${tabsId}-${cat.id}`}
              onClick={() => setCategory(cat.id)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                selected
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300'
              }`}
            >
              {cat.label}
            </button>
          )
        })}
      </div>

      <div
        id={`${tabsId}-panel`}
        role="tabpanel"
        aria-labelledby={`${tabsId}-${category}`}
        ref={mapPanelRef}
        className={`relative w-full rounded-xl overflow-hidden shadow-lg border border-gray-100 ${MAP_HEIGHT_CLASS}`}
      >
        {useFallback ? (
          <iframe
            src={mapsEmbedFallbackUrl}
            title={`Map centered on ${communityCenter.label} in Henderson, Nevada`}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label={`Embedded map of ${communityCenter.address}`}
          />
        ) : (
          <>
            <div ref={mapContainerRef} className="w-full h-full" aria-label="Interactive amenity map" />
            {apiState === 'loading' && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-600 text-sm"
                aria-live="polite"
              >
                Loading map…
              </div>
            )}
          </>
        )}
      </div>

      {showCuratedList && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            {amenityCategories.find((c) => c.id === category)?.label ?? 'Places'} near Union Village
          </h3>
          {showGooglePlacesList ? (
            <ul className="space-y-3">
              {places.map((place) => (
                <li
                  key={place.id}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-3 bg-white rounded-lg border border-gray-100"
                >
                  <div>
                    <p className="font-medium text-gray-900">{place.name}</p>
                    <p className="text-sm text-gray-600">{place.address}</p>
                  </div>
                  <a
                    href={
                      place.mapsUri ??
                      `https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-700 font-medium hover:underline shrink-0"
                  >
                    Directions
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="space-y-3">
              {curated.length > 0 ? (
                curated.map((place) => (
                  <li
                    key={`${place.category}-${place.name}`}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-3 bg-white rounded-lg border border-gray-100"
                  >
                    <div>
                      <p className="font-medium text-gray-900">{place.name}</p>
                      <p className="text-sm text-gray-600">{place.address}</p>
                      {place.note && <p className="text-xs text-gray-500 mt-1">{place.note}</p>}
                    </div>
                    <a
                      href={placeDirectionsByAddress(place.address)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-700 font-medium hover:underline shrink-0"
                    >
                      Directions
                    </a>
                  </li>
                ))
              ) : (
                <p className="text-sm text-gray-600">
                  Switch categories to see curated places near {communityCenter.label}, or open the full{' '}
                  <a href="/amenities" className="text-blue-700 underline">
                    amenities page
                  </a>
                  .
                </p>
              )}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
