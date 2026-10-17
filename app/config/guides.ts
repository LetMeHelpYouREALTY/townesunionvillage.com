import type { FaqItem } from './faqs'
import { hours, nap, nearby, photos, pricing } from './community'
import { medicalCampuses, shiftDining } from './healthcare'

/**
 * Query-aligned guides. Headings follow Search Console phrases that name
 * this community. Other builders' communities are omitted on purpose.
 * Prices stay dated. No commute times.
 */
export const guidesChecked = 'October 16, 2026'

export const priceSentence = `Century Communities listed plans from ${pricing.startingFromLabel} as of ${pricing.asOf}.`

export const planPoints = pricing.plans.map(
  (plan) =>
    `${plan.name}: ${plan.sqft.toLocaleString('en-US')} sq ft, ${plan.beds} bedrooms, ${plan.baths} baths, ${plan.garage} garage, from ${plan.fromLabel} as of ${pricing.asOf}.`
)

const buyerLine = `Dr. Jan Duffy, ${nap.brokerage}, license ${nap.license}, represents the buyer. Call ${nap.phoneDisplay}. Any qualified buyer can purchase. Occupation is not a condition of sale.`

export const guideIds = [
  'henderson-townhomes',
  'zip-89011',
  'union-village-townhomes',
  'answers',
] as const

export type GuideId = (typeof guideIds)[number]

export type GuideSection = {
  heading: string
  paragraphs: readonly string[]
  points?: readonly string[]
}

export type Guide = {
  id: GuideId
  path: string
  linkLabel: string
  title: string
  description: string
  badge: string
  h1: string
  subtitle: string
  lede: string
  image: { src: string; alt: string }
  sections: readonly GuideSection[]
  faqs: readonly FaqItem[]
  ctaTitle: string
  ctaBody: string
}

const hendersonTownhomes: Guide = {
  id: 'henderson-townhomes',
  path: '/henderson-townhomes',
  linkLabel: 'New townhomes in Henderson NV',
  title: 'New Townhomes in Henderson NV',
  description: `New townhomes in Henderson, NV at The Townes at Union Village, ${nap.street}, ${nap.zip}. Century plans from ${pricing.startingFromLabel} as of ${pricing.asOf}. Call ${nap.phoneDisplay}.`,
  badge: 'HENDERSON TOWNHOMES',
  h1: 'New townhomes in Henderson NV',
  subtitle: 'THE TOWNES AT UNION VILLAGE',
  lede: `Henderson townhomes for sale with Dr. Jan Duffy start at ${nap.street}, ${nap.city}, ${nap.state} ${nap.zip}.`,
  image: photos.exterior,
  sections: [
    {
      heading: 'Henderson townhomes',
      paragraphs: [
        `New townhomes in Henderson NV, on this site, are The Townes at Union Village. The sales office is at ${nap.street}, ${nap.city}, ${nap.state} ${nap.zip}.`,
        `${priceSentence} ${pricing.disclaimer}`,
        buyerLine,
      ],
    },
    {
      heading: 'Townhomes Henderson NV',
      paragraphs: [
        'Townhomes Henderson NV buyers compare here are three Century plans. Each plan lists 3 bedrooms, 2.5 bathrooms, and a 2-car garage.',
      ],
      points: planPoints,
    },
    {
      heading: 'Town homes Henderson NV',
      paragraphs: [
        'Town homes Henderson NV shoppers sometimes mean a rental. These townhomes are for sale. This site does not offer them as apartments or leases.',
        `Tour by appointment. ${hours.note} ${hours.builderModel}`,
      ],
    },
    {
      heading: 'New builds Henderson NV',
      paragraphs: [
        'New builds Henderson NV at this address are Century Communities homes. Register Dr. Jan before you walk the model. The on-site team works for the builder.',
        `Highway access Century cites is ${nearby.highways}. ${nearby.hospitalName} is at ${nearby.hospitalAddress}. A drive-time is not published here.`,
      ],
    },
  ],
  faqs: [
    {
      question: 'Where are new townhomes in Henderson, NV?',
      answer: `The Townes at Union Village are at ${nap.street}, ${nap.city}, ${nap.state} ${nap.zip}. Dr. Jan Duffy is the buyer agent. Call ${nap.phoneDisplay}.`,
    },
    {
      question: 'What do Henderson townhomes at Union Village cost?',
      answer: `${priceSentence} ${pricing.disclaimer}`,
    },
    {
      question: 'Are these Henderson townhomes for rent?',
      answer:
        'No. The Townes at Union Village are for sale. This website does not list them as rentals or apartments.',
    },
  ],
  ctaTitle: 'Tour townhomes in Henderson',
  ctaBody: `Call ${nap.phoneDisplay}. Dr. Jan will register you with Century before the model visit.`,
}

