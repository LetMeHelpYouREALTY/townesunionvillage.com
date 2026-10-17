import OfficeListingsBand from '../components/office-listings-band'
import BreadcrumbJsonLd from '../components/breadcrumb-jsonld'
import { nap } from '../config/community'
import { breadcrumbTrail } from '../lib/breadcrumbs'
import { pageMeta } from '../lib/page-meta'

export const metadata = pageMeta('/accessibility', {
  title: 'Accessibility Statement',
})

export default function Accessibility() {
  return (
    <div className="min-h-screen bg-gray-50">
      <BreadcrumbJsonLd items={breadcrumbTrail('Accessibility', '/accessibility')} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Accessibility Statement
          </h1>
          <p className="text-xl text-blue-100">
            We are committed to ensuring our website and services are accessible to everyone, including individuals with disabilities.
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

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Commitment to Accessibility</h2>
            <p className="text-gray-700 mb-6">
              Dr. Jan Duffy and The Townes at Union Village are dedicated to providing an inclusive and accessible experience for all users, including those with disabilities. We believe that everyone should have equal access to information about real estate opportunities and services, regardless of their abilities or the technologies they use to access our website.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Web Content Accessibility Guidelines</h3>
            <p className="text-gray-700 mb-6">
              Our website is designed and developed to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards, where possible. These guidelines help make web content more accessible to people with disabilities, including visual, auditory, physical, speech, cognitive, language, learning, and neurological disabilities. We continuously work to improve our website's accessibility and user experience for all visitors.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Ongoing Accessibility Efforts</h3>
            <p className="text-gray-700 mb-6">
              Accessibility is an ongoing process, and we regularly review and update our website to improve accessibility features. We conduct periodic accessibility audits, user testing with individuals who have disabilities, and implement feedback from our users to enhance the overall accessibility of our digital presence. Our goal is to maintain and improve accessibility standards as technology and best practices evolve.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Inclusive Real Estate Services</h3>
            <p className="text-gray-700 mb-6">
              In addition to digital accessibility, we are committed to providing inclusive real estate services that accommodate the diverse needs of all clients. This includes offering various communication methods, flexible meeting arrangements, and assistance with accessibility-related housing needs. We work with clients to ensure their real estate experience is comfortable, accessible, and meets their individual requirements.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Accessibility Features and Implementations</h2>
            <p className="text-gray-700 mb-6">
              Our website incorporates various accessibility features to ensure a better user experience for individuals with different abilities and assistive technologies.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Visual Accessibility</h3>
            <p className="text-gray-700 mb-6">
              We have implemented features to support users with visual impairments, including high contrast color schemes, scalable text that can be enlarged without losing functionality, and clear visual hierarchy with proper heading structure. Our images include alternative text descriptions, and we ensure that important information is not conveyed through color alone. The website is designed to work with screen readers and other assistive technologies commonly used by individuals with visual disabilities.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Keyboard Navigation</h3>
            <p className="text-gray-700 mb-6">
              Our website is fully navigable using only a keyboard, without requiring mouse interaction. Users can tab through interactive elements in a logical order, access all functionality through keyboard shortcuts, and use standard keyboard navigation patterns. Focus indicators are clearly visible to help users understand their current location on the page. This ensures that individuals who cannot use a mouse or have motor disabilities can fully access our website content and services.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Assistive Technology Compatibility</h3>
            <p className="text-gray-700 mb-6">
              Our website is designed to be compatible with various assistive technologies, including screen readers, voice recognition software, alternative input devices, and browser accessibility features. We use semantic HTML markup, proper form labels, and descriptive link text to ensure compatibility with assistive technologies. Regular testing with different assistive technologies helps us maintain and improve this compatibility over time.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Alternative Access Methods</h2>
            <p className="text-gray-700 mb-6">
              We provide multiple ways for individuals to access information and services, recognizing that different users have different needs and preferences.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Phone and Email Support</h3>
            <p className="text-gray-700 mb-6">
              For users who prefer not to use our website or encounter accessibility barriers, we provide direct phone and email support. You can contact Dr. Jan Duffy directly at (702) 500-1955 or DrJanSells@UnionVillage.com to request information, schedule consultations, or receive assistance with any accessibility needs. Our team is trained to provide information in various formats and accommodate different communication preferences.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Alternative Document Formats</h3>
            <p className="text-gray-700 mb-6">
              Upon request, we can provide information in alternative formats, including large print documents, plain text versions of web content, or other formats that better meet individual accessibility needs. We work with clients to determine the most appropriate format for their specific requirements and provide materials in a timely manner to ensure equal access to information about properties and services.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">In-Person Consultations</h3>
            <p className="text-gray-700 mb-6">
              We offer in-person consultations and meetings at accessible locations to ensure that all clients can participate fully in the real estate process. This includes meeting at properties, accessible office locations, or other locations that accommodate specific accessibility needs. We are committed to making reasonable accommodations to ensure that all clients can access our services effectively.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Known Limitations and Ongoing Improvements</h2>
            <p className="text-gray-700 mb-6">
              While we strive for full accessibility, we acknowledge that there may be areas where our website does not fully meet accessibility standards, and we are committed to addressing these issues.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Third-Party Content</h3>
            <p className="text-gray-700 mb-6">
              Some content on our website is provided by third parties, including property listings, maps, and other integrated services. We cannot guarantee the accessibility of all third-party content, but we work with our partners to encourage accessibility compliance and provide alternative access methods when third-party content is not fully accessible. We regularly review third-party integrations and seek alternatives when accessibility issues are identified.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Legacy Content</h3>
            <p className="text-gray-700 mb-6">
              Some older content or features may not fully comply with current accessibility standards. We are working to update and remediate legacy content to improve accessibility. As we update our website, we prioritize accessibility improvements and ensure that new content meets or exceeds current accessibility guidelines. We appreciate your patience as we work through these improvements.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Continuous Monitoring</h3>
            <p className="text-gray-700 mb-6">
              We regularly monitor our website for accessibility issues using automated tools, manual testing, and user feedback. When accessibility barriers are identified, we work to resolve them promptly and implement processes to prevent similar issues in the future. Our accessibility efforts are an ongoing priority, and we are committed to continuous improvement in this area.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Feedback and Contact Information</h2>
            <p className="text-gray-700 mb-6">
              We welcome feedback from users about accessibility issues and suggestions for improvements. Your input helps us provide a better experience for everyone.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Reporting Accessibility Issues</h3>
            <p className="text-gray-700 mb-6">
              If you encounter any accessibility barriers on our website or with our services, please contact us immediately. We take all accessibility concerns seriously and will work to resolve issues promptly. When reporting issues, please provide as much detail as possible, including the specific page or feature where the issue occurred, the type of assistive technology you are using (if any), and a description of the problem you experienced.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Accessibility Coordinator</h3>
            <p className="text-gray-700 mb-6">
              Dr. Jan Duffy serves as our accessibility coordinator and is responsible for ensuring that accessibility concerns are addressed appropriately. All accessibility-related communications will be handled promptly and professionally, with the goal of providing equal access to our services for all users. We are committed to working collaboratively with users to resolve accessibility issues and improve our services.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Response Timeline</h3>
            <p className="text-gray-700 mb-6">
              We will acknowledge receipt of accessibility feedback within 48 hours and provide a substantive response within 5 business days. For urgent accessibility issues that prevent access to critical information or services, we will provide immediate assistance and work to resolve the issue as quickly as possible. We will keep you informed of our progress and provide updates on resolution timelines.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Contact Information</h2>
            <p className="text-gray-700 mb-6">
              For accessibility-related questions, concerns, or requests for assistance, please contact us:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Dr. Jan Duffy</strong><br />
                Nevada License {nap.license}<br />
                Accessibility Coordinator
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> <a href="tel:7025001955" className="text-amber-800 hover:underline">(702) 500-1955</a>
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> <a href="mailto:DrJanSells@UnionVillage.com" className="text-amber-800 hover:underline">DrJanSells@UnionVillage.com</a>
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Address:</strong> 1001 Gearus Place, Henderson, NV 89011
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM PST<br />
                <strong>Emergency Accessibility Assistance:</strong> Available 24/7 for urgent matters
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Legal Compliance</h2>
            <p className="text-gray-700 mb-6">
              Our accessibility efforts are guided by applicable laws and regulations, including the Americans with Disabilities Act (ADA) and other relevant accessibility standards.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">ADA Compliance</h3>
            <p className="text-gray-700 mb-6">
              We strive to comply with the Americans with Disabilities Act (ADA) and its requirements for accessible digital content and services. While the ADA does not provide specific technical standards for websites, we follow widely accepted accessibility guidelines and best practices to ensure our digital presence is accessible to individuals with disabilities. Our commitment to accessibility extends beyond legal compliance to provide an inclusive experience for all users.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">State and Local Requirements</h3>
            <p className="text-gray-700 mb-6">
              We also consider Nevada state and local accessibility requirements and guidelines in our efforts to provide accessible services. Our accessibility practices are designed to meet or exceed applicable standards and provide a foundation for continuous improvement in accessibility compliance.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry Standards</h3>
            <p className="text-gray-700 mb-6">
              We follow industry best practices for accessibility, including the Web Content Accessibility Guidelines (WCAG), Section 508 standards, and other recognized accessibility frameworks. Our accessibility efforts are informed by current research, user feedback, and evolving standards in the field of digital accessibility.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
