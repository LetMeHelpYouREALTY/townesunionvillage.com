import ContentImage from './content-image'
import { nap } from 'app/config/community'

type PageHeroProps = {
  badge: string
  title: string
  subtitle: string
  lede: string
  image: { src: string; alt: string }
  primaryHref?: string
  primaryLabel?: string
  secondaryHref?: string
  secondaryLabel?: string
}

export default function PageHero({
  badge,
  title,
  subtitle,
  lede,
  image,
  primaryHref = `tel:${nap.phoneTel}`,
  primaryLabel = `Call ${nap.phoneDisplay}`,
  secondaryHref = '/schedule-tour',
  secondaryLabel = 'Schedule a tour',
}: PageHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center text-white overflow-hidden">
      <div className="absolute inset-0">
        <ContentImage
          src={image.src}
          alt={image.alt}
          priority
          className="w-full h-full object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/80" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="inline-flex items-center bg-amber-600/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-amber-400/30">
          {badge}
        </div>
        <h1 className="text-4xl md:text-6xl font-light tracking-wide mb-4">{title}</h1>
        <p className="text-xl md:text-2xl text-amber-200 font-light tracking-wider mb-6">{subtitle}</p>
        <p className="text-lg md:text-xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed mb-10">
          {lede}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={primaryHref}
            className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-10 py-4 rounded-lg font-semibold tracking-wide"
          >
            {primaryLabel}
          </a>
          <a
            href={secondaryHref}
            className="bg-white/10 border-2 border-white/30 hover:bg-white/20 text-white px-10 py-4 rounded-lg font-semibold tracking-wide"
          >
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
