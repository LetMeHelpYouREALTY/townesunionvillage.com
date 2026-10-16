import { pricing } from './community'

/**
 * Canonical site origin. The apex host redirects here, so sitemap,
 * robots, Open Graph, and JSON-LD must use this host (no trailing slash).
 */
export const siteUrl = 'https://www.townesunionvillage.com'

/** @deprecated Use siteUrl. Kept so existing imports keep working. */
export const baseUrl = siteUrl

export const siteName = 'Townes at Union Village | Homes by Dr. Jan Duffy'

export const siteDescription = `New townhomes for sale in Henderson, NV starting from ${pricing.startingFromLabel}. Expert guidance from Dr. Jan Duffy, your preferred buyer agent. Century Communities.`
