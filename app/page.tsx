import Image from 'next/image'
import Link from 'next/link'
import SEOOptimizedMap from './components/seo-optimized-map'
import RealScoutWidget from './components/realscout-widget'
import RealScoutOfficeListings from './components/realscout-office-listings'
import ContentImage from './components/content-image'
import { photos, pricing } from './config/community'

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <Image
          src={photos.exterior.src}
          alt={photos.exterior.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/75" />
        
        {/* Animated Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse delay-500" />
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400 rounded-full animate-bounce delay-300" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-bounce delay-700" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-500" />
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-amber-300 rounded-full animate-bounce delay-1000" />
        
        {/* Geometric Patterns */}
        <div className="absolute top-10 right-10 w-32 h-32 border border-white/10 rotate-45 animate-spin-slow" />
        <div className="absolute bottom-10 left-10 w-24 h-24 border border-amber-400/20 rotate-12 animate-pulse" />
        
        {/* Main Content */}
        <div className="relative z-20 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-amber-600/90 to-amber-700/90 backdrop-blur-md text-white px-8 py-4 rounded-full text-sm font-bold mb-12 shadow-2xl border border-amber-400/30 hover-scale transition-optimized transform-gpu">
            <span className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse shadow-lg" />
            EXCLUSIVE NEW CONSTRUCTION - LIMITED RELEASE
          </div>
          
          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light leading-tight mb-8 tracking-wide">
            <span className="text-white font-extralight block mb-6" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              Townes at Union Village
            </span>
            <span className="text-3xl md:text-5xl lg:text-6xl font-light text-amber-300 tracking-wider block" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
              HOMES BY DR. JAN DUFFY
            </span>
          </h1>
          
          {/* Enhanced Pricing Display */}
          <div className="mb-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-200 font-light mb-3 tracking-wide">PRICED FROM</p>
            <div className="text-6xl md:text-7xl font-light text-white mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              {pricing.startingFromLabel}
            </div>
            <p className="text-lg text-gray-300 tracking-wider">TOWNHOMES UP TO 1,479 SQ FT</p>
            <div className="mt-6 flex justify-center space-x-4 text-sm text-gray-400">
              <span>• 3 Bedrooms</span>
              <span>• 2.5 Bathrooms</span>
              <span>• 2-Car Garage</span>
            </div>
          </div>
          
          {/* Enhanced Description */}
          <p className="text-xl md:text-2xl mb-16 text-gray-200 max-w-5xl mx-auto font-light leading-relaxed tracking-wide">
            Sophisticated new construction featuring premium finishes, Century Home Connect® smart technology, 
            and exceptional attention to detail. Experience the pinnacle of modern living with expert guidance 
            from Dr. Jan Duffy, your exclusive buyer representative.
          </p>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-8 mb-16">
            <a
              href="tel:7025001955"
              className="group bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-12 py-6 rounded-xl transition-optimized text-lg font-bold shadow-2xl hover:shadow-3xl hover:scale-105 border border-amber-500/50 tracking-wide min-w-[280px] relative overflow-hidden transform-gpu"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative flex items-center justify-center">
                <span className="mr-3">📞</span>
                SCHEDULE PRIVATE TOUR
              </span>
            </a>
            <Link
              href="/floor-plans"
              className="group bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-12 py-6 rounded-xl transition-optimized text-lg font-bold shadow-2xl hover:shadow-3xl hover:scale-105 backdrop-blur-sm tracking-wide min-w-[280px] relative overflow-hidden transform-gpu"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative flex items-center justify-center">
                <span className="mr-3">🏠</span>
                EXPLORE FLOOR PLANS
              </span>
            </Link>
            <Link
              href="/home-value"
              className="group bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-12 py-6 rounded-xl transition-optimized text-lg font-bold shadow-2xl hover:shadow-3xl hover:scale-105 backdrop-blur-sm tracking-wide min-w-[280px] relative overflow-hidden transform-gpu"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative flex items-center justify-center">
                <span className="mr-3">💰</span>
                GET HOME VALUE
              </span>
            </Link>
          </div>
          
          {/* Enhanced Luxury Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl hover:bg-white/10 hover:scale-105 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="text-5xl font-light text-white mb-3 group-hover:text-amber-300 transition-colors duration-300" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>3</div>
                <div className="text-gray-300 text-lg font-light tracking-wide group-hover:text-white transition-colors duration-300 uppercase">Exclusive Floor Plans</div>
                <div className="text-gray-400 text-sm mt-2">Residence 1405 • 1478 • 1478</div>
              </div>
            </div>
            <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl hover:bg-white/10 hover:scale-105 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="text-5xl font-light text-white mb-3 group-hover:text-blue-300 transition-colors duration-300" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>1,405-1,479</div>
                <div className="text-gray-300 text-lg font-light tracking-wide group-hover:text-white transition-colors duration-300 uppercase">Square Feet</div>
                <div className="text-gray-400 text-sm mt-2">Spacious living areas</div>
              </div>
            </div>
            <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl hover:bg-white/10 hover:scale-105 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="text-5xl font-light text-white mb-3 group-hover:text-green-300 transition-colors duration-300" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>2.5</div>
                <div className="text-gray-300 text-lg font-light tracking-wide group-hover:text-white transition-colors duration-300 uppercase">Premium Bathrooms</div>
                <div className="text-gray-400 text-sm mt-2">Luxury finishes included</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RealScout Search Widget - Primary Lead Capture */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="mb-4">
              <div className="inline-flex items-center bg-amber-600/10 px-4 py-2 rounded-full text-sm font-semibold text-amber-800 border border-amber-200">
                PROPERTY SEARCH
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-wide">
              <span className="font-extralight">Find Your Dream Home</span>
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Search all available properties in Henderson, NV and surrounding areas with expert guidance from Dr. Jan Duffy, 
              your exclusive buyer representative.
            </p>
          </div>
          <RealScoutWidget 
            title="Search All Henderson Properties"
            subtitle="Expert guidance from Dr. Jan Duffy • Your exclusive buyer representative"
          />
        </div>
      </section>

      {/* Limited Availability */}
      <section className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 text-white text-center py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 via-amber-800/90 to-amber-900/90" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
            EXCLUSIVE OPPORTUNITY
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-wide">LIMITED AVAILABILITY</h2>
          <p className="text-xl mb-8 font-light max-w-3xl mx-auto leading-relaxed">
            Only 3 exclusive floor plans remain. Townes at Union Village represents the pinnacle of luxury new construction. 
            Secure your private consultation with Dr. Jan Duffy before these exceptional homes are claimed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="tel:7025001955"
              className="bg-white text-amber-900 px-10 py-4 rounded-lg hover:bg-gray-100 transition-optimized text-lg font-semibold shadow-2xl hover:shadow-3xl hover:scale-105 tracking-wide transform-gpu"
            >
              SECURE PRIVATE CONSULTATION
            </a>
            <Link
              href="/floor-plans"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-10 py-4 rounded-lg transition-optimized text-lg font-semibold shadow-2xl hover:shadow-3xl hover:scale-105 tracking-wide transform-gpu"
            >
              EXPLORE FLOOR PLANS
            </Link>
          </div>
        </div>
      </section>

      {/* Floor Plans Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <div className="inline-flex items-center bg-amber-600/10 px-4 py-2 rounded-full text-sm font-semibold text-amber-800 border border-amber-200">
              EXCLUSIVE FLOOR PLANS
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-wide">
            <span className="font-extralight">Townes at Union Village</span>
            <br />
            <span className="text-2xl md:text-3xl font-light text-gray-600 tracking-wider">
              EXCEPTIONAL FLOOR PLANS
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-16 font-light max-w-4xl mx-auto leading-relaxed">
            Discover three meticulously crafted floor plans featuring premium finishes, Century Home Connect® smart technology, 
            and exceptional attention to detail. Each residence represents the pinnacle of modern luxury living.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {pricing.plans.map((plan, index) => {
              const planPhoto =
                index === 0 ? photos.exterior : index === 1 ? photos.kitchen : photos.living
              return (
                <div
                  key={plan.slug}
                  className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-optimized hover:scale-105 transform-gpu"
                >
                  <div className="h-64 relative">
                    <ContentImage
                      src={planPhoto.src}
                      alt={planPhoto.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="mb-6">
                      <h3 className="text-3xl font-light text-gray-900 mb-2 tracking-wide">{plan.name}</h3>
                      <div className="text-3xl font-light text-amber-600 mb-4">From {plan.fromLabel}</div>
                    </div>
                    <div className="space-y-3 mb-8">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600 font-light">Square Feet</span>
                        <span className="font-semibold text-gray-900">{plan.sqft.toLocaleString('en-US')}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600 font-light">Bedrooms</span>
                        <span className="font-semibold text-gray-900">{plan.beds}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600 font-light">Bathrooms</span>
                        <span className="font-semibold text-gray-900">{plan.baths}</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-600 font-light">Garage</span>
                        <span className="font-semibold text-gray-900">2 Car</span>
                      </div>
                    </div>
                    <Link
                      href={`/floor-plans#${plan.slug}`}
                      className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-4 rounded-lg transition-optimized font-semibold shadow-lg hover:shadow-xl hover:scale-105 text-center block tracking-wide transform-gpu"
                    >
                      EXPLORE DETAILS
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Neighborhood Properties */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="mb-4">
              <div className="inline-flex items-center bg-blue-600/10 px-4 py-2 rounded-full text-sm font-semibold text-blue-800 border border-blue-200">
                NEIGHBORHOOD PROPERTIES
            </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-wide">
              <span className="font-extralight">Explore Other Henderson Homes</span>
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Looking for something different? Discover other exceptional properties in the Henderson area 
              with expert guidance from Dr. Jan Duffy, your exclusive buyer representative.
            </p>
          </div>
          <RealScoutOfficeListings 
            title="Henderson Neighborhood Properties"
            subtitle="Expert guidance from Dr. Jan Duffy • Properties $350K-$450K • Single Family & Other Homes"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white text-center py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-800/95" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center bg-amber-600/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-amber-400/30">
            <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 animate-pulse" />
            FINAL OPPORTUNITY
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-wide">
            <span className="font-extralight">Don't Miss This</span>
            <br />
            <span className="text-2xl md:text-3xl font-light text-amber-200 tracking-wider">
              EXCLUSIVE OPPORTUNITY
            </span>
          </h2>
          <p className="text-xl mb-10 font-light max-w-3xl mx-auto leading-relaxed">
            With only 3 exclusive floor plans remaining, these exceptional homes represent the pinnacle of luxury new construction. 
            Secure your private consultation with Dr. Jan Duffy before these remarkable residences are claimed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-8">
            <a
              href="tel:7025001955"
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-12 py-5 rounded-lg transition-optimized text-lg font-semibold shadow-2xl hover:shadow-3xl hover:scale-105 tracking-wide transform-gpu"
            >
              SECURE PRIVATE CONSULTATION
            </a>
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-12 py-5 rounded-lg transition-optimized text-lg font-semibold shadow-2xl hover:shadow-3xl hover:scale-105 tracking-wide transform-gpu"
            >
              SCHEDULE CONSULTATION
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
