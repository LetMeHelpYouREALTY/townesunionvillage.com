import RealScoutHomeValue from '../components/realscout-home-value'
import BreadcrumbJsonLd from '../components/breadcrumb-jsonld'
import { breadcrumbTrail } from '../lib/breadcrumbs'

export default function HomeValue() {
  return (
    <div className="min-h-screen bg-gray-50">
      <BreadcrumbJsonLd items={breadcrumbTrail('Home value', '/home-value')} />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-24 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center bg-amber-600/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-amber-400/30">
            <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 animate-pulse" />
            FREE PROPERTY VALUATION
          </div>
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide">
            <span className="font-extralight text-white">Get Your Home</span>
            <br />
            <span className="text-2xl md:text-3xl font-light text-blue-200 tracking-wider">
              VALUE ESTIMATE
            </span>
          </h1>
          <p className="text-xl mb-10 font-light max-w-4xl mx-auto leading-relaxed">
            Discover the current market value of your Henderson property with a comprehensive analysis 
            from Dr. Jan Duffy, your trusted local real estate expert with deep market knowledge.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="#home-value-widget"
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-10 py-5 rounded-lg transition-all duration-300 text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 tracking-wide"
            >
              GET FREE ESTIMATE
            </a>
            <a 
              href="tel:7025001955"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-10 py-5 rounded-lg transition-all duration-300 text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 tracking-wide"
            >
              CALL (702) 500-1955
            </a>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-4">
              <div className="inline-flex items-center bg-amber-600/10 px-4 py-2 rounded-full text-sm font-semibold text-amber-800 border border-amber-200">
                EXPERT VALUATION
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-wide">
              <span className="font-extralight">Why Choose Dr. Jan Duffy</span>
              <br />
              <span className="text-2xl md:text-3xl font-light text-gray-600 tracking-wider">
                FOR YOUR HOME VALUATION?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              Get an accurate, data-driven property valuation backed by local market expertise, 
              comprehensive analysis, and personalized insights from Henderson's trusted real estate professional.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide">Market Expertise</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Deep knowledge of Henderson's real estate market with access to the latest sales data and trends.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide">Local Knowledge</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Nevada License S.0197614 with comprehensive understanding of Henderson neighborhoods and property values.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide">Instant Results</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Get your property value estimate immediately with detailed market analysis and comparable properties.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide">Personal Service</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                One-on-one consultation and personalized recommendations based on your specific property and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Home Value Widget */}
      <section id="home-value-widget" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="mb-4">
              <div className="inline-flex items-center bg-blue-600/10 px-4 py-2 rounded-full text-sm font-semibold text-blue-800 border border-blue-200">
                FREE VALUATION
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-wide">
              <span className="font-extralight">Get Your Property Value</span>
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Enter your property address to receive an instant, comprehensive valuation report 
              with market insights and comparable properties from Dr. Jan Duffy.
            </p>
          </div>
          <RealScoutHomeValue />
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-4">
              <div className="inline-flex items-center bg-green-600/10 px-4 py-2 rounded-full text-sm font-semibold text-green-800 border border-green-200">
                HENDERSON MARKET INSIGHTS
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-wide">
              <span className="font-extralight">Current Market Trends</span>
              <br />
              <span className="text-2xl md:text-3xl font-light text-gray-600 tracking-wider">
                HENDERSON, NEVADA
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              Stay informed with the latest Henderson real estate market data, trends, and insights 
              from Dr. Jan Duffy, your local market expert.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📈</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Market Growth</h3>
              </div>
              <p className="text-gray-600 font-light leading-relaxed text-center">
                Henderson's real estate market continues to show strong growth with increasing demand 
                for quality homes in premier locations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏘️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">New Construction</h3>
              </div>
              <p className="text-gray-600 font-light leading-relaxed text-center">
                Premium new construction communities like Union Village are driving market appreciation 
                and attracting quality buyers.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⭐</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Location Value</h3>
              </div>
              <p className="text-gray-600 font-light leading-relaxed text-center">
                Henderson's proximity to Las Vegas, excellent schools, and quality amenities 
                continues to drive property values higher.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-wide">
              <span className="font-extralight">Trusted by Henderson Homeowners</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Dr. Jan Duffy has helped hundreds of Henderson families with accurate property valuations 
              and expert real estate guidance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-600 mb-2">500+</div>
              <div className="text-gray-600 font-light">Properties Valued</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-600 mb-2">15+</div>
              <div className="text-gray-600 font-light">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-600 mb-2">98%</div>
              <div className="text-gray-600 font-light">Client Satisfaction</div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 text-center">
            <blockquote className="text-xl text-gray-700 font-light italic mb-6 leading-relaxed">
              "Dr. Jan Duffy provided the most accurate and detailed property valuation I've ever received. 
              Her knowledge of the Henderson market is unmatched, and she helped me make informed decisions 
              about my property investment."
            </blockquote>
            <div className="text-gray-600 font-medium">
              — Sarah M., Henderson Homeowner
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 via-amber-800/90 to-amber-900/90" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
            GET STARTED TODAY
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-wide">
            <span className="font-extralight">Ready to Discover Your Property Value?</span>
          </h2>
          <p className="text-xl mb-10 font-light max-w-3xl mx-auto leading-relaxed">
            Get your free property valuation and expert market insights from Dr. Jan Duffy. 
            Your Henderson real estate journey starts here.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-8">
            <a
              href="#home-value-widget"
              className="bg-white hover:bg-gray-100 text-amber-900 px-10 py-5 rounded-lg transition-all duration-300 text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 tracking-wide"
            >
              GET FREE VALUATION
            </a>
            <a
              href="tel:7025001955"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-amber-900 text-white px-10 py-5 rounded-lg transition-all duration-300 text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 tracking-wide"
            >
              CALL (702) 500-1955
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
