import { amenities, nap, nearby, planPriceList, pricing } from './community'

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
      'Century Communities. Dr. Jan Duffy is an independent buyer representative, in real estate since 1983.',
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
    answer: `${nap.phoneDisplay} and ${nap.email}.`,
  },
  {
    question: 'Do you work with doctors, nurses, and healthcare providers?',
    answer: `Yes. Dr. Jan Duffy represents clinicians buying at ${nap.street}, beside ${nearby.hospitalName}. Any qualified buyer can purchase. Call ${nap.phoneDisplay}.`,
  },
  {
    question: 'How close are the townhomes to Henderson Hospital?',
    answer: `The sales office is at ${nap.street}. Henderson Hospital is at 1050 W. Galleria Drive, Henderson, NV 89011. Dr. Jan walks that route with you. A minute count is not published here.`,
  },
  {
    question: 'Can I tour around a hospital shift?',
    answer: `Yes. Tours are by appointment seven days a week. Call ${nap.phoneDisplay} and name the shift you are coming off.`,
  },
]

/** Subset for the homepage FAQ block (matches visible Q&A on that page). */
export const homePageFaqs = townesUnionVillageFaqs.slice(0, 5)

/** Visible Q&A on /floor-plans. JSON-LD must use this same array. */
export const floorPlanFaqs: FaqItem[] = [
  {
    question: 'How much do the floor plans cost at The Townes at Union Village?',
    answer: `As of ${pricing.asOf}, Century Communities listed ${planPriceList}. ${pricing.disclaimer}`,
  },
  {
    question: 'How big are the floor plans?',
    answer: pricing.plans
      .map((plan) => `${plan.name} has ${plan.sqft.toLocaleString('en-US')} square feet.`)
      .join(' '),
  },
  {
    question: 'How many bedrooms, bathrooms, and garage spaces do the plans have?',
    answer: pricing.plans
      .map(
        (plan) =>
          `${plan.name} lists ${plan.beds} bedrooms, ${plan.baths} baths, and a ${plan.garage} garage.`
      )
      .join(' '),
  },
]
