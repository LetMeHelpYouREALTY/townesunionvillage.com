import SEOOptimizedMap from '../components/seo-optimized-map'
import RealScoutOfficeListings from '../components/realscout-office-listings'
import ContentImage from '../components/content-image'
import { listingSearch, photos } from '../config/community'

export default function QuickMoveIn() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-24 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center bg-amber-600/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-amber-400/30">
            <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 animate-pulse"></span>
            IMMEDIATE OCCUPANCY
          </div>
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide">
            <span className="font-extralight text-white">Quick Move-In Homes</span>
            <br />
            <span className="text-2xl md:text-3xl font-light text-blue-200 tracking-wider">
              HOMES BY DR. JAN DUFFY
            </span>
          </h1>
          <p className="text-xl mb-10 font-light max-w-4xl mx-auto leading-relaxed">
            Experience immediate luxury living! Several exceptional homes are available for immediate or near-future occupancy 
            at Townes at Union Village, featuring premium finishes and Century Home Connect® smart technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="tel:7025001955"
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-10 py-5 rounded-lg transition-all duration-300 text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 tracking-wide"
            >
              SECURE YOUR HOME NOW
            </a>
            <a 
              href="mailto:DrJanSells@UnionVillage.com"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-10 py-5 rounded-lg transition-all duration-300 text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 tracking-wide"
            >
              CONTACT DR. JAN
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Search Widget */}
      {/* Limited Availability Alert */}
      <section className="py-16 bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 via-amber-800/90 to-amber-900/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            EXCLUSIVE OPPORTUNITY
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-wide">
            <span className="font-extralight">Quick Move-In Homes</span>
            <br />
            <span className="text-2xl md:text-3xl font-light text-amber-200 tracking-wider">
              MOVE IN TODAY
            </span>
          </h2>
          <p className="text-xl mb-10 font-light max-w-3xl mx-auto leading-relaxed">
            Don't wait for construction to complete. These exceptional quick move-in homes are ready now, 
            featuring premium finishes and Century Home Connect® smart technology.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-8">
            <a
              href="tel:7025001955"
              className="bg-white hover:bg-gray-100 text-amber-900 px-10 py-5 rounded-lg transition-all duration-300 text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 tracking-wide"
            >
              SCHEDULE PRIVATE TOUR
            </a>
            <a
              href="mailto:DrJanSells@UnionVillage.com"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-amber-900 text-white px-10 py-5 rounded-lg transition-all duration-300 text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 tracking-wide"
            >
              CONTACT DR. JAN
            </a>
          </div>
        </div>
      </section>

      {/* Neighborhood Properties */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="mb-4">
              <div className="inline-flex items-center bg-blue-600/10 px-4 py-2 rounded-full text-sm font-semibold text-blue-800 border border-blue-200">
                NEIGHBORHOOD OPTIONS
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-wide">
              <span className="font-extralight">Explore Other Henderson Properties</span>
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Need something different? Discover other exceptional homes in the Henderson area 
              with expert guidance from Dr. Jan Duffy, your exclusive buyer representative.
            </p>
          </div>
          <RealScoutOfficeListings 
            title="Henderson Neighborhood Properties"
            subtitle={`Expert guidance from Dr. Jan Duffy • Properties ${listingSearch.rangeLabel} • Single Family & Other Homes`}
          />
        </div>
      </section>

      {/* Available Homes Alert */}
      <section className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 via-amber-800/90 to-amber-900/90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            LIMITED INVENTORY
          </div>
          <h3 className="text-4xl md:text-5xl font-light mb-6 tracking-wide">QUICK MOVE-IN HOMES AVAILABLE</h3>
          <p className="text-xl mb-8 font-light max-w-3xl mx-auto leading-relaxed">
            Exceptional opportunity! Several premium homes are ready for immediate or near-future occupancy. 
            Contact Dr. Jan Duffy today to secure your luxury residence.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="tel:7025001955"
              className="bg-white text-amber-900 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 tracking-wide"
            >
              SECURE YOUR HOME NOW
            </a>
            <a 
              href="#available-homes"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-10 py-4 rounded-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 tracking-wide"
            >
              VIEW AVAILABLE HOMES
            </a>
          </div>
        </div>
      </section>

      {/* Available Homes */}
      <section id="available-homes" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Available Quick Move-In Homes
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              These homes are either completed or nearing completion and ready for quick move-in. 
              Pricing and availability subject to change - contact Dr. Jan for current information.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Home 1 - 8990 Rimerton Street */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border">
              <div className="h-64 relative">
                <ContentImage
                  src={photos.exterior.src}
                  alt="New Henderson townhome exterior for quick move-in inventory at Townes at Union Village"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">8990 Rimerton Street</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Under Construction
                  </span>
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-4">$420,240</div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="font-bold text-gray-900">1,602</div>
                    <div className="text-sm text-gray-600">Sq Ft</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900">3</div>
                    <div className="text-sm text-gray-600">Bedrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900">2.5</div>
                    <div className="text-sm text-gray-600">Bathrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900">2</div>
                    <div className="text-sm text-gray-600">Car Garage</div>
                  </div>
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  <strong>Residence:</strong> 1602<br />
                  <strong>Community:</strong> Skye Canyon<br />
                  <strong>Features:</strong> Century Home Connect®, BBQ Stub, Patio Cover
                </div>
                <div className="space-y-3">
                  <a 
                    href="https://drjanduffy.realscout.com/homesearch/listings/p-8990-rimerton-street-las-vegas-89166-glvartrestle-875"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    View Full Listing Details
                  </a>
                  <a 
                    href="tel:7025001955"
                    className="block w-full bg-gray-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                  >
                    Call Dr. Jan: (702) 500-1955
                  </a>
                </div>
              </div>
            </div>

            {/* Home 2 - 862 ANGWIN LN */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border">
              <div className="h-64 relative">
                <ContentImage
                  src={photos.kitchen.src}
                  alt="Quartz kitchen in a quick move-in townhome at Townes at Union Village, Henderson NV"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">862 ANGWIN LN | Lot UV0044</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Move-in Ready!
                  </span>
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-4">$379,990</div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="font-bold text-gray-900">1,478</div>
                    <div className="text-sm text-gray-600">Sq Ft</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900">3</div>
                    <div className="text-sm text-gray-600">Bedrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900">2.5</div>
                    <div className="text-sm text-gray-600">Bathrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900">2</div>
                    <div className="text-sm text-gray-600">Car Garage</div>
                  </div>
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  <strong>Residence:</strong> 1478<br />
                  <strong>Features:</strong> End unit, open floor plan<br />
                  <strong>Completion:</strong> Move-in Ready!
                </div>
                <a 
                  href="tel:7025001955"
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Call Dr. Jan: (702) 500-1955
                </a>
              </div>
            </div>

            {/* Home 3 - 849 ANGWIN LN */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border">
              <div className="h-64 relative">
                <ContentImage
                  src={photos.living.src}
                  alt="Open living room in a quick move-in townhome at Townes at Union Village, Henderson NV"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">849 ANGWIN LN | Lot UV0066</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Move-in Ready!
                  </span>
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-4">$379,990</div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="font-bold text-gray-900">1,479</div>
                    <div className="text-sm text-gray-600">Sq Ft</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900">3</div>
                    <div className="text-sm text-gray-600">Bedrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900">2.5</div>
                    <div className="text-sm text-gray-600">Bathrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900">2</div>
                    <div className="text-sm text-gray-600">Car Garage</div>
                  </div>
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  <strong>Residence:</strong> 1479<br />
                  <strong>Special:</strong> 3.875% (4.941% APR)*<br />
                  <strong>Completion:</strong> Move-in Ready!
                </div>
                <a 
                  href="tel:7025001955"
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Call Dr. Jan: (702) 500-1955
                </a>
              </div>
            </div>

            {/* Home 4 - 825 ATLEIGH AVE */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border">
              <div className="h-64 relative">
                <ContentImage
                  src={photos.suite.src}
                  alt="Primary bedroom in a quick move-in townhome at Townes at Union Village, Henderson NV"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">825 ATLEIGH AVE | Lot UV0075</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Move-in Ready!
                  </span>
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-4">$386,890</div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="font-bold text-gray-900">1,479</div>
                    <div className="text-sm text-gray-600">Sq Ft</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900">3</div>
                    <div className="text-sm text-gray-600">Bedrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900">2.5</div>
                    <div className="text-sm text-gray-600">Bathrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900">2</div>
                    <div className="text-sm text-gray-600">Car Garage</div>
                  </div>
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  <strong>Residence:</strong> 1479<br />
                  <strong>Features:</strong> Gray Cabinets, Quartz Countertops<br />
                  <strong>Completion:</strong> Move-in Ready!
                </div>
                <a 
                  href="tel:7025001955"
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Call Dr. Jan: (702) 500-1955
                </a>
              </div>
            </div>

            {/* Home 5 - 823 ATLEIGH AVE */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border">
              <div className="h-64 relative">
                <ContentImage
                  src={photos.garage.src}
                  alt="Two-car garage in a quick move-in townhome at Townes at Union Village, Henderson NV"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">823 ATLEIGH AVE | Lot UV0074</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Move-in Ready!
                  </span>
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-4">$387,890</div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="font-bold text-gray-900">1,405</div>
                    <div className="text-sm text-gray-600">Sq Ft</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900">3</div>
                    <div className="text-sm text-gray-600">Bedrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900">2.5</div>
                    <div className="text-sm text-gray-600">Bathrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900">2</div>
                    <div className="text-sm text-gray-600">Car Garage</div>
                  </div>
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  <strong>Residence:</strong> 1405<br />
                  <strong>Completion:</strong> Move-in Ready!<br />
                  <strong>Status:</strong> Available for viewing
                </div>
                <a 
                  href="tel:7025001955"
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Call Dr. Jan: (702) 500-1955
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              * Pricing and availability subject to change. Contact Dr. Jan Duffy for current information and to schedule a private showing.
            </p>
            <a 
              href="tel:7025001955"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
            >
              📞 Call Dr. Jan: (702) 500-1955
            </a>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Move-In Process
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Here's what to expect when purchasing a quick move-in home at The Townes at Union Village
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Contact Dr. Jan</h3>
              <p className="text-gray-600">
                Call (702) 500-1955 or email DrJanSells@UnionVillage.com to discuss available homes and your needs.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Schedule Tour</h3>
              <p className="text-gray-600">
                Dr. Jan will arrange a private showing of available homes and help you find the perfect match.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Make Offer</h3>
              <p className="text-gray-600">
                With Dr. Jan's expert guidance, submit an offer and negotiate the best terms for your new home.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Move In</h3>
              <p className="text-gray-600">
                Complete financing, final walkthrough, and move into your new home at The Townes at Union Village!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Move-In Map */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Move-In Homes at Union Village
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Located at 1001 Gearus Place, Henderson, NV 89011. Move-in ready homes available now with immediate occupancy.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Move-In Ready Homes Available</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-2xl mr-3">🏠</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">5 Move-In Ready Homes</h4>
                    <p className="text-gray-600 text-sm">Homes at 986 GEARUS PL, 862 ANGWIN LN, 849 ANGWIN LN, 825 ATLEIGH AVE, and 823 ATLEIGH AVE.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-3">⚡</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Immediate Occupancy</h4>
                    <p className="text-gray-600 text-sm">Skip the waiting period - these homes are completed and ready for immediate move-in.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-3">👁️</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">See What You Get</h4>
                    <p className="text-gray-600 text-sm">Tour completed homes to see actual finishes, layouts, and quality before you buy.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-3">🎯</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Limited Availability</h4>
                    <p className="text-gray-600 text-sm">Only 5 quick move-in homes remaining. Contact Dr. Jan Duffy today to secure your home.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <SEOOptimizedMap 
              variant="business-profile"
              title="Quick Move-In Homes at Union Village - Henderson, NV"
              description="5 move-in ready homes available now. Immediate occupancy at 1001 Gearus Place, Henderson, NV 89011."
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Quick Move-In Homes
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Why choose a quick move-in home at The Townes at Union Village?
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Move In Fast</h3>
              <p className="text-gray-600">
                Skip the waiting period and move into your new home immediately or within weeks, not months.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">👁️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">See What You Get</h3>
              <p className="text-gray-600">
                Tour completed homes to see the actual finishes, layout, and quality before you buy.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🏠</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Live</h3>
              <p className="text-gray-600">
                All homes come with Century Connect® smart home features and premium finishes included.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            🚨 ACT FAST - QUICK MOVE-IN HOMES ARE LIMITED!
          </h2>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            These homes won't last long. Contact Dr. Jan Duffy today to secure your quick move-in home at The Townes at Union Village.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:7025001955"
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              📞 SECURE YOUR HOME: (702) 500-1955
            </a>
            <a 
              href="mailto:DrJanSells@UnionVillage.com"
              className="bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-800 transition-colors"
            >
              📧 EMAIL DR. JAN
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
