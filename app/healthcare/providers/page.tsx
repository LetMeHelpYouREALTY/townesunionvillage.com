import type { Metadata } from 'next'
import HealthcareAudiencePage from 'app/components/healthcare-audience'
import { getHealthcareAudience } from 'app/config/healthcare'
import { pageMeta } from 'app/lib/page-meta'

const audience = getHealthcareAudience('providers')

export const metadata: Metadata = pageMeta(audience.path, {
  title: audience.metaTitle,
  description: audience.metaDescription,
})

export default function ProvidersPage() {
  return <HealthcareAudiencePage slug="providers" />
}
