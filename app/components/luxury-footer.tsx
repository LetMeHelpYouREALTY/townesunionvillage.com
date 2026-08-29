import Link from 'next/link'
import { nap, searchConsolePlatforms } from 'app/config/community'

export default function LuxuryFooter() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Subtle Luxury Accents */}
      <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-amber-400/10 to-amber-600/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-blue-600/5 rounded-full blur-xl"></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-light text-white mb-4 tracking-wide">
                  Townes at Union Village
                </h3>
                <p className="text-gray-300 font-light leading-relaxed max-w-md">
                  Sophisticated new construction townhomes in Henderson, Nevada, featuring premium finishes, 
                  Century Home Connect® smart technology, and exceptional attention to detail.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-amber-400 mb-3 tracking-wide">Contact Information</h4>
                <div className="space-y-2 text-gray-300">
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                    1001 Gearus Place, Henderson, NV 89011
                  </p>
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                    <a href="tel:7025001955" className="hover:text-amber-400 transition-colors">
                      (702) 500-1955
                    </a>
                  </p>
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                    <a href="mailto:DrJanSells@UnionVillage.com" className="hover:text-amber-400 transition-colors">
                      DrJanSells@UnionVillage.com
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-amber-400 mb-3 tracking-wide">
                  Follow {nap.agentName}
                </h4>
                <p className="text-gray-400 text-sm font-light mb-3 max-w-md">
                  Union Village tours, new listings, and Henderson market clips on Instagram, TikTok, X, and YouTube.
                </p>
                <div className="flex flex-wrap gap-3">
                  {searchConsolePlatforms.map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.href}
                      rel="me noopener noreferrer"
                      target="_blank"
                      className="border border-white/20 hover:border-amber-400 hover:text-amber-400 text-gray-200 px-3 py-1.5 rounded-md text-sm font-medium tracking-wide"
                    >
                      {platform.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-amber-400 mb-6 tracking-wide">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-amber-400 transition-colors font-light">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/floor-plans" className="text-gray-300 hover:text-amber-400 transition-colors font-light">
                    Floor Plans
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="text-gray-300 hover:text-amber-400 transition-colors font-light">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="/buyers" className="text-gray-300 hover:text-amber-400 transition-colors font-light">
                    Buyers
                  </Link>
                </li>
                <li>
                  <Link href="/sellers" className="text-gray-300 hover:text-amber-400 transition-colors font-light">
                    Sellers
                  </Link>
                </li>
                <li>
                  <Link href="/new-construction" className="text-gray-300 hover:text-amber-400 transition-colors font-light">
                    New Construction
                  </Link>
                </li>
                <li>
                  <Link href="/quick-move-in" className="text-gray-300 hover:text-amber-400 transition-colors font-light">
                    Quick Move-In
                  </Link>
                </li>
                <li>
                  <Link href="/henderson" className="text-gray-300 hover:text-amber-400 transition-colors font-light">
                    Henderson
                  </Link>
                </li>
                <li>
                  <Link href="/union-village" className="text-gray-300 hover:text-amber-400 transition-colors font-light">
                    Union Village
                  </Link>
                </li>
                <li>
                  <Link href="/schedule-tour" className="text-gray-300 hover:text-amber-400 transition-colors font-light">
                    Schedule a Tour
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-300 hover:text-amber-400 transition-colors font-light">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/financing" className="text-gray-300 hover:text-amber-400 transition-colors font-light">
                    Financing
                  </Link>
                </li>
                <li>
                  <Link href="/about-dr-jan" className="text-gray-300 hover:text-amber-400 transition-colors font-light">
                    About Dr. Jan
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-amber-400 transition-colors font-light">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-300 hover:text-amber-400 transition-colors font-light">
                    Guides
                  </Link>
                </li>
              </ul>
            </div>

            {/* Floor Plans */}
            <div>
              <h4 className="text-lg font-semibold text-amber-400 mb-6 tracking-wide">Floor Plans</h4>
              <ul className="space-y-3">
                <li>
                  <span className="text-gray-300 font-light">Residence 1405</span>
                  <span className="text-amber-400 block text-sm">From $374,990</span>
                </li>
                <li>
                  <span className="text-gray-300 font-light">Residence 1478</span>
                  <span className="text-amber-400 block text-sm">From $379,990</span>
                </li>
                <li>
                  <span className="text-gray-300 font-light">Residence 1479</span>
                  <span className="text-amber-400 block text-sm">From $379,990</span>
                </li>
              </ul>
              
              <div className="mt-6">
                <h5 className="text-sm font-semibold text-amber-400 mb-3 tracking-wide">Developer</h5>
                <p className="text-gray-300 font-light text-sm">Century Communities</p>
              </div>
            </div>
          </div>

          {/* Dr. Jan Duffy Section */}
          <div className="border-t border-gray-700 mt-16 pt-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-2xl font-light text-white mb-4 tracking-wide">
                  Your Exclusive Buyer Representative
                </h4>
                <p className="text-gray-300 font-light leading-relaxed mb-6">
                  Dr. Jan Duffy provides expert guidance and unwavering advocacy for your interests. 
                  Experience the difference of having a dedicated buyer representative who works exclusively for you, 
                  not the builder.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:7025001955"
                    className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center tracking-wide text-sm"
                  >
                    SCHEDULE CONSULTATION
                  </a>
                  <a
                    href="/about-dr-jan"
                    className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 hover:border-white/50 px-6 py-3 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center tracking-wide text-sm"
                  >
                    MEET DR. JAN
                  </a>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🏆</span>
                  </div>
                  <h5 className="text-lg font-semibold text-white mb-2">Dr. Jan Duffy</h5>
                  <p className="text-amber-400 text-sm mb-3">Nevada License S.0197614</p>
                  <p className="text-gray-300 font-light text-sm">
                    Exclusive Buyer Representative<br />
                    Century Communities Partner
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm font-light mb-4 md:mb-0">
                The Townes at Union Village | Homes by Dr. Jan Duffy All rights reserved  © 2024 Nevada License S.0197614
              </div>
              <div className="flex space-x-6 text-sm">
                <Link href="/privacy-policy" className="text-gray-400 hover:text-amber-400 transition-colors font-light">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-amber-400 transition-colors font-light">
                  Terms of Service
                </Link>
                <Link href="/accessibility" className="text-gray-400 hover:text-amber-400 transition-colors font-light">
                  Accessibility
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
