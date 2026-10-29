import './global.css'
import type { Metadata } from 'next'
import Script from 'next/script'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import LuxuryFooter from './components/luxury-footer'
import { siteDescription, siteName, siteUrl } from './config/site'
import LocalBusinessSchema, {
  NewHomeDevelopmentSchema,
  WebSiteSchema,
} from './components/local-business-schema'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  title: {
    default: 'Townes at Union Village | Homes by Dr. Jan Duffy',
    template: '%s | Townes at Union Village | Homes by Dr. Jan Duffy',
  },
  description: siteDescription,
  keywords: 'new homes Henderson NV, townhomes Henderson, Century Communities, Union Village, Dr. Jan Duffy, real estate agent',
  openGraph: {
    title: 'Townes at Union Village | Homes by Dr. Jan Duffy',
    description: siteDescription,
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
    description: siteDescription,
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
        <link rel="describedby" href="/llms.txt" />
        <LocalBusinessSchema />
        <NewHomeDevelopmentSchema />
        <WebSiteSchema />
      </head>
      <body className="antialiased">
        {/* lazyOnload skips the preload. afterInteractive preloaded this module twice and competed with the hero image. */}
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          strategy="lazyOnload"
        />
        <Navbar />
        <main>{children}</main>
        <LuxuryFooter />
        <Analytics />
        <SpeedInsights />
      
        {/* Follow Up Boss pixel (Widget Tracker) */}
        <Script id="fub-widget-tracker" strategy="afterInteractive">{`
if(location.hostname.slice(-11)!==".vercel.app"&&location.hostname!=="localhost"){(function(w,i,d,g,e,t){w["WidgetTrackerObject"]=g;(w[g]=w[g]||function()
{(w[g].q=w[g].q||[]).push(arguments);}),(w[g].ds=1*new Date());(e="script"),
(t=d.createElement(e)),(e=d.getElementsByTagName(e)[0]);t.async=1;t.src=i;
e.parentNode.insertBefore(t,e);})
(window,"https://widgetbe.com/agent",document,"widgetTracker");
window.widgetTracker("create", "WT-XQHVYQWW");
window.widgetTracker("send", "pageview");}
        `}</Script>
</body>
    </html>
  )
}
