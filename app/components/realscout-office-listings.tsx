'use client'

import { useEffect, useState } from 'react'
import { listingSearch } from '../config/community'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-office-listings': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'agent-encoded-id': string
        'sort-order'?: string
        'listing-status'?: string
        'property-types'?: string
        'price-min'?: string
        'price-max'?: string
      }
    }
  }
}

interface RealScoutOfficeListingsProps {
  className?: string
  title?: string
  subtitle?: string
  /** Lower bound of the price filter. Defaults to the hyperlocal band. */
  priceMin?: number
  /** Upper bound of the price filter. Defaults to the hyperlocal band. */
  priceMax?: number
}

export default function RealScoutOfficeListings({ 
  className = '', 
  title = "Explore Other Henderson Properties",
  subtitle = `Properties ${listingSearch.rangeLabel} • Single Family & Other Homes • Expert guidance from Dr. Jan Duffy`,
  priceMin = listingSearch.priceMin,
  priceMax = listingSearch.priceMax,
}: RealScoutOfficeListingsProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Add custom styles for office listings
    if (!document.querySelector('style[data-realscout-office-custom]')) {
      const style = document.createElement('style')
      style.setAttribute('data-realscout-office-custom', 'true')
      style.textContent = `
        realscout-office-listings {
          --rs-as-button-text-color: #ffffff;
          --rs-as-background-color: #ffffff;
          --rs-as-button-color: rgb(35, 93, 137);
          --rs-as-widget-width: 100% !important;
          display: block !important;
          min-height: 400px !important;
        }
      `
      document.head.appendChild(style)
    }

    // Load RealScout script with multiple fallback strategies
    const loadRealScoutScript = () => {
      // Check if already loaded
      if (document.querySelector('script[src*="realscout-web-components"]')) {
        setIsLoading(false)
        return
      }

      const script = document.createElement('script')
      script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js'
      script.type = 'module'
      script.async = true
      
      script.onload = () => {
        console.log('RealScout script loaded successfully for office listings')
        setIsLoading(false)
        // Wait a bit for custom element to register
        setTimeout(() => {
          const customElement = customElements.get('realscout-office-listings')
          if (customElement) {
            console.log('RealScout office listings custom element registered')
          } else {
            console.log('RealScout office listings custom element not found')
            setHasError(true)
          }
        }, 2000)
      }
      
      script.onerror = () => {
        console.error('Failed to load RealScout script for office listings')
        setHasError(true)
        setIsLoading(false)
        // Try alternative loading method
        const fallbackScript = document.createElement('script')
        fallbackScript.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js'
        fallbackScript.async = true
        fallbackScript.onload = () => {
          console.log('Fallback RealScout script loaded for office listings')
          setIsLoading(false)
        }
        fallbackScript.onerror = () => {
          console.error('Fallback script also failed for office listings')
          setHasError(true)
        }
        document.head.appendChild(fallbackScript)
      }
      
      document.head.appendChild(script)
    }

    // Try to load immediately
    loadRealScoutScript()

    // Also try after a delay in case Cloudflare Worker is slow
    const timeoutId = setTimeout(loadRealScoutScript, 2000)

    // Set a maximum timeout for the entire loading process
    const maxTimeoutId = setTimeout(() => {
      if (isLoading) {
        console.warn('RealScout office listings widget loading timeout - showing error state')
        setHasError(true)
        setIsLoading(false)
      }
    }, 10000) // 10 second timeout

    return () => {
      clearTimeout(timeoutId)
      clearTimeout(maxTimeoutId)
    }
  }, [isLoading])

  return (
    <div className={`bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden ${className}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
        <div className="text-center">
          <h3 className="text-2xl font-light text-white mb-2 tracking-wide">{title}</h3>
          <p className="text-blue-100 font-light text-sm">{subtitle}</p>
        </div>
      </div>
      
      {/* Widget Container */}
      <div className="p-8">
        {isLoading && (
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600 font-light">Loading neighborhood properties...</p>
            </div>
          </div>
        )}
        
        {hasError && (
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-2xl">⚠️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Neighborhood Search Temporarily Unavailable</h3>
              <p className="text-gray-600 font-light mb-6">
                Please contact Dr. Jan Duffy directly for information about other properties in the Henderson area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:7025001955"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Call (702) 500-1955
                </a>
                <a
                  href="mailto:DrJanSells@UnionVillage.com"
                  className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Email Dr. Jan
                </a>
              </div>
            </div>
          </div>
        )}
        
        {!isLoading && !hasError && (
          <realscout-office-listings 
            agent-encoded-id="QWdlbnQtMjI1MDUw" 
            sort-order="PRICE_LOW" 
            listing-status="For Sale" 
            property-types=",SFR,OTHER" 
            price-min={String(priceMin)} 
            price-max={String(priceMax)}
          ></realscout-office-listings>
        )}
      </div>
      
      {/* Footer Note */}
      <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
        <p className="text-center text-gray-600 text-sm font-light">
          Homes for sale nearby. Call Dr. Jan Duffy at (702) 500-1955 to tour.
        </p>
      </div>
    </div>
  )
}
