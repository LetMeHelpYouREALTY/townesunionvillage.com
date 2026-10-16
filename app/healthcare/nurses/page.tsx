import type { Metadata } from 'next'
import HealthcareAudiencePage from 'app/components/healthcare-audience'
import { getHealthcareAudience } from 'app/config/healthcare'

const audience = getHealthcareAudience('nurses')

export const metadata: Metadata = {
  title: audience.metaTitle,
  description: audience.metaDescription,
  alternates: { canonical: audience.path },
}

export default function NursesPage() {
  return <HealthcareAudiencePage slug="nurses" />
}
