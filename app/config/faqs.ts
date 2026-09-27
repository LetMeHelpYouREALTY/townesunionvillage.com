import { amenities, nap, nearby, pricing } from './community'

function hoursNote() {
  return 'Tours are by appointment. Confirm builder model hours the same day.'
}

export type FaqItem = { question: string; answer: string }

export const townesUnionVillageFaqs: FaqItem[] = [
  {
    question: 'Where is The Townes at Union Village?',
    answer: `The sales office is at ${nap.street}, ${nap.city}, ${nap.state} ${nap.zip}, next to the Union Village / Henderson Hospital area on Galleria Drive.`,
  },
  {
    question: 'Who builds the townhomes?',
    answer:
      'Century Communities. Dr. Jan Duffy is an independent buyer representative with Berkshire Hathaway HomeServices Nevada Properties, license S.0197614.LLC.',
  },
  {
    question: 'What do the homes cost?',
    answer: `Century Communities listed plans from ${pricing.startingFromLabel} as of ${pricing.asOf}. Prices change with homesite, options, and incentives. Confirm with Dr. Jan Duffy at ${nap.phoneDisplay}.`,
  },
  {
    question: 'What floor plans are offered?',
    answer:
      'Residence 1405 (1,405 sq ft), Residence 1478 (1,478 sq ft), and Residence 1479 (1,479 sq ft). Century lists 3 bedrooms, 2.5 bathrooms, and a 2-car garage on those plans.',
  },
  {
    question: 'Do I need my own real estate agent?',
    answer:
      'You can buy through the builder’s sales team alone, but that team represents Century. Dr. Jan Duffy represents you. Register her before the first visit.',
  },
  {
    question: 'What amenities are on site?',
    answer: `Century lists a ${amenities.join(', ').toLowerCase()}, plus trailheads nearby.`,
  },
  {
    question: 'Which schools serve the community?',
    answer: `Century lists ${nearby.schoolNames.join(', ')}. Clark County School District assigns schools by address. Verify at ${nearby.zoningUrl}.`,
  },
  {
    question: 'How do I tour?',
    answer: `Call ${nap.phoneDisplay} or email ${nap.email}. Meet at ${nap.street}. ${hoursNote()}`,
  },
  {
    question: 'Can I sell my current home and buy here?',
    answer:
      'Yes. Dr. Jan Duffy can list your current house and represent you on the Century purchase so the calendars line up.',
  },
  {
    question: 'What is the phone number and email?',
    answer: `${nap.phoneDisplay} and ${nap.email}. Brokerage: ${nap.brokerage}.`,
  },
]

/** Subset for the homepage FAQ block (matches visible Q&A on that page). */
export const homePageFaqs = townesUnionVillageFaqs.slice(0, 5)