const zip89011: Guide = {
  id: 'zip-89011',
  path: '/89011',
  linkLabel: 'New communities in 89011',
  title: 'New Communities in 89011',
  description: `New communities in 89011 include The Townes at Union Village at ${nap.street}, Henderson, NV. Century townhomes from ${pricing.startingFromLabel} as of ${pricing.asOf}.`,
  badge: '89011 NEW CONSTRUCTION',
  h1: 'New communities in 89011',
  subtitle: 'UNION VILLAGE HENDERSON NV',
  lede: `89011 new construction on this site is one townhome community: The Townes at Union Village, ${nap.street}.`,
  image: photos.dusk,
  sections: [
    {
      heading: 'New communities in 89011',
      paragraphs: [
        `New communities in 89011, for this website, means The Townes at Union Village. The address is ${nap.street}, ${nap.city}, ${nap.state} ${nap.zip}.`,
        'This page does not score or describe other 89011 projects. Confirm those at their own sales offices.',
        buyerLine,
      ],
    },
    {
      heading: '89011 new construction communities',
      paragraphs: [
        `89011 new construction communities here are built by Century Communities. ${priceSentence}`,
        `Plans run ${pricing.plans[0].sqft.toLocaleString('en-US')} to ${pricing.plans[pricing.plans.length - 1].sqft.toLocaleString('en-US')} square feet. Each lists 3 bedrooms, 2.5 baths, and a 2-car garage.`,
      ],
    },
    {
      heading: 'Union Village Henderson NV',
      paragraphs: [
        `Union Village Henderson NV places this sales office in ZIP 89011. ${nearby.hospitalName} publishes ${nearby.hospitalAddress}.`,
        `${medicalCampuses[1].name} is at ${medicalCampuses[1].address}. ${medicalCampuses[1].detail}`,
        `${shiftDining.name} is at ${shiftDining.address}. ${shiftDining.detail}`,
      ],
    },
  ],
  faqs: [
    {
      question: 'What new communities are in 89011?',
      answer: `This site covers The Townes at Union Village at ${nap.street}, Henderson, NV 89011. Other 89011 communities are not described here.`,
    },
    {
      question: 'What is the 89011 new construction address?',
      answer: `${nap.street}, ${nap.city}, ${nap.state} ${nap.zip}. Call Dr. Jan Duffy at ${nap.phoneDisplay} to tour.`,
    },
    {
      question: 'Which hospital is in this 89011 pocket?',
      answer: `${nearby.hospitalName} is at ${nearby.hospitalAddress}. Henderson Medical Plaza is at 825 N. Gibson Road, Henderson, NV 89011.`,
    },
  ],
  ctaTitle: 'See 89011 new construction',
  ctaBody: `Call ${nap.phoneDisplay} and ask for the Gearus Place townhomes.`,
}

const unionVillageTownhomes: Guide = {
  id: 'union-village-townhomes',
  path: '/union-village-townhomes',
  linkLabel: 'Union Village townhomes',
  title: 'Union Village Townhomes',
  description: `Union Village townhomes by Century Communities at ${nap.street}, Henderson, NV 89011. Three plans from ${pricing.startingFromLabel} as of ${pricing.asOf}. Buyer agent Dr. Jan Duffy.`,
  badge: 'UNION VILLAGE TOWNHOMES',
  h1: 'Union Village townhomes',
  subtitle: 'HENDERSON, NV 89011',
  lede: 'Union Village homes for sale with Dr. Jan Duffy are the townhomes at The Townes, not a separate detached-home line.',
  image: photos.living,
  sections: [
    {
      heading: 'Union Village townhomes',
      paragraphs: [
        `Union Village townhomes on this site are The Townes at Union Village. Sales meetings start at ${nap.street}, ${nap.city}, ${nap.state} ${nap.zip}.`,
        'Union Village is the larger Henderson plan. The Townes are the townhome pocket inside it.',
        buyerLine,
      ],
    },
    {
      heading: 'Union Village homes',
      paragraphs: [
        'Union Village homes listed here are townhomes. Century shows 3 bedrooms, 2.5 bathrooms, and a 2-car garage on each plan.',
        priceSentence,
      ],
      points: planPoints,
    },
    {
      heading: 'The Townes at Union Village',
      paragraphs: [
        `The Townes at Union Village include a dog park, a walking trail, and picnic areas. Century lists those amenities on site.`,
        `${nearby.mallName} is at ${nearby.mallAddress}. School names Century lists are ${nearby.schoolNames.join(', ')}. Confirm assignment in the CCSD zoning search. Boundaries change.`,
      ],
    },
  ],
  faqs: [
    {
      question: 'What are Union Village townhomes?',
      answer: `They are Century Communities townhomes at The Townes at Union Village, ${nap.street}, Henderson, NV 89011. Call ${nap.phoneDisplay}.`,
    },
    {
      question: 'Are Union Village homes townhomes?',
      answer:
        'Yes. The homes Dr. Jan Duffy shows at The Townes are townhomes with 3 bedrooms, 2.5 baths, and a 2-car garage.',
    },
    {
      question: 'Who sells Union Village townhomes?',
      answer: `Century Communities is the builder. Dr. Jan Duffy is an independent buyer agent with ${nap.brokerage}. The on-site sales team works for the builder.`,
    },
  ],
  ctaTitle: 'Tour Union Village townhomes',
  ctaBody: `Call ${nap.phoneDisplay}. Bring your pre-approval. This site does not quote mortgage rates.`,
}

