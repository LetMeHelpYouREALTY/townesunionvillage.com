import { siteUrl } from 'app/config/site'
import {
  homeQuickAnswer,
  hours,
  nap,
  planPriceNote,
  pricing,
  qualifiedBuyerLine,
} from 'app/config/community'
import { floorPlanFaqs, homePageFaqs, townesUnionVillageFaqs, type FaqItem } from 'app/config/faqs'
import { allGuides, guidesChecked, planPoints, type Guide } from 'app/config/guides'
import {
  getHealthcareAudience,
  healthcareAudiences,
  healthcareChecked,
  healthcareHubFaqs,
  healthcareSlugs,
  type HealthcareAudience,
} from 'app/config/healthcare'

export type MarkdownPage = {
  path: string
  h1: string
  note: string
}

/**
 * Pages with a matching `app/{path}.md/route.ts`.
 * Notes stay free of prices, hours, and counts so /llms.txt can quote them.
 */
export const markdownPages: readonly MarkdownPage[] = [
  {
    path: '/',
    h1: 'The Townes at Union Village',
    note: 'Sales office overview and buyer-agent facts',
  },
  {
    path: '/floor-plans',
    h1: 'Floor plans at The Townes at Union Village',
    note: 'Century Communities plan names, sizes, and bedrooms',
  },
  {
    path: '/faq',
    h1: 'Townes at Union Village questions',
    note: 'Buyer questions answered from the public FAQ',
  },
  {
    path: '/answers',
    h1: 'Union Village Henderson NV answers',
    note: 'Short answers about this Henderson townhome community',
  },
  {
    path: '/henderson-townhomes',
    h1: 'New townhomes in Henderson NV',
    note: 'Henderson townhomes for sale at this address',
  },
  {
    path: '/89011',
    h1: 'New communities in 89011',
    note: 'The 89011 community this site covers',
  },
  {
    path: '/union-village-townhomes',
    h1: 'Union Village townhomes',
    note: 'Townhomes inside the Union Village plan',
  },
  {
    path: '/healthcare',
    h1: 'Realtor for Doctors, Nurses, and Healthcare Providers',
    note: 'Buyer representation for clinicians beside Henderson Hospital',
  },
  {
    path: '/healthcare/doctors',
    h1: 'Townhomes for Doctors Beside Henderson Hospital',
    note: 'Physician buyer representation at this community',
  },
  {
    path: '/healthcare/nurses',
    h1: 'Townhomes for Nurses Beside Henderson Hospital',
    note: 'Nurse buyer representation at this community',
  },
  {
    path: '/healthcare/providers',
    h1: 'Townhomes for Healthcare Providers in Union Village',
    note: 'Healthcare-provider buyer representation at this community',
  },
]

const markdownPaths = new Set(markdownPages.map((page) => page.path))

export function markdownUrlFor(path: string): string | undefined {
  if (!markdownPaths.has(path)) return undefined
  return path === '/' ? '/index.md' : `${path}.md`
}

function canonicalUrl(path: string): string {
  return path === '/' ? `${siteUrl}/` : `${siteUrl}${path}`
}

function faqBlock(items: readonly FaqItem[]): string {
  return items.map((item) => `## ${item.question}\n\n${item.answer}`).join('\n\n')
}

function pageClose(path: string): string {
  return [
    '',
    '',
    `${nap.agentName}, REALTOR®, in real estate since 1983. ${nap.phoneDisplay}. ${nap.email}. Sales office: ${nap.street}, ${nap.city}, ${nap.state} ${nap.zip}.`,
    '',
    qualifiedBuyerLine,
    '',
    `Canonical page: ${canonicalUrl(path)}`,
    '',
  ].join('\n')
}

function guideMarkdown(guide: Guide): string {
  const sections = guide.sections
    .map((section) => {
      const points = section.points
        ? `\n\n${section.points.map((point) => `- ${point}`).join('\n')}`
        : ''
      return `## ${section.heading}\n\n${section.paragraphs.join('\n\n')}${points}`
    })
    .join('\n\n')

  return `# ${guide.h1}\n\n${guide.lede}\n\n${sections}\n\n${faqBlock(guide.faqs)}\n\nFacts checked ${guidesChecked}.`
}

