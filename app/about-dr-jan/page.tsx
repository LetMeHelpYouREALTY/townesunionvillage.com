import SEOOptimizedMap from '../components/seo-optimized-map'
import RealScoutOfficeListings from '../components/realscout-office-listings'
import AgentPhoto from '../components/agent-photo'
import { calendly } from '../config/community'

export default function AboutDrJan() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AgentPhoto size={128} priority className="mx-auto mb-6 ring-4 ring-amber-400" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Dr. Jan Duffy
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Your Preferred Buyer Agent and New Home Expert
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:7025001955"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              📞 Call (702) 500-1955
            </a>
            <a
              href="/contact#book"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-500 transition-colors"
            >
              {calendly.ctaLabel}
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Expert Guidance You Can Trust
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                As an independent real estate agent, Dr. Jan Duffy represents YOUR interests, 
                not the builder's. Get expert guidance, market knowledge, and negotiation power 
                when buying your new home at The Townes at Union Village.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="text-2xl mr-4">✅</div>
                  <span className="text-gray-700">Independent agent representing YOUR interests</span>
                </div>
                <div className="flex items-center">
                  <div className="text-2xl mr-4">✅</div>
                  <span className="text-gray-700">Nevada License S.0197614</span>
                </div>
                <div className="flex items-center">
                  <div className="text-2xl mr-4">✅</div>
                  <span className="text-gray-700">Deep Henderson market knowledge</span>
                </div>
                <div className="flex items-center">
                  <div className="text-2xl mr-4">✅</div>
                  <span className="text-gray-700">Century Communities partnership</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <AgentPhoto size={320} className="ring-4 ring-amber-400 shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Dr. Jan */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Dr. Jan Duffy?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Get expert, unbiased guidance—I'm your trusted advisor, not the builder's sales agent
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-8 text-center shadow-md">
              <div className="text-6xl mb-6">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Century Communities Partnership</h3>
              <p className="text-gray-600">
                I work directly with Century Communities to give you insider access while representing YOUR interests, not theirs.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-md">
              <div className="text-6xl mb-6">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Market Expertise</h3>
              <p className="text-gray-600">
                I'll show you comparable communities and help you understand true market value—not just what the builder tells you.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-md">
              <div className="text-6xl mb-6">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Negotiation Power</h3>
              <p className="text-gray-600">
                Even with new construction, there's room to negotiate. I know how to maximize your leverage and protect your interests.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-md">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Henderson Specialist</h3>
              <p className="text-gray-600">
                Nevada License S.0197614. Deep knowledge of Union Village and the entire Henderson metro area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Dr. Jan Duffy Helps You
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive support throughout your home buying journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-3xl mr-4">🏠</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">New Construction Expertise</h3>
                  <p className="text-gray-600">
                    Specialized knowledge in new construction homes, builder contracts, and the unique aspects of buying new builds.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-3xl mr-4">📋</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Contract Negotiation</h3>
                  <p className="text-gray-600">
                    Expert negotiation skills to get you the best terms, upgrades, and pricing on your new home.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-3xl mr-4">🔍</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Market Analysis</h3>
                  <p className="text-gray-600">
                    Comprehensive market analysis to ensure you're making a smart investment decision.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-3xl mr-4">🏦</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Lender Connections</h3>
                  <p className="text-gray-600">
                    Access to preferred lenders who specialize in new construction financing.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-3xl mr-4">📅</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Timeline Management</h3>
                  <p className="text-gray-600">
                    Help you navigate the construction timeline and coordinate all aspects of your move.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-3xl mr-4">✅</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Assurance</h3>
                  <p className="text-gray-600">
                    Ensure your new home meets quality standards through thorough inspections and oversight.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            What Clients Say About Dr. Jan
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-800 rounded-lg p-6">
              <p className="text-lg mb-4 italic">
                "Dr. Jan made buying our new home so easy. Her expertise in new construction was invaluable, 
                and she saved us thousands through negotiation."
              </p>
              <p className="font-semibold">- Sarah & Mike Johnson</p>
            </div>
            <div className="bg-blue-800 rounded-lg p-6">
              <p className="text-lg mb-4 italic">
                "We couldn't have asked for a better agent. Dr. Jan's knowledge of the Henderson market 
                helped us make the perfect choice for our family."
              </p>
              <p className="font-semibold">- The Rodriguez Family</p>
            </div>
            <div className="bg-blue-800 rounded-lg p-6">
              <p className="text-lg mb-4 italic">
                "From start to finish, Dr. Jan was professional, knowledgeable, and always had our best 
                interests at heart. Highly recommended!"
              </p>
              <p className="font-semibold">- Jennifer & David Chen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Ready to Work With Dr. Jan Duffy?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600">
            Contact Dr. Jan today for expert guidance on your new home purchase at The Townes at Union Village.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600 mb-4">(702) 500-1955</p>
              <a 
                href="tel:7025001955"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Call Now
              </a>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-4">DrJanSells@UnionVillage.com</p>
              <a 
                href="mailto:DrJanSells@UnionVillage.com"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Email
              </a>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-4xl mb-4">🕒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Hours</h3>
              <p className="text-gray-600 mb-4">
                Monday-Sunday<br />
                10:00 AM - 6:00 PM
              </p>
              <a 
                href="tel:7025001955"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Schedule Call
              </a>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nevada License Information</h3>
            <p className="text-gray-600 mb-4">
              Dr. Jan Duffy is a licensed real estate agent in Nevada (License #S.0197614) 
              specializing in new construction homes and buyer representation.
            </p>
            <p className="text-sm text-gray-500">
              Independent real estate resource. Not affiliated with or endorsed by Century Communities. 
              Dr. Jan Duffy is an independent real estate agent providing expert guidance to home buyers.
            </p>
          </div>
        </div>
      </section>

      {/* Location & Contact Map */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Dr. Jan Duffy at Union Village
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Located at 1001 Gearus Place, Henderson, NV 89011. Schedule your consultation with Dr. Jan Duffy, 
              your preferred buyer agent for The Townes at Union Village.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Dr. Jan Duffy?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-2xl mr-3">🎓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Nevada Licensed Agent</h4>
                    <p className="text-gray-600 text-sm">Licensed real estate agent in Nevada (License #S.0197614) specializing in new construction homes.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-3">🤝</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Buyer Representation</h4>
                    <p className="text-gray-600 text-sm">Independent agent representing YOUR interests, not the builder's. Get unbiased expert guidance.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-3">🏗️</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">New Construction Expert</h4>
                    <p className="text-gray-600 text-sm">Deep knowledge of Century Communities, Union Village, and the Henderson real estate market.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-3">💼</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Professional Service</h4>
                    <p className="text-gray-600 text-sm">Available Monday-Sunday, 10 AM - 6 PM for consultations and property tours.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <SEOOptimizedMap 
              variant="business-profile"
              title="Dr. Jan Duffy - Real Estate Agent at Union Village Henderson, NV"
              description="Nevada licensed real estate agent specializing in new construction homes. Contact (702) 500-1955."
            />
          </div>
        </div>
      </section>

      {/* RealScout Search Widget */}
      {/* Why Work With Dr. Jan Duffy */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <div className="inline-flex items-center bg-amber-600/10 px-4 py-2 rounded-full text-sm font-semibold text-amber-800 border border-amber-200">
              EXCLUSIVE REPRESENTATION
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-wide">
            <span className="font-extralight">Why Work With</span>
            <br />
            <span className="text-2xl md:text-3xl font-light text-gray-600 tracking-wider">
              DR. JAN DUFFY?
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-16 font-light max-w-4xl mx-auto leading-relaxed">
            Experience the difference of having an exclusive buyer representative who advocates solely for your interests. 
            Dr. Jan Duffy provides expert guidance, insider access, and unwavering commitment to your success.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide">Century Communities Partnership</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Exclusive partnership providing insider access while maintaining unwavering commitment to YOUR interests, not the builder's.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide">Market Expertise</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Comprehensive market analysis and comparable property insights to ensure you understand true value beyond builder claims.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide">Negotiation Excellence</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Strategic negotiation expertise to maximize your leverage and protect your interests throughout the new construction process.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide">Nevada Specialist</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Nevada License S.0197614. Deep expertise in Union Village and comprehensive knowledge of the entire Las Vegas Valley market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Properties */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="mb-4">
              <div className="inline-flex items-center bg-blue-600/10 px-4 py-2 rounded-full text-sm font-semibold text-blue-800 border border-blue-200">
                NEIGHBORHOOD PROPERTIES
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-wide">
              <span className="font-extralight">Explore Henderson with Dr. Jan</span>
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Let Dr. Jan Duffy guide you to your perfect home anywhere in Henderson. 
              Discover other exceptional properties in the area with expert guidance from your exclusive buyer representative.
            </p>
          </div>
          <RealScoutOfficeListings 
            title="Henderson Properties with Dr. Jan Duffy"
            subtitle="Expert guidance from Dr. Jan Duffy • Properties $350K-$450K • Single Family & Other Homes"
          />
        </div>
      </section>

      {/* Limited Availability Alert */}
      <section className="py-16 bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 via-amber-800/90 to-amber-900/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            EXCLUSIVE OPPORTUNITY
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-wide">
            <span className="font-extralight">Work With Dr. Jan Duffy</span>
            <br />
            <span className="text-2xl md:text-3xl font-light text-amber-200 tracking-wider">
              YOUR EXCLUSIVE REPRESENTATIVE
            </span>
          </h2>
          <p className="text-xl mb-10 font-light max-w-3xl mx-auto leading-relaxed">
            Experience the difference of having an exclusive buyer representative who advocates solely for your interests. 
            Secure your private consultation with Dr. Jan Duffy today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-8">
            <a
              href="tel:7025001955"
              className="bg-white hover:bg-gray-100 text-amber-900 px-10 py-5 rounded-lg transition-all duration-300 text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 tracking-wide"
            >
              SCHEDULE CONSULTATION
            </a>
            <a
              href="/home-value"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-amber-900 text-white px-10 py-5 rounded-lg transition-all duration-300 text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 tracking-wide"
            >
              GET PROPERTY VALUATION
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
    </div>
  )
}