const answers: Guide = {
  id: 'answers',
  path: '/answers',
  linkLabel: 'Union Village Henderson answers',
  title: 'Union Village Henderson NV Answers',
  description: `Direct answers for The Townes at Union Village, Union Village Henderson NV, and new townhomes in Henderson ZIP 89011. ${nap.street}. Call ${nap.phoneDisplay}.`,
  badge: 'DIRECT ANSWERS',
  h1: 'Union Village Henderson NV',
  subtitle: 'ANSWERS FOR BUYERS',
  lede: `Short answers about The Townes at Union Village, ${nap.street}, ${nap.city}, ${nap.state} ${nap.zip}. Facts checked ${guidesChecked}.`,
  image: photos.kitchen,
  sections: [
    {
      heading: 'Where is The Townes at Union Village?',
      paragraphs: [
        `The Townes at Union Village are Century Communities townhomes at ${nap.street}, ${nap.city}, ${nap.state} ${nap.zip}. ${priceSentence}`,
        buyerLine,
      ],
    },
    {
      heading: 'Where is Union Village?',
      paragraphs: [
        `Union Village, in these answers, is the Henderson plan that holds The Townes. The townhome sales office is at ${nap.street}, ${nap.city}, ${nap.state} ${nap.zip}.`,
      ],
    },
    {
      heading: 'Where is Union Village Henderson?',
      paragraphs: [
        `Union Village Henderson is that same sales office: ${nap.street}, Henderson, NV ${nap.zip}. ${nearby.hospitalName} is at ${nearby.hospitalAddress}.`,
      ],
    },
    {
      heading: 'Is this Union Village Henderson NV?',
      paragraphs: [
        `Yes. Union Village Henderson NV is ZIP ${nap.zip}. The Townes townhomes use ${nap.street}. ${priceSentence} ${hours.note}`,
      ],
    },
    {
      heading: 'What are Union Village townhomes?',
      paragraphs: [
        `Union Village townhomes are The Townes plans: Residence 1405, 1478, and 1479. Sizes run ${pricing.plans[0].sqft.toLocaleString('en-US')} to ${pricing.plans[pricing.plans.length - 1].sqft.toLocaleString('en-US')} square feet, with 3 bedrooms, 2.5 baths, and a 2-car garage.`,
      ],
    },
    {
      heading: 'What are Union Village homes?',
      paragraphs: [
        `Union Village homes for sale with Dr. Jan Duffy are those townhomes. They are not listed here as rentals. ${priceSentence} ${pricing.disclaimer}`,
      ],
    },
    {
      heading: 'Where are new townhomes in Henderson NV?',
      paragraphs: [
        `New townhomes in Henderson NV on this site are at ${nap.street}. Henderson townhomes, townhomes Henderson NV, and town homes Henderson NV all point to that address.`,
      ],
    },
    {
      heading: 'What new communities are in 89011?',
      paragraphs: [
        `New communities in 89011, on this site, means The Townes at Union Village. 89011 new construction communities beyond this address are not described here.`,
      ],
    },
  ],
  faqs: [
    {
      question: 'Where is The Townes at Union Village?',
      answer: `The Townes at Union Village are at ${nap.street}, ${nap.city}, ${nap.state} ${nap.zip}. Call Dr. Jan Duffy at ${nap.phoneDisplay}.`,
    },
    {
      question: 'Where is Union Village Henderson NV?',
      answer: `Union Village Henderson NV for these townhomes is ${nap.street}, ZIP ${nap.zip}.`,
    },
    {
      question: 'Are Union Village homes for rent?',
      answer: 'No. Union Village homes on this site are townhomes for sale.',
    },
    {
      question: 'What new townhomes are in Henderson, NV 89011?',
      answer: `The Townes at Union Village, ${nap.street}. ${priceSentence}`,
    },
  ],
  ctaTitle: 'Ask Dr. Jan about Union Village',
  ctaBody: `Call ${nap.phoneDisplay} or book a 15-minute call. She will confirm the homesite price before you write.`,
}

export function getGuide(id: GuideId): Guide {
  switch (id) {
    case 'henderson-townhomes':
      return hendersonTownhomes
    case 'zip-89011':
      return zip89011
    case 'union-village-townhomes':
      return unionVillageTownhomes
    case 'answers':
      return answers
    default: {
      const exhaustive: never = id
      return exhaustive
    }
  }
}

export function allGuides(): readonly Guide[] {
  return guideIds.map((id) => getGuide(id))
}
