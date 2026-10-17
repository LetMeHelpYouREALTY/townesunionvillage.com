import SEOOptimizedMap from '../components/seo-optimized-map'
import OfficeListingsBand from '../components/office-listings-band'
import AtleighListings from '../components/atleigh-listings'
import ContentImage from '../components/content-image'
import NapStrip from '../components/nap-strip'
import FaqJsonLd from '../components/faq-jsonld'
import { hours, nap, photos, planPriceNote, pricing } from '../config/community'
import { floorPlanFaqs } from '../config/faqs'
import BreadcrumbJsonLd from '../components/breadcrumb-jsonld'
import { breadcrumbTrail } from '../lib/breadcrumbs'
import GuideLinks from '../components/guide-links'
import { pageMeta } from '../lib/page-meta'

export const metadata = pageMeta('/floor-plans', {
  title: 'Floor Plans',
  description: `Residence 1405, 1478, and 1479 at The Townes at Union Village in Henderson, NV. Century Communities starting prices as of ${pricing.asOf}, from ${pricing.startingFromLabel}.`,
})

const [plan1405, plan1478, plan1479] = pricing.plans

export default function FloorPlans() {
  return (
    <div className="min-h-screen bg-gray-50">
      <BreadcrumbJsonLd items={breadcrumbTrail('Floor plans', '/floor-plans')} />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-24 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center bg-amber-600/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-amber-400/30">
            <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 animate-pulse"></span>
            CENTURY COMMUNITIES TOWNHOMES
          </div>
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide">
            <span className="font-extralight text-white">Floor Plans</span>
            <br />
            <span className="text-2xl md:text-3xl font-light text-blue-200 tracking-wider">
              HOMES BY DR. JAN DUFFY
            </span>
          </h1>
          <p className="text-xl mb-10 font-light max-w-4xl mx-auto leading-relaxed">
            Discover three meticulously crafted floor plans featuring premium finishes, Century Home Connect® smart technology, 
            and exceptional attention to detail. Each residence represents the pinnacle of modern luxury living.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="tel:7025001955"
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-10 py-5 rounded-lg transition-all duration-300 text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 tracking-wide"
            >
              SCHEDULE PRIVATE TOUR
            </a>
            <a 
              href="/home-value"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-10 py-5 rounded-lg transition-all duration-300 text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 tracking-wide"
            >
              KNOW YOUR HOME VALUE
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

      <NapStrip />

      <OfficeListingsBand />
      <AtleighListings />

      {/* Floor Plans Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-4">
              <div className="inline-flex items-center bg-amber-600/10 px-4 py-2 rounded-full text-sm font-semibold text-amber-800 border border-amber-200">
                EXCEPTIONAL LIVING
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-wide">
              <span className="font-extralight">Three Floor Plans</span>
              <br />
              <span className="text-2xl md:text-3xl font-light text-gray-600 tracking-wider">
                THE TOWNES AT UNION VILLAGE
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              Each residence features expansive living spaces, premium finishes, and Century Home Connect® smart technology, 
              representing the pinnacle of sophisticated new construction living.
            </p>
            <p className="text-base text-gray-600 max-w-4xl mx-auto font-light leading-relaxed mt-6">
              {planPriceNote}
            </p>
          </div>

          <div className="space-y-16">
            {/* Residence 1405 */}
            <div id="residence-1405" className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-12">
                  <div className="mb-6">
                    <div className="inline-flex items-center bg-amber-600/10 px-3 py-1 rounded-full text-xs font-semibold text-amber-800 border border-amber-200 mb-4">
                      FLOOR PLAN
                    </div>
                    <h3 className="text-4xl font-light text-gray-900 mb-2 tracking-wide">Residence 1405</h3>
                    <div className="text-4xl font-light text-amber-600 mb-6">From {plan1405.fromLabel} as of {pricing.asOf}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 mb-10">
                    <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                      <div className="text-3xl font-light text-gray-900 mb-1">1,405</div>
                      <div className="text-gray-600 text-sm font-light tracking-wide">Square Feet</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                      <div className="text-3xl font-light text-gray-900 mb-1">{plan1405.beds}</div>
                      <div className="text-gray-600 text-sm font-light tracking-wide">Bedrooms</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                      <div className="text-3xl font-light text-gray-900 mb-1">2.5</div>
                      <div className="text-gray-600 text-sm font-light tracking-wide">Bathrooms</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                      <div className="text-3xl font-light text-gray-900 mb-1">2</div>
                      <div className="text-gray-600 text-sm font-light tracking-wide">Car Garage</div>
                    </div>
                  </div>

                  <div className="mb-10">
                    <h4 className="text-xl font-semibold text-gray-900 mb-6 tracking-wide">Premium Features</h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="font-light">Nook option available for flexible living</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="font-light">Open floor plan with sophisticated design</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="font-light">{plan1405.beds} bedrooms with spacious, well-appointed layout</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="font-light">2.5 bathrooms with premium finishes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="font-light">2-car garage with additional storage</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="font-light">Century Home Connect® smart home technology</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="font-light">Energy-efficient features throughout</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="tel:7025001955"
                      className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-4 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center tracking-wide"
                    >
                      SCHEDULE PRIVATE TOUR
                    </a>
                    <a 
                      href="mailto:DrJanSells@UnionVillage.com"
                      className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-gray-900 border-2 border-gray-300 hover:border-gray-400 px-8 py-4 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center tracking-wide"
                    >
                      REQUEST DETAILS
                    </a>
                  </div>
                </div>
                <div className="relative min-h-[500px]">
                  <ContentImage
                    src={photos.kitchen.src}
                    alt="Open kitchen and dining nook in Residence 1405-style townhome at Townes at Union Village, Henderson NV"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              </div>
            </div>

            {/* Residence 1478 */}
            <div id="residence-1478" className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="relative min-h-[400px] lg:order-2">
                  <ContentImage
                    src={photos.living.src}
                    alt="Open living room in Residence 1478-style townhome at Townes at Union Village, Henderson NV"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
                <div className="p-8 lg:order-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Residence 1478</h3>
                  <div className="text-4xl font-light text-amber-700 mb-6">From {plan1478.fromLabel} as of {pricing.asOf}</div>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-gray-900">1,478</div>
                      <div className="text-gray-600">Square Feet</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-gray-900">3</div>
                      <div className="text-gray-600">Bedrooms</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-gray-900">2.5</div>
                      <div className="text-gray-600">Bathrooms</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-gray-900">2</div>
                      <div className="text-gray-600">Car Garage</div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Features:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Optional Dual Primary Suites</li>
                      <li>• Nook option available</li>
                      <li>• Spacious open-concept living</li>
                      <li>• 3 bedrooms with modern layout</li>
                      <li>• 2.5 bathrooms with luxury finishes</li>
                      <li>• 2-car garage with additional storage</li>
                      <li>• Century Home Connect® smart home technology</li>
                      <li>• Premium interior features</li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="tel:7025001955"
                      className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-3 rounded-lg font-semibold tracking-wide transition-colors text-center"
                    >
                      Call Dr. Jan: (702) 500-1955
                    </a>
                    <a 
                      href="mailto:DrJanSells@UnionVillage.com"
                      className="bg-white border border-amber-300 text-amber-950 hover:bg-amber-50 px-8 py-3 rounded-lg font-semibold tracking-wide transition-colors text-center"
                    >
                      Email for Details
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Residence 1479 */}
            <div id="residence-1479" className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Residence 1479</h3>
                  <div className="text-4xl font-light text-amber-700 mb-6">From {plan1479.fromLabel} as of {pricing.asOf}</div>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-gray-900">1,479</div>
                      <div className="text-gray-600">Square Feet</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-gray-900">3</div>
                      <div className="text-gray-600">Bedrooms</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-gray-900">2.5</div>
                      <div className="text-gray-600">Bathrooms</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-gray-900">2</div>
                      <div className="text-gray-600">Car Garage</div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Features:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Open floor plan design</li>
                      <li>• 3 bedrooms with flexible layout</li>
                      <li>• 2.5 bathrooms with designer touches</li>
                      <li>• 2-car garage with workspace</li>
                      <li>• Century Home Connect® smart home features</li>
                      <li>• High-end finishes throughout</li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="tel:7025001955"
                      className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-3 rounded-lg font-semibold tracking-wide transition-colors text-center"
                    >
                      Call Dr. Jan: (702) 500-1955
                    </a>
                    <a 
                      href="mailto:DrJanSells@UnionVillage.com"
                      className="bg-white border border-amber-300 text-amber-950 hover:bg-amber-50 px-8 py-3 rounded-lg font-semibold tracking-wide transition-colors text-center"
                    >
                      Email for Details
                    </a>
                  </div>
                </div>
                <div className="relative min-h-[400px]">
                  <ContentImage
                    src={photos.suite.src}
                    alt="Primary suite in Residence 1479-style townhome at Townes at Union Village, Henderson NV"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Limited Availability Alert */}
      <section className="py-16 bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 via-amber-800/90 to-amber-900/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
            THREE FLOOR PLANS
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-wide">
            <span className="font-extralight">Residence 1405, 1478, and 1479</span>
          </h2>
          <p className="text-xl mb-10 font-light max-w-3xl mx-auto leading-relaxed">
            Century Communities builds three townhome plans at The Townes at Union Village. Homesite availability and prices change. Call Dr. Jan Duffy at {nap.phoneDisplay} to confirm what is open before you tour.
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

      {/* Location Map Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-4">
              <div className="inline-flex items-center bg-amber-600/10 px-4 py-2 rounded-full text-sm font-semibold text-amber-800 border border-amber-200">
                MODEL HOMES
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-wide">
              <span className="font-extralight">Visit Our Model Homes</span>
              <br />
              <span className="text-2xl md:text-3xl font-light text-gray-600 tracking-wider">
                THE TOWNES AT UNION VILLAGE
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              See the floor plans in person with Dr. Jan Duffy as your buyer agent.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit the Model Homes</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-2xl mr-3">🏠</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Tours by appointment</h4>
                    <p className="text-gray-600 text-sm">{hours.note} {hours.builderModel}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-3">📐</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Floor Plan Options</h4>
                    <p className="text-gray-600 text-sm">Choose from Residence 1405 (3 bed), 1478 (3 bed), or 1479 (3 bed) - all with 2.5 baths and 2-car garages.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-3">🎨</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Design Center</h4>
                    <p className="text-gray-600 text-sm">Customize your new home with premium finishes and Century Home Connect® smart features.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-3">💰</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Starting from {pricing.startingFromLabel} as of {pricing.asOf}</h4>
                    <p className="text-gray-600 text-sm">Competitive pricing with Century Communities quality construction and Dr. Jan Duffy's expert guidance.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <SEOOptimizedMap
              variant="business-profile"
              title="Floor Plans at The Townes at Union Village - Henderson, NV"
            />
          </div>
        </div>
      </section>

      <GuideLinks currentPath="/floor-plans" />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqJsonLd items={floorPlanFaqs} />
          <h2 className="text-4xl font-light tracking-wide text-slate-900 mb-10 text-center">
            Floor plan questions
          </h2>
          <div className="space-y-8">
            {floorPlanFaqs.map((item) => (
              <article key={item.question} className="border-b border-gray-200 pb-8">
                <h3 className="text-xl font-medium text-gray-900 mb-3">{item.question}</h3>
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-800/95"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center bg-amber-600/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-amber-400/30">
            TOUR WITH DR. JAN
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-wide">
            <span className="font-extralight">Ready to Find Your</span>
            <br />
            <span className="text-2xl md:text-3xl font-light text-amber-200 tracking-wider">
              DREAM HOME?
            </span>
          </h2>
          <p className="text-xl mb-10 font-light max-w-3xl mx-auto leading-relaxed">
            Contact Dr. Jan Duffy for buyer representation at The Townes at Union Village.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="tel:7025001955"
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-12 py-5 rounded-lg transition-all duration-300 text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 tracking-wide"
            >
              SCHEDULE PRIVATE TOUR
            </a>
            <a 
              href="mailto:DrJanSells@UnionVillage.com"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-12 py-5 rounded-lg transition-all duration-300 text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 tracking-wide"
            >
              CONTACT DR. JAN
            </a>
            <a 
              href="/community"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-12 py-5 rounded-lg transition-all duration-300 text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 tracking-wide"
            >
              EXPLORE COMMUNITY
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
