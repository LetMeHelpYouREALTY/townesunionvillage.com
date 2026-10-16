import OfficeListingsBand from '../components/office-listings-band'
import BreadcrumbJsonLd from '../components/breadcrumb-jsonld'
import { breadcrumbTrail } from '../lib/breadcrumbs'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <BreadcrumbJsonLd items={breadcrumbTrail('Privacy policy', '/privacy-policy')} />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-blue-100">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Information We Collect</h2>
            <p className="text-gray-700 mb-6">
              Dr. Jan Duffy and The Townes at Union Village are committed to protecting your privacy. We collect information to provide better real estate services and improve your experience with our website and services.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
            <p className="text-gray-700 mb-6">
              We may collect personal information that you voluntarily provide to us, including but not limited to your name, email address, phone number, mailing address, and any other information you choose to provide when you contact us through our website, schedule a consultation, or interact with our services. This information helps us provide personalized real estate guidance and keep you informed about properties that match your interests.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Automatically Collected Information</h3>
            <p className="text-gray-700 mb-6">
              When you visit our website, we may automatically collect certain information about your device and usage patterns. This includes your IP address, browser type, operating system, pages visited, time spent on pages, and referring website addresses. We use this information to analyze website performance, improve user experience, and ensure our website functions properly across different devices and browsers.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Real Estate Specific Information</h3>
            <p className="text-gray-700 mb-6">
              As a real estate professional, Dr. Jan Duffy may collect additional information relevant to your home buying or selling needs. This may include your budget range, preferred locations, family size, timeline for purchasing or selling, current housing situation, and specific property requirements. This information is essential for providing tailored real estate services and matching you with appropriate properties or buyers.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">How We Use Your Information</h2>
            <p className="text-gray-700 mb-6">
              The information we collect is used to provide exceptional real estate services and maintain professional relationships with our clients and potential clients.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Real Estate Services</h3>
            <p className="text-gray-700 mb-6">
              We use your personal information to provide comprehensive real estate services, including property searches, market analysis, home valuations, negotiation assistance, and transaction coordination. Your information helps us understand your needs and preferences, allowing us to present relevant properties and provide informed guidance throughout the buying or selling process.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Communication and Marketing</h3>
            <p className="text-gray-700 mb-6">
              We may use your contact information to communicate with you about real estate opportunities, market updates, property listings, and other relevant information. This includes responding to your inquiries, sending you property recommendations, scheduling appointments, and providing updates on market conditions that may affect your real estate decisions.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Website Improvement</h3>
            <p className="text-gray-700 mb-6">
              Automatically collected information helps us improve our website's functionality, content, and user experience. We analyze usage patterns to identify areas for improvement, optimize page loading times, and ensure our website remains accessible and useful for visitors seeking real estate information and services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Information Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-6">
              We respect your privacy and do not sell, trade, or rent your personal information to third parties for marketing purposes. However, there are specific circumstances where we may share your information to provide real estate services.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Real Estate Transactions</h3>
            <p className="text-gray-700 mb-6">
              During real estate transactions, we may share relevant information with other parties involved in the process, including lenders, title companies, inspectors, contractors, and other real estate professionals. This sharing is necessary to complete transactions and provide comprehensive real estate services. We ensure all parties maintain appropriate confidentiality standards.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Legal Requirements</h3>
            <p className="text-gray-700 mb-6">
              We may disclose your information when required by law, court order, or legal process. This includes situations where disclosure is necessary to protect our rights, property, or safety, or that of our clients or the public. We will always strive to provide advance notice when possible, unless legally prohibited from doing so.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Providers</h3>
            <p className="text-gray-700 mb-6">
              We may share information with trusted service providers who assist us in operating our website, conducting business, or serving our clients. These providers are bound by confidentiality agreements and are only authorized to use your information as necessary to provide services to us. This may include website hosting, email services, customer relationship management systems, and marketing platforms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Data Security and Protection</h2>
            <p className="text-gray-700 mb-6">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Safeguards</h3>
            <p className="text-gray-700 mb-6">
              Our website uses industry-standard security protocols, including SSL encryption for data transmission, secure servers, and regular security updates. We employ firewalls, intrusion detection systems, and other technical measures to protect against unauthorized access and data breaches. All sensitive information is encrypted both in transit and at rest.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Administrative Safeguards</h3>
            <p className="text-gray-700 mb-6">
              Access to personal information is restricted to authorized personnel who need it to perform their job functions. All staff members are trained on privacy policies and data protection practices. We regularly review and update our security procedures to address emerging threats and maintain compliance with industry standards.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Physical Safeguards</h3>
            <p className="text-gray-700 mb-6">
              Physical records and devices containing personal information are stored in secure locations with restricted access. We maintain strict policies regarding the handling, disposal, and destruction of physical documents and electronic media containing sensitive information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Your Rights and Choices</h2>
            <p className="text-gray-700 mb-6">
              You have certain rights regarding your personal information and how it is used. We are committed to honoring these rights and providing you with control over your data.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Access and Updates</h3>
            <p className="text-gray-700 mb-6">
              You have the right to access, review, and update your personal information. If you would like to see what information we have about you, or if you need to correct or update any information, please contact us directly. We will respond to your request within a reasonable timeframe and may require verification of your identity before providing access to sensitive information.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Opt-Out Options</h3>
            <p className="text-gray-700 mb-6">
              You may opt out of receiving marketing communications from us at any time by using the unsubscribe link in our emails, contacting us directly, or updating your communication preferences. Please note that even if you opt out of marketing communications, we may still contact you regarding ongoing real estate transactions or to respond to your specific inquiries.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Portability</h3>
            <p className="text-gray-700 mb-6">
              In certain circumstances, you may request a copy of your personal information in a structured, machine-readable format. This allows you to transfer your information to another service provider if desired. We will work with you to provide this information in a reasonable timeframe and format.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Notification Methods</h3>
            <p className="text-gray-700 mb-6">
              When we make significant changes to this Privacy Policy, we will provide notice through our website, email notifications, or other appropriate means. We encourage you to review this policy periodically to stay informed about how we protect your information and use it to provide real estate services.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Continued Use</h3>
            <p className="text-gray-700 mb-6">
              Your continued use of our website and services after any changes to this Privacy Policy constitutes your acceptance of the updated policy. If you do not agree with the changes, please discontinue use of our website and contact us to discuss your concerns.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Contact Information</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Dr. Jan Duffy</strong><br />
                Nevada License S.0197614
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> <a href="tel:7025001955" className="text-blue-600 hover:underline">(702) 500-1955</a>
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> <a href="mailto:DrJanSells@UnionVillage.com" className="text-blue-600 hover:underline">DrJanSells@UnionVillage.com</a>
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
