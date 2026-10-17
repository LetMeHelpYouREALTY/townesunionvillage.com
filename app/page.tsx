import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { pageMeta } from './lib/page-meta'
import SEOOptimizedMap from './components/seo-optimized-map'
import RealScoutWidget from './components/realscout-widget'
import OfficeListingsBand from './components/office-listings-band'
import ContentImage from './components/content-image'
import FaqJsonLd from './components/faq-jsonld'
import {
  homeQuickAnswer,
  hours,
  nap,
  photos,
  planPriceNote,
  pricing,
  qualifiedBuyerLine,
} from './config/community'
import NapStrip from './components/nap-strip'
import { healthcareAudiences, healthcareSlugs } from './config/healthcare'
import { homePageFaqs } from './config/faqs'
import GuideLinks from './components/guide-links'
import AtleighListings from './components/atleigh-listings'

export const metadata: Metadata = pageMeta('/', {
  title: 'The Townes at Union Village | Townhomes for Sale in Henderson NV',
  description: `Century Communities townhomes at ${nap.street}, ${nap.city}, ${nap.state} ${nap.zip}. Plans from ${pricing.startingFromLabel} as of ${pricing.asOf}. Buyer agent ${nap.agentName}, ${nap.phoneDisplay}.`,
})

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <FaqJsonLd items={homePageFaqs} />
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/80" />

        {/* Main Content */}
        <div className="relative z-20 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Badge */}
          <div className="inline-flex max-w-[92vw] items-center justify-center bg-amber-700 text-white px-5 py-3 md:px-8 md:py-4 rounded-full text-xs md:text-sm font-bold mb-8 md:mb-12 shadow-2xl border border-amber-300/40 text-center leading-snug">
            New construction by Century Communities
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-6 tracking-wide">
            <span className="text-white font-extralight block" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              The Townes at Union Village
            </span>
          </h1>
          <p className="text-2xl md:text-4xl font-light text-amber-300 tracking-wider mb-8" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
            Homes by Dr. Jan Duffy
          </p>
          
          {/* Enhanced Pricing Display */}
          <div className="mb-12 bg-slate-950/75 rounded-2xl p-8 border border-white/15 max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-200 font-light mb-3 tracking-wide">
              Century Communities starting price as of {pricing.asOf}
            </p>
            <div className="text-6xl md:text-7xl font-light text-white mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              {pricing.startingFromLabel}
            </div>
            <p className="text-base md:text-lg text-gray-300 tracking-wide">Townhomes up to 1,479 sq ft</p>
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
            from Dr. Jan Duffy, your buyer agent.
          </p>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-8 mb-16">
            <a
              href="tel:7025001955"
              className="group bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-12 py-6 rounded-xl text-lg font-bold shadow-2xl border border-amber-500/50 tracking-wide min-w-[280px] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative flex items-center justify-center">
                <span className="mr-3">📞</span>
                SCHEDULE PRIVATE TOUR
              </span>
            </a>
            <Link
              href="/floor-plans"
              className="group bg-slate-950/55 hover:bg-slate-950/70 text-white border-2 border-white/30 hover:border-white/50 px-12 py-6 rounded-xl text-lg font-bold shadow-2xl tracking-wide min-w-[280px] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative flex items-center justify-center">
                <span className="mr-3">🏠</span>
                EXPLORE FLOOR PLANS
              </span>
            </Link>
            <Link
              href="/home-value"
              className="group bg-slate-950/55 hover:bg-slate-950/70 text-white border-2 border-white/30 hover:border-white/50 px-12 py-6 rounded-xl text-lg font-bold shadow-2xl tracking-wide min-w-[280px] relative overflow-hidden"
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
            <div className="group bg-slate-950/70 rounded-2xl p-8 border border-white/15 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="text-5xl font-light text-white mb-3 group-hover:text-amber-300 transition-colors duration-300" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>3</div>
                <div className="text-gray-300 text-lg font-light tracking-wide group-hover:text-white transition-colors duration-300 uppercase">Floor Plans</div>
                <div className="text-gray-400 text-sm mt-2">Residence 1405 • 1478 • 1479</div>
              </div>
            </div>
            <div className="group bg-slate-950/70 rounded-2xl p-8 border border-white/15 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="text-5xl font-light text-white mb-3 group-hover:text-blue-300 transition-colors duration-300" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>1,405-1,479</div>
                <div className="text-gray-300 text-lg font-light tracking-wide group-hover:text-white transition-colors duration-300 uppercase">Square Feet</div>
                <div className="text-gray-400 text-sm mt-2">Spacious living areas</div>
              </div>
            </div>
            <div className="group bg-slate-950/70 rounded-2xl p-8 border border-white/15 shadow-2xl relative overflow-hidden">
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

      <section id="quick-answer" className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-slate-900 mb-6">
            The Townes at Union Village at a glance
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">{homeQuickAnswer}</p>
        </div>
      </section>
      <NapStrip />

      <OfficeListingsBand />

      <AtleighListings anchor />

      <GuideLinks />

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
              your buyer agent.
            </p>
          </div>
          <RealScoutWidget 
            title="Search All Henderson Properties"
            subtitle="Expert guidance from Dr. Jan Duffy • Your buyer agent"
          />
        </div>
      </section>

      {/* Limited Availability */}
      <section className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 text-white text-center py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 via-amber-800/90 to-amber-900/90" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
            THREE FLOOR PLANS
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-wide">Residence 1405, 1478, and 1479</h2>
          <p className="text-xl mb-8 font-light max-w-3xl mx-auto leading-relaxed">
            Century Communities builds three townhome plans at The Townes at Union Village. Homesite availability and prices change. Call Dr. Jan Duffy at {nap.phoneDisplay} to confirm what is open before you tour.
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
              FLOOR PLANS
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-wide">
            <span className="font-extralight">Townes at Union Village</span>
            <br />
            <span className="text-2xl md:text-3xl font-light text-gray-600 tracking-wider">
              EXCEPTIONAL FLOOR PLANS
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-4 font-light max-w-4xl mx-auto leading-relaxed">
            Discover three meticulously crafted floor plans featuring premium finishes, Century Home Connect® smart technology, 
            and exceptional attention to detail. Each residence represents the pinnacle of modern luxury living.
          </p>
          <p className="text-base text-gray-600 mb-16 font-light max-w-4xl mx-auto leading-relaxed">
            {planPriceNote}
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
                      <div className="text-3xl font-light text-amber-600 mb-4">From {plan.fromLabel} as of {pricing.asOf}</div>
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

      {/* Clinicians */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-amber-600/10 px-4 py-2 rounded-full text-sm font-semibold text-amber-800 border border-amber-200">
              HENDERSON HOSPITAL CAMPUS
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mt-4 mb-4 tracking-wide">
              Homes for Doctors, Nurses, and Healthcare Providers
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              The Townes sit beside Henderson Hospital at 1050 W. Galleria Drive. Dr. Jan Duffy is the buyer agent
              for clinicians who work this campus. {qualifiedBuyerLine}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {healthcareSlugs.map((slug) => {
              const audience = healthcareAudiences[slug]
              return (
                <article key={slug} className="rounded-xl border border-gray-100 bg-gray-50 p-8 shadow-sm">
                  <h3 className="text-2xl font-light text-gray-900 mb-3">{audience.cardTitle}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{audience.cardBody}</p>
                  <Link href={audience.path} className="text-amber-700 font-semibold hover:text-amber-800">
                    {audience.cardTitle} near Henderson Hospital
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-wide">
              <span className="font-extralight">Common Questions</span>
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Quick answers about buying at The Townes at Union Village in Henderson.
            </p>
          </div>
          <div className="space-y-8">
            {homePageFaqs.map((item) => (
              <article key={item.question} className="border-b border-gray-200 pb-8">
                <h3 className="text-xl font-medium text-gray-900 mb-3">{item.question}</h3>
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </article>
            ))}
          </div>
          <p className="text-center mt-10">
            <Link
              href="/faq"
              className="text-amber-700 font-semibold hover:text-amber-800 underline"
            >
              See all FAQ answers
            </Link>
          </p>
        </div>
      </section>

      <section className="py-16 bg-stone-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-slate-900 mb-8 text-center">
            Visit the sales office at {nap.street}
          </h2>
          <SEOOptimizedMap variant="business-profile" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white text-center py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-800/95" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center bg-amber-600/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-amber-400/30">
            TOUR WITH DR. JAN
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-wide">
            <span className="font-extralight">Schedule a Tour</span>
            <br />
            <span className="text-2xl md:text-3xl font-light text-amber-200 tracking-wider">
              {nap.street}, {nap.city}
            </span>
          </h2>
          <p className="text-xl mb-10 font-light max-w-3xl mx-auto leading-relaxed">
            Dr. Jan Duffy registers you with Century Communities before your first model visit and represents you, not the builder. {hours.note}
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
