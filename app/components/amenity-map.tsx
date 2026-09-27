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

const MAP_HEIGHT_CLASS = 'min-h-[420px] h-[420px] sm:h-[480px]'
const SEARCH_RADIUS_METERS = 8000

type MapPlace = {
  id: string
  name: string
  address: string
  rating?: number
  lat: number
  lng: number
}

type AmenityMapProps = {
  className?: string
  /** When true, show a compact static list under the map */
  showCuratedList?: boolean
  initialCategory?: AmenityCategoryId
}

function directionsUrl(lat: number, lng: number, label: string) {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&destination_place_id=&travelmode=driving`
}

function placeDirectionsByAddress(address: string) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`
}

function curatedForCategory(category: AmenityCategoryId): CuratedPlace[] {
  return curatedPlaces.filter((p) => p.category === category)
}

function loadGoogleMapsScript(): Promise<void> {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  if (!key) {
    return Promise.reject(new Error('missing_api_key'))
  }
  if (typeof window !== 'undefined' && window.google?.maps) {
    return Promise.resolve()
  }
  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-amenity-map-loader]'
    )
    if (existing) {
      existing.addEventListener('load', () => resolve())
      existing.addEventListener('error', () => reject(new Error('script_load_failed')))
      return
    }
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&loading=async`
    script.async = true
    script.defer = true
    script.dataset.amenityMapLoader = 'true'
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('script_load_failed'))
    document.head.appendChild(script)
  })
}

export default function AmenityMap({
  className = '',
  showCuratedList = true,
  initialCategory = defaultAmenityCategory,
}: AmenityMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<google.maps.Map | null>(null)
  const communityMarkerRef = useRef<google.maps.marker.AdvancedMarkerElement | google.maps.Marker | null>(null)
  const placeMarkersRef = useRef<(google.maps.marker.AdvancedMarkerElement | google.maps.Marker)[]>([])
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const [isVisible, setIsVisible] = useState(false)
  const [category, setCategory] = useState<AmenityCategoryId>(initialCategory)
  const [apiState, setApiState] = useState<'idle' | 'loading' | 'ready' | 'fallback'>('idle')
  const [places, setPlaces] = useState<MapPlace[]>([])
  const [loadError, setLoadError] = useState<string | null>(null)

  const tabsId = useId()

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

  const openInfo = useCallback(
    (map: google.maps.Map, position: google.maps.LatLngLiteral, html: string) => {
      if (!infoWindowRef.current) {
        infoWindowRef.current = new google.maps.InfoWindow()
      }
      infoWindowRef.current.setContent(html)
      infoWindowRef.current.setPosition(position)
      infoWindowRef.current.open({ map })
    },
    []
  )

  const initMap = useCallback(async () => {
    const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    if (!key || !mapContainerRef.current) {
      setApiState('fallback')
      return
    }

    setApiState('loading')
    try {
      await loadGoogleMapsScript()
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

      const communityHtml = `
        <div style="max-width:240px;padding:4px 0;">
          <strong>${communityCenter.label}</strong><br/>
          <span style="font-size:13px;color:#374151;">${communityCenter.address}</span><br/>
          <a href="${placeDirectionsByAddress(communityCenter.address)}" target="_blank" rel="noopener noreferrer" style="font-size:13px;">Directions</a>
        </div>
      `

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
          openInfo(map, center, communityHtml)
        })
        communityMarkerRef.current = communityMarker
      } catch {
        const marker = new google.maps.Marker({
          map,
          position: center,
          title: communityCenter.label,
        })
        marker.addListener('click', () => {
          openInfo(map, center, communityHtml)
        })
        communityMarkerRef.current = marker
      }

      setApiState('ready')
    } catch {
      setApiState('fallback')
      setLoadError(null)
    }
  }, [openInfo])

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
        const ratingLine =
          place.rating !== undefined
            ? `<br/><span style="font-size:12px;color:#6b7280;">Rating: ${place.rating.toFixed(1)}</span>`
            : ''
        const html = `
          <div style="max-width:260px;padding:4px 0;">
            <strong>${place.name}</strong>${ratingLine}<br/>
            <span style="font-size:13px;color:#374151;">${place.address}</span><br/>
            <a href="${directionsUrl(place.lat, place.lng, place.name)}" target="_blank" rel="noopener noreferrer" style="font-size:13px;">Directions</a>
          </div>
        `

        if (AdvancedMarkerElement) {
          const marker = new AdvancedMarkerElement({
            map,
            position,
            title: place.name,
          })
          marker.addListener('click', () => openInfo(map, position, html))
          placeMarkersRef.current.push(marker)
        } else {
          const marker = new google.maps.Marker({
            map,
            position,
            title: place.name,
          })
          marker.addListener('click', () => openInfo(map, position, html))
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
        const { Place } = (await google.maps.importLibrary('places')) as google.maps.PlacesLibrary
        const center = new google.maps.LatLng(communityCenter.lat, communityCenter.lng)

        const request = {
          fields: [
            'displayName',
            'formattedAddress',
            'location',
            'rating',
            'id',
          ],
          locationRestriction: {
            center,
            radius: SEARCH_RADIUS_METERS,
          },
          includedPrimaryTypes: categoryConfig.placeTypes,
          maxResultCount: 15,
        }

        const { places: rawPlaces } = await Place.searchNearby(request)

        const mapped: MapPlace[] = rawPlaces.flatMap((p, index) => {
          const loc = p.location
          if (!loc) return []
          const rating = p.rating ?? undefined
          const name = p.displayName ? String(p.displayName) : 'Place'
          return [
            {
              id: p.id ?? `place-${index}`,
              name,
              address: p.formattedAddress ?? '',
              rating,
              lat: loc.lat(),
              lng: loc.lng(),
            },
          ]
        })

        if (mapped.length === 0) {
          const staticList = curatedForCategory(cat)
          const geocoder = new google.maps.Geocoder()
          const geocoded: MapPlace[] = []
          for (const item of staticList.slice(0, 8)) {
            try {
              const res = await geocoder.geocode({ address: item.address })
              const loc = res.results[0]?.geometry?.location
              if (loc) {
                geocoded.push({
                  id: item.name,
                  name: item.name,
                  address: item.address,
                  lat: loc.lat(),
                  lng: loc.lng(),
                })
              }
            } catch {
              /* skip single geocode failure */
            }
          }
          setPlaces(geocoded)
          await renderPlaceMarkers(geocoded)
          return
        }

        setPlaces(mapped)
        await renderPlaceMarkers(mapped)
      } catch {
        setPlaces([])
        clearPlaceMarkers()
      }
    },
    [apiState, clearPlaceMarkers, renderPlaceMarkers]
  )

  useEffect(() => {
    const el = mapContainerRef.current
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
  const useFallback = apiState === 'fallback' || apiState === 'idle'

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

      {loadError && (
        <p className="mt-2 text-sm text-amber-800" role="status">
          {loadError}
        </p>
      )}

      {showCuratedList && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            {amenityCategories.find((c) => c.id === category)?.label ?? 'Places'} near Union Village
          </h3>
          {apiState === 'ready' && places.length > 0 ? (
            <ul className="space-y-3">
              {places.map((place) => (
                <li
                  key={place.id}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-3 bg-white rounded-lg border border-gray-100"
                >
                  <div>
                    <p className="font-medium text-gray-900">{place.name}</p>
                    <p className="text-sm text-gray-600">{place.address}</p>
                    {place.rating !== undefined && (
                      <p className="text-xs text-gray-500">Google rating: {place.rating.toFixed(1)}</p>
                    )}
                  </div>
                  <a
                    href={directionsUrl(place.lat, place.lng, place.name)}
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
                    key={place.name}
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
