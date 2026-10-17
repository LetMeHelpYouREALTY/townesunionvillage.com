import OfficeListingsBand from '../components/office-listings-band'
import BreadcrumbJsonLd from '../components/breadcrumb-jsonld'
import { nap } from '../config/community'
import { breadcrumbTrail } from '../lib/breadcrumbs'
import { pageMeta } from '../lib/page-meta'

export const metadata = pageMeta('/terms-of-service', {
  title: 'Terms of Service',
})

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <BreadcrumbJsonLd items={breadcrumbTrail('Terms of service', '/terms-of-service')} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-blue-100">
            Please read these terms carefully before using our website or engaging our real estate services.
          </p>
        </div>
      </section>

      <OfficeListingsBand />

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 mb-8">
              <strong>Last Updated:</strong> December 2024
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Acceptance of Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing and using the Townes at Union Village website and engaging the services of Dr. Jan Duffy, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. These terms govern your use of our website, services, and any information provided through our platform. If you do not agree with any part of these terms, you must not use our website or services.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Real Estate Services</h3>
            <p className="text-gray-700 mb-6">
              Dr. Jan Duffy is a licensed real estate professional in Nevada (License {nap.license}) providing comprehensive real estate services including buyer representation, property consultations, market analysis, and transaction coordination. When you engage our services, you enter into a professional client-agent relationship governed by Nevada real estate laws and regulations, in addition to these terms.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Website Usage</h3>
            <p className="text-gray-700 mb-6">
              Our website provides information about The Townes at Union Village, available properties, real estate services, and market information. You may use this website for personal, non-commercial purposes to gather information about properties and services. Any commercial use, reproduction, or distribution of website content requires written permission from Dr. Jan Duffy.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Standards</h3>
            <p className="text-gray-700 mb-6">
              All real estate services are provided in accordance with Nevada Real Estate Commission regulations, the National Association of Realtors Code of Ethics, and industry best practices. Dr. Jan Duffy maintains professional liability insurance and adheres to strict confidentiality standards when representing clients' interests.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Property Information and Accuracy</h2>
            <p className="text-gray-700 mb-6">
              While we strive to provide accurate and up-to-date information about properties, market conditions, and real estate matters, we cannot guarantee the absolute accuracy of all information presented on our website or in our communications.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Property Listings</h3>
            <p className="text-gray-700 mb-6">
              Property information, including but not limited to prices, availability, features, square footage, and amenities, is subject to change without notice. All property information should be verified through direct consultation with Dr. Jan Duffy and official documentation. We recommend conducting independent inspections, appraisals, and due diligence before making any real estate decisions.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Market Data</h3>
            <p className="text-gray-700 mb-6">
              Market information, trends, and analysis provided through our website and services are based on available data and professional judgment. Real estate markets are dynamic and unpredictable, and past performance does not guarantee future results. All market information should be considered general guidance and not relied upon as the sole basis for investment or purchasing decisions.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Third-Party Information</h3>
            <p className="text-gray-700 mb-6">
              Our website may include information from third-party sources, including MLS data, property management companies, and other real estate professionals. We do not control or guarantee the accuracy of third-party information and are not responsible for errors, omissions, or changes in such information. Users should verify all third-party information independently.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Client Responsibilities and Obligations</h2>
            <p className="text-gray-700 mb-6">
              As a client or potential client, you have certain responsibilities when engaging our real estate services and using our website.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Accurate Information</h3>
            <p className="text-gray-700 mb-6">
              You are responsible for providing accurate and complete information about your real estate needs, financial situation, preferences, and any other information relevant to our services. Providing false, misleading, or incomplete information may adversely affect the quality of services we can provide and may result in termination of our representation agreement.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Communication and Responsiveness</h3>
            <p className="text-gray-700 mb-6">
              Effective real estate services require timely communication and responsiveness from all parties. You agree to respond promptly to communications regarding properties, offers, inspections, and other transaction-related matters. Delays in communication may result in missed opportunities or complications in real estate transactions.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Compliance with Laws</h3>
            <p className="text-gray-700 mb-6">
              You agree to comply with all applicable local, state, and federal laws and regulations related to real estate transactions, including fair housing laws, disclosure requirements, and financing regulations. You are responsible for ensuring that any real estate decisions comply with your personal legal and financial obligations.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Limitation of Liability and Disclaimers</h2>
            <p className="text-gray-700 mb-6">
              While Dr. Jan Duffy strives to provide exceptional real estate services, there are inherent risks and limitations in real estate transactions that must be acknowledged.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Limitations</h3>
            <p className="text-gray-700 mb-6">
              Real estate services are advisory in nature and do not guarantee specific outcomes. We cannot guarantee that you will find a suitable property, sell your property at a desired price, or complete a transaction within a specific timeframe. Real estate markets are influenced by numerous factors beyond our control, including economic conditions, interest rates, and local market dynamics.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Financial Disclaimers</h3>
            <p className="text-gray-700 mb-6">
              We are not licensed financial advisors and do not provide investment advice. Any information about property values, market trends, or potential returns is for informational purposes only and should not be construed as financial advice. You should consult with qualified financial professionals before making investment decisions related to real estate.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Limitation of Damages</h3>
            <p className="text-gray-700 mb-6">
              To the maximum extent permitted by law, Dr. Jan Duffy and related entities shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services. Our total liability for any claims shall not exceed the amount of commissions or fees actually received from the specific transaction giving rise to the claim.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Intellectual Property Rights</h2>
            <p className="text-gray-700 mb-6">
              All content on our website, including text, images, graphics, logos, and other materials, is protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Website Content</h3>
            <p className="text-gray-700 mb-6">
              The content on our website, including property descriptions, photographs, floor plans, and marketing materials, is owned by Dr. Jan Duffy, Century Communities, or other authorized parties. You may not reproduce, distribute, modify, or create derivative works from our content without written permission. Unauthorized use may result in legal action.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Trademarks and Branding</h3>
            <p className="text-gray-700 mb-6">
              The names "Townes at Union Village," "Century Communities," and related trademarks are the property of their respective owners. Use of these trademarks without authorization is prohibited. Dr. Jan Duffy's name and professional credentials may not be used in a manner that implies endorsement or affiliation without explicit written consent.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">User-Generated Content</h3>
            <p className="text-gray-700 mb-6">
              If you submit content to our website, such as reviews, comments, or testimonials, you grant us a non-exclusive, royalty-free license to use, modify, and distribute such content for marketing and promotional purposes. You represent that you have the right to grant this license and that your content does not infringe on third-party rights.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Privacy and Confidentiality</h2>
            <p className="text-gray-700 mb-6">
              We are committed to protecting your privacy and maintaining confidentiality in accordance with professional standards and applicable laws.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Confidentiality Standards</h3>
            <p className="text-gray-700 mb-6">
              As a licensed real estate professional, Dr. Jan Duffy is bound by strict confidentiality obligations. Information shared in the context of a client-agent relationship will be kept confidential, except as required by law or as necessary to complete real estate transactions. We will not disclose your personal or financial information to third parties without your consent, except as required for legitimate business purposes.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Privacy Policy Compliance</h3>
            <p className="text-gray-700 mb-6">
              Our collection, use, and protection of your personal information is governed by our Privacy Policy, which is incorporated into these Terms of Service by reference. By agreeing to these terms, you also agree to our Privacy Policy and consent to the collection and use of your information as described therein.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Security</h3>
            <p className="text-gray-700 mb-6">
              We implement reasonable security measures to protect your information from unauthorized access, use, or disclosure. However, no security system is perfect, and we cannot guarantee absolute security. You are responsible for maintaining the security of your account information and passwords.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Termination and Modification</h2>
            <p className="text-gray-700 mb-6">
              These terms may be modified or terminated under certain circumstances as outlined below.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Termination of Services</h3>
            <p className="text-gray-700 mb-6">
              Either party may terminate the real estate representation relationship at any time with written notice. Termination does not affect obligations incurred prior to termination, including payment of commissions for completed transactions. Upon termination, you remain responsible for any outstanding fees or expenses incurred on your behalf.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Website Access</h3>
            <p className="text-gray-700 mb-6">
              We reserve the right to modify, suspend, or terminate access to our website at any time without notice. We may also restrict access to certain users or geographic regions. Termination of website access does not affect the validity of these terms or any ongoing real estate relationships.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Modification of Terms</h3>
            <p className="text-gray-700 mb-6">
              We may modify these Terms of Service from time to time to reflect changes in our services, legal requirements, or business practices. Material changes will be communicated through our website or direct communication. Continued use of our services after modifications constitutes acceptance of the updated terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Governing Law and Dispute Resolution</h2>
            <p className="text-gray-700 mb-6">
              These terms are governed by Nevada law and subject to the jurisdiction of Nevada courts.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Applicable Law</h3>
            <p className="text-gray-700 mb-6">
              These Terms of Service are governed by the laws of the State of Nevada, without regard to conflict of law principles. Any disputes arising from these terms or our services will be subject to the exclusive jurisdiction of the state and federal courts located in Clark County, Nevada.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Dispute Resolution</h3>
            <p className="text-gray-700 mb-6">
              We encourage resolution of disputes through direct communication and negotiation. If informal resolution is not possible, disputes may be subject to mediation or arbitration as required by Nevada real estate regulations. Any legal action must be commenced within the applicable statute of limitations period.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Standards</h3>
            <p className="text-gray-700 mb-6">
              Real estate services are regulated by the Nevada Real Estate Commission. Complaints about real estate services may be filed with the Commission, which has authority to investigate and take disciplinary action. We are committed to maintaining the highest professional standards and will cooperate fully with any regulatory investigations.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Contact Information</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about these Terms of Service, please contact us:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Dr. Jan Duffy</strong><br />
                Nevada License {nap.license}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> <a href="tel:7025001955" className="text-amber-800 hover:underline">(702) 500-1955</a>
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> <a href="mailto:DrJanSells@UnionVillage.com" className="text-amber-800 hover:underline">DrJanSells@UnionVillage.com</a>
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> 1001 Gearus Place, Henderson, NV 89011
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
