import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import LuxuryFooter from './components/luxury-footer'
import { siteUrl } from './config/site'
import LocalBusinessSchema, { NewHomeDevelopmentSchema } from './components/local-business-schema'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  title: {
    default: 'Townes at Union Village | Homes by Dr. Jan Duffy',
    template: '%s | Townes at Union Village | Homes by Dr. Jan Duffy',
  },
  description: 'New townhomes for sale in Henderson, NV starting from $374,990. Expert guidance from Dr. Jan Duffy, your preferred buyer agent. Century Communities.',
  keywords: 'new homes Henderson NV, townhomes Henderson, Century Communities, Union Village, Dr. Jan Duffy, real estate agent',
  openGraph: {
    title: 'Townes at Union Village | Homes by Dr. Jan Duffy',
    description: 'New townhomes for sale in Henderson, NV starting from $374,990. Expert guidance from Dr. Jan Duffy, your preferred buyer agent.',
    url: siteUrl,
    siteName: 'Townes at Union Village | Homes by Dr. Jan Duffy',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sunset street of new townhomes at The Townes at Union Village in Henderson, NV',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Townes at Union Village - New Homes in Henderson, NV',
    description: 'New townhomes for sale in Henderson, NV starting from $374,990.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes: any[]) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        <LocalBusinessSchema />
        <NewHomeDevelopmentSchema />
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
        <LuxuryFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
