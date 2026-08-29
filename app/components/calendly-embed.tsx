import { calendly, nap } from 'app/config/community'

type CalendlyEmbedProps = {
  heading?: string
  height?: number
}

export default function CalendlyEmbed({
  heading = 'Book a 15-minute strategy call',
  height = 750,
}: CalendlyEmbedProps) {
  return (
    <div className="w-full" id="book">
      {heading ? (
        <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 text-center">{heading}</h2>
      ) : null}
      <p className="text-center text-gray-600 mb-6 font-light">
        Pick a time with {nap.agentName}. Or call{' '}
        <a href={`tel:${nap.phoneTel}`} className="text-blue-700 font-medium">
          {nap.phoneDisplay}
        </a>
        .
      </p>
      <div className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-md">
        <iframe
          src={calendly.embedUrl}
          title={`Schedule a call with ${nap.agentName}`}
          className="w-full"
          style={{ minWidth: 320, height }}
          loading="lazy"
        />
      </div>
    </div>
  )
}
