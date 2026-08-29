'use client'

import { pricing } from 'app/config/community'

interface SimpleUnionVillageMapProps {
  className?: string
  showDirections?: boolean
}

export default function SimpleUnionVillageMap({ className = '', showDirections = true }: SimpleUnionVillageMapProps) {
  const unionVillageAddress = "1001 Gearus Place, Henderson, NV 89011"
  const encodedAddress = encodeURIComponent(unionVillageAddress)
  
  return (
    <div className={`relative ${className}`}>
      {/* Google Maps Embed */}
      <div className="w-full h-96 rounded-lg shadow-lg overflow-hidden bg-gray-100 flex items-center justify-center">
        {process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ? (
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodedAddress}&zoom=15`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="The Townes at Union Village Location"
          />
        ) : (
          <div className="text-center p-8">
            <div className="text-4xl mb-4">📍</div>
            <h4 className="font-semibold text-gray-900 mb-2">The Townes at Union Village</h4>
            <p className="text-gray-600 text-sm mb-4">{unionVillageAddress}</p>
            <p className="text-gray-500 text-xs">
              Interactive map requires Google Maps API key configuration
            </p>
          </div>
        )}
      </div>
      
      {/* Address and Directions */}
      <div className="mt-4 space-y-2">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">📍 The Townes at Union Village</h3>
          <p className="text-gray-600 mb-3">{unionVillageAddress}</p>
        </div>
        
        {showDirections && (
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium"
            >
              🗺️ Get Directions
            </a>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors text-center font-medium"
            >
              📍 View on Google Maps
            </a>
          </div>
        )}
        
        <div className="text-center text-sm text-gray-500 mt-3">
          <p>Conveniently located near Henderson Hospital and major shopping centers</p>
          <p>Easy access via Highway 95 and I-215</p>
        </div>
      </div>
    </div>
  )
}

// Alternative component using Google Maps JavaScript API (more advanced)
export function AdvancedUnionVillageMap({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div 
        id="union-village-map"
        className="w-full h-96 rounded-lg shadow-lg"
        style={{ minHeight: '400px' }}
      />
      <div className="mt-4 text-center text-sm text-gray-600">
        <p>📍 1001 Gearus Place, Henderson, NV 89011</p>
        <p>🗺️ The Townes at Union Village - Interactive Map</p>
      </div>
      
      {/* Load Google Maps script */}
      <script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places&callback=initUnionVillageMap`}
        async
        defer
      />
      
      {/* Initialize map script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            function initUnionVillageMap() {
              const unionVillageLocation = { lat: 36.0395, lng: -115.0362 };
              
              const map = new google.maps.Map(document.getElementById('union-village-map'), {
                center: unionVillageLocation,
                zoom: 15,
                mapTypeControl: false,
                streetViewControl: true,
                fullscreenControl: true,
              });
              
              const marker = new google.maps.Marker({
                position: unionVillageLocation,
                map: map,
                title: 'The Townes at Union Village - 1001 Gearus Place, Henderson, NV 89011'
              });
              
              const infoWindow = new google.maps.InfoWindow({
                content: \`
                  <div style="padding: 10px;">
                    <h3 style="margin: 0 0 8px 0; color: #1f2937; font-weight: 600;">The Townes at Union Village</h3>
                    <p style="margin: 0 0 8px 0; color: #4b5563;">1001 Gearus Place, Henderson, NV 89011</p>
                    <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">New townhomes starting from ${pricing.startingFromLabel}</p>
                    <div style="margin-top: 8px;">
                      <a href="tel:7025001955" style="display: inline-block; background: #2563eb; color: white; padding: 6px 12px; border-radius: 4px; text-decoration: none; font-size: 14px; margin-right: 8px;">Call (702) 500-1955</a>
                      <a href="https://www.google.com/maps/dir/?api=1&destination=1001+Gearus+Place,+Henderson,+NV+89011" target="_blank" style="display: inline-block; background: #059669; color: white; padding: 6px 12px; border-radius: 4px; text-decoration: none; font-size: 14px;">Directions</a>
                    </div>
                  </div>
                \`
              });
              
              marker.addListener('click', () => {
                infoWindow.open(map, marker);
              });
              
              // Add nearby amenities
              const amenities = [
                {
                  position: { lat: 36.0415, lng: -115.0342 },
                  title: 'Henderson Hospital',
                  type: 'hospital'
                },
                {
                  position: { lat: 36.0375, lng: -115.0382 },
                  title: 'Galleria at Sunset',
                  type: 'shopping'
                }
              ];
              
              amenities.forEach(amenity => {
                new google.maps.Marker({
                  position: amenity.position,
                  map: map,
                  title: amenity.title,
                  icon: {
                    url: amenity.type === 'hospital' ? 'https://maps.google.com/mapfiles/ms/icons/red-dot.png' : 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                    scaledSize: new google.maps.Size(32, 32)
                  }
                });
              });
            }
          `
        }}
      />
    </div>
  )
}