function homeMarkdown(): string {
  const plans = planPoints.map((point) => `- ${point}`).join('\n')
  return `# The Townes at Union Village\n\n${homeQuickAnswer}\n\n## Plans\n\n${plans}\n\n${faqBlock(homePageFaqs)}`
}

function floorPlanMarkdown(): string {
  const plans = pricing.plans
    .map((plan, index) => `## ${plan.name}\n\n${planPoints[index]}`)
    .join('\n\n')
  return `# Floor plans at The Townes at Union Village\n\n${planPriceNote}\n\n${plans}\n\n${faqBlock(floorPlanFaqs)}`
}

function faqMarkdown(): string {
  return `# Townes at Union Village questions\n\n${faqBlock(townesUnionVillageFaqs)}`
}

function healthcareHubMarkdown(): string {
  const cards = healthcareSlugs
    .map((slug) => {
      const audience = healthcareAudiences[slug]
      return `## ${audience.cardTitle}\n\n${audience.cardBody}`
    })
    .join('\n\n')
  return `# Realtor for Doctors, Nurses, and Healthcare Providers\n\n${cards}\n\n${faqBlock(healthcareHubFaqs)}\n\nFacts checked ${healthcareChecked}.`
}

function audienceMarkdown(audience: HealthcareAudience): string {
  const services = audience.services
    .map((service) => `## ${service.title}\n\n${service.body}`)
    .join('\n\n')
  return `# ${audience.title}\n\n${audience.lede}\n\n${audience.intro}\n\n${services}\n\n${faqBlock(audience.faqs)}\n\nFacts checked ${healthcareChecked}.`
}

function renderBody(path: string): string | null {
  switch (path) {
    case '/':
      return homeMarkdown()
    case '/floor-plans':
      return floorPlanMarkdown()
    case '/faq':
      return faqMarkdown()
    case '/answers':
    case '/henderson-townhomes':
    case '/89011':
    case '/union-village-townhomes': {
      const guide = allGuides().find((item) => item.path === path)
      return guide ? guideMarkdown(guide) : null
    }
    case '/healthcare':
      return healthcareHubMarkdown()
    case '/healthcare/doctors':
      return audienceMarkdown(getHealthcareAudience('doctors'))
    case '/healthcare/nurses':
      return audienceMarkdown(getHealthcareAudience('nurses'))
    case '/healthcare/providers':
      return audienceMarkdown(getHealthcareAudience('providers'))
    default:
      return null
  }
}

export function renderMarkdown(path: string): string | null {
  const body = renderBody(path)
  if (!body) return null
  return `${body}${pageClose(path)}`
}

export function markdownResponse(path: string): Response {
  const body = renderMarkdown(path)
  if (!body) {
    return new Response('Not found', {
      status: 404,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    })
  }

  return new Response(body, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      Link: `<${canonicalUrl(path)}>; rel="canonical"`,
    },
  })
}

export function renderLlmsTxt(): string {
  const planLines = pricing.plans.map(
    (plan) =>
      `- [${plan.name}](${siteUrl}/floor-plans.md): ${plan.sqft.toLocaleString('en-US')} sq ft, ${plan.beds} bedrooms, ${plan.baths} baths, ${plan.garage} garage, from ${plan.fromLabel} as of ${pricing.asOf}`
  )
  const pageLines = markdownPages.map((page) => {
    const url = markdownUrlFor(page.path)
    return `- [${page.h1}](${siteUrl}${url}): ${page.note}`
  })

  return [
    '# The Townes at Union Village',
    '',
    `> Century Communities townhomes for sale at ${nap.street}, ${nap.city}, ${nap.state} ${nap.zip}. Buyer agent: ${nap.agentName}, ${nap.brokerage}, Nevada license ${nap.license}, ${nap.phoneDisplay}. Century Communities listed plans from ${pricing.startingFromLabel} as of ${pricing.asOf}. ${qualifiedBuyerLine}`,
    '',
    pricing.disclaimer,
    '',
    hours.note,
    '',
    hours.builderModel,
    '',
    'This site does not quote mortgage rates or drive times.',
    '',
    'Guide and healthcare pages checked October 16, 2026.',
    '',
    'This file covers The Townes at Union Village only.',
    '',
    '## Plans',
    '',
    ...planLines,
    '',
    '## Pages',
    '',
    ...pageLines,
    '',
  ].join('\n')
}
