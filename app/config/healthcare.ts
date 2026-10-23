import { nap, nearby, photos, pricing } from './community'
import type { FaqItem } from './faqs'

/** Addresses and hours re-checked against public pages on this date. */
export const healthcareChecked = 'October 16, 2026'

export const healthcareSlugs = ['doctors', 'nurses', 'providers'] as const

export type HealthcareSlug = (typeof healthcareSlugs)[number]

export type HealthcareService = {
  title: string
  body: string
}

export type HealthcareAudience = {
  slug: HealthcareSlug
  path: string
  navName: string
  cardTitle: string
  cardBody: string
  badge: string
  title: string
  subtitle: string
  lede: string
  metaTitle: string
  metaDescription: string
  image: { src: string; alt: string }
  audienceType: string
  intro: string
  services: readonly HealthcareService[]
  faqs: FaqItem[]
}

const mapsQuery = encodeURIComponent(
  'The Townes at Union Village 1001 Gearus Place Henderson NV 89011'
)

export const googleMaps = {
  directions: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    `${nap.street}, ${nap.city}, ${nap.state} ${nap.zip}`
  )}`,
  reviews: `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`,
} as const

export const medicalCampuses = [
  {
    name: nearby.hospitalName,
    address: '1050 W. Galleria Drive, Henderson, NV 89011',
    detail:
      'Henderson Hospital publishes this address and (702) 963-7000 on its maps page. The Townes sales office is at 1001 Gearus Place, beside this campus.',
  },
  {
    name: 'Henderson Medical Plaza',
    address: '825 N. Gibson Road, Henderson, NV 89011',
    detail:
      'Class A medical office on the Henderson Hospital campus, inside the Union Village master plan. The project architect places the plaza within walking distance of the hospital.',
  },
] as const

export const shiftDining = {
  name: 'Seventy Six',
  address: '1120 Vitality Drive, Henderson, NV 89011',
  detail:
    'Station Casinos opened this 24-hour restaurant at Union Village in January 2026, near Henderson Hospital and Galleria Drive.',
} as const

const sharedClose =
  'Any qualified buyer can purchase these townhomes. Occupation is not a condition of sale.'

export const healthcareAudiences: Record<HealthcareSlug, HealthcareAudience> = {
  doctors: {
    slug: 'doctors',
    path: '/healthcare/doctors',
    navName: 'Doctors',
    cardTitle: 'Doctors',
    cardBody:
      'Physician buyer representation beside Henderson Hospital, with tours set around clinic and call.',
    badge: 'PHYSICIANS · HENDERSON HOSPITAL',
    title: 'Townhomes for Doctors Beside Henderson Hospital',
    subtitle: '1001 GEARUS PLACE, HENDERSON, NV 89011',
    lede: `Century lists plans from ${pricing.startingFromLabel} as of ${pricing.asOf}. Dr. Jan Duffy represents you, not the builder.`,
    metaTitle: 'Homes for Doctors Near Henderson Hospital',
    metaDescription: `Buy a townhome beside Henderson Hospital at 1001 Gearus Place. Dr. Jan Duffy represents physicians. Plans from ${pricing.startingFromLabel} as of ${pricing.asOf}.`,
    image: photos.hospital,
    audienceType: 'Physicians',
    intro:
      'You need a home that works with call, credentialing, and a start date. Dr. Jan Duffy handles the Century paperwork so the model visit does not eat a clinic day.',
    services: [
      {
        title: 'Register before the model',
        body: 'She registers you with Century before you walk the model. That keeps her as your agent.',
      },
      {
        title: 'Tours around call',
        body: 'Book the visit around clinic hours or a call night. Tours are by appointment, seven days a week.',
      },
      {
        title: 'A third room for work',
        body: 'Each plan has 3 bedrooms, 2.5 baths, and a 2-car garage. One room can stay a home office.',
      },
      {
        title: 'Sell, then close here',
        body: 'If you own a house now, she can list it and represent the Union Village purchase.',
      },
      {
        title: 'Contract second read',
        body: 'Builder deposits and option deadlines get a second read before you sign.',
      },
    ],
    faqs: [
      {
        question: 'Can a physician hire Dr. Jan Duffy at The Townes at Union Village?',
        answer: `Yes. She is an independent buyer agent, in real estate since 1983. Call ${nap.phoneDisplay} before the first model visit. ${sharedClose}`,
      },
      {
        question: 'Where is Henderson Hospital relative to the townhomes?',
        answer:
          'The sales office is at 1001 Gearus Place, Henderson, NV 89011. Henderson Hospital is at 1050 W. Galleria Drive, Henderson, NV 89011. Dr. Jan walks that route on the tour. A drive-time number is not published here.',
      },
      {
        question: 'What do the homes cost?',
        answer: `Century Communities listed plans from ${pricing.startingFromLabel} as of ${pricing.asOf}. ${pricing.disclaimer}`,
      },
    ],
  },
  nurses: {
    slug: 'nurses',
    path: '/healthcare/nurses',
    navName: 'Nurses',
    cardTitle: 'Nurses',
    cardBody:
      'Shift-friendly tours and a low-upkeep townhome beside the Henderson Hospital campus.',
    badge: 'NURSES · SHIFT TOURS',
    title: 'Townhomes for Nurses Beside Henderson Hospital',
    subtitle: 'TOURS AROUND 12-HOUR SHIFTS',
    lede: 'New townhomes at 1001 Gearus Place, next to the Henderson Hospital campus. Dr. Jan Duffy is your buyer agent.',
    metaTitle: 'Homes for Nurses Near Henderson Hospital',
    metaDescription:
      'Townhomes for nurses beside Henderson Hospital at 1001 Gearus Place, Henderson. Tours around shifts with Dr. Jan Duffy. Call (702) 500-1955.',
    image: photos.suite,
    audienceType: 'Nurses',
    intro:
      'A 12-hour shift does not leave room for a weekday model marathon. Tell Dr. Jan which shift you are coming off. She will set the tour.',
    services: [
      {
        title: 'Tour around the shift',
        body: 'Pick a time before a day shift or after a night shift. She meets you at 1001 Gearus Place.',
      },
      {
        title: 'See all three plans once',
        body: 'Residence 1405, 1478, and 1479 run 1,405 to 1,479 square feet. Compare them in one visit.',
      },
      {
        title: 'Two-car garage',
        body: 'Every listed plan includes a 2-car garage. That fits two commuters.',
      },
      {
        title: 'Skip a resale repair list',
        body: 'These are Century Communities new townhomes. You are not inheriting someone else’s punch list.',
      },
      {
        title: 'Travel contract check',
        body: 'A short travel contract may fit a rental better than a purchase. She will say so.',
      },
    ],
    faqs: [
      {
        question: 'Can I tour The Townes at Union Village after a night shift?',
        answer: `Yes. ${nap.agentName} tours by appointment seven days a week. Call ${nap.phoneDisplay} and name the shift. ${sharedClose}`,
      },
      {
        question: 'Is there 24-hour food near the hospital campus?',
        answer: `${shiftDining.name} is at ${shiftDining.address}. ${shiftDining.detail}`,
      },
      {
        question: 'What size are the townhomes?',
        answer:
          'Century lists 3 bedrooms, 2.5 bathrooms, and a 2-car garage on Residence 1405 (1,405 sq ft), Residence 1478 (1,478 sq ft), and Residence 1479 (1,479 sq ft).',
      },
    ],
  },
  providers: {
    slug: 'providers',
    path: '/healthcare/providers',
    navName: 'Providers',
    cardTitle: 'Healthcare providers',
    cardBody:
      'Buyer representation for PAs, nurse practitioners, therapists, pharmacists, and hospital techs.',
    badge: 'PAs · NPs · ALLIED HEALTH',
    title: 'Townhomes for Healthcare Providers in Union Village',
    subtitle: 'HENDERSON MEDICAL PLAZA AND THE HOSPITAL CAMPUS',
    lede: 'Same buyer agent. Same three floor plans. Dr. Jan Duffy represents you at 1001 Gearus Place.',
    metaTitle: 'Homes for Healthcare Providers in Union Village',
    metaDescription:
      'Buyer representation for PAs, NPs, and healthcare providers at The Townes at Union Village, 1001 Gearus Place, next to Henderson Hospital.',
    image: photos.living,
    audienceType: 'Healthcare providers',
    intro:
      'Physician assistants, nurse practitioners, therapists, pharmacists, and techs staff this campus too. The purchase process is the same. The schedule is not.',
    services: [
      {
        title: 'One agent for the household',
        body: 'Two clinicians can use one buyer agent. She coordinates both work calendars with the builder.',
      },
      {
        title: 'Plaza address, not a guess',
        body: 'Henderson Medical Plaza is at 825 N. Gibson Road, on the Henderson Hospital campus.',
      },
      {
        title: 'Time your real commute',
        body: 'She will time the drive from Gearus Place to the campus where you actually work.',
      },
      {
        title: 'Pre-approval first',
        body: 'Mortgage rates move. This site does not quote them. Get pre-approved before you pick a homesite.',
      },
      {
        title: 'Room for call',
        body: 'A third bedroom can be a call room. She will show which plan fits that use.',
      },
    ],
    faqs: [
      {
        question: 'Which clinicians does this page cover?',
        answer: `Physician assistants, nurse practitioners, therapists, pharmacists, and hospital technicians. ${sharedClose} Call ${nap.phoneDisplay}.`,
      },
      {
        question: 'Where is Henderson Medical Plaza?',
        answer:
          '825 N. Gibson Road, Henderson, NV 89011. It is a medical office building on the Henderson Hospital campus in the Union Village master plan.',
      },
      {
        question: 'Who is the buyer agent?',
        answer: `${nap.agentName}, REALTOR®, in real estate since 1983. Email ${nap.email}. Office address ${nap.street}, ${nap.city}, ${nap.state} ${nap.zip}.`,
      },
    ],
  },
}

export function getHealthcareAudience(slug: HealthcareSlug): HealthcareAudience {
  switch (slug) {
    case 'doctors':
      return healthcareAudiences.doctors
    case 'nurses':
      return healthcareAudiences.nurses
    case 'providers':
      return healthcareAudiences.providers
    default: {
      const exhaustive: never = slug
      return exhaustive
    }
  }
}

export const healthcareHubFaqs: FaqItem[] = [
  {
    question: 'Do you only represent doctors, nurses, and healthcare providers?',
    answer: `No. ${sharedClose} These pages explain the service for clinicians who work beside Union Village.`,
  },
  {
    question: 'How close is The Townes at Union Village to Henderson Hospital?',
    answer: `The sales office is at ${nap.street}, ${nap.city}, ${nap.state} ${nap.zip}. Henderson Hospital is at 1050 W. Galleria Drive, Henderson, NV 89011. Dr. Jan Duffy walks that route with you. A minute count is not published here.`,
  },
  {
    question: 'Can I tour around a hospital shift?',
    answer: `Yes. Tours are by appointment seven days a week. Call ${nap.phoneDisplay} and name the shift you are coming off.`,
  },
  {
    question: 'What is included in the buyer-agent service?',
    answer:
      'Registration with Century before the model visit, a floor-plan comparison, a second read of deposits and options, and a coordinated sale of your current home when you need one.',
  },
]

export const healthcareHubPath = '/healthcare'
