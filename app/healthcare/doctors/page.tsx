import type { Metadata } from 'next'
import HealthcareAudiencePage from 'app/components/healthcare-audience'
import { getHealthcareAudience } from 'app/config/healthcare'

const audience = getHealthcareAudience('doctors')

export const metadata: Metadata = {
  title: audience.metaTitle,
  description: audience.metaDescription,
  alternates: { canonical: audience.path },
}

export default function DoctorsPage() {
  return <HealthcareAudiencePage slug="doctors" />
}
