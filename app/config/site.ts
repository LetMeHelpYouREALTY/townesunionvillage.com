import { pricing } from './community'

/**
 * Canonical site origin. The apex host redirects here, so sitemap,
 * robots, Open Graph, and JSON-LD must use this host (no trailing slash).
 */
export const siteUrl = 'https://www.townesunionvillage.com'

/** @deprecated Use siteUrl. Kept so existing imports keep working. */
export const baseUrl = siteUrl

export const siteName = 'Townes at Union Village | Homes by Dr. Jan Duffy'

/** Deploy date for sitemap lastmod on pages whose visible copy changed. Not a fact-check date. */
export const contentUpdated = '2026-10-17'

export const siteDescription = `New townhomes for sale in Henderson, NV. Century Communities listed plans from ${pricing.startingFromLabel} as of ${pricing.asOf}. Buyer agent Dr. Jan Duffy.`
