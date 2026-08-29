import { nap } from 'app/config/community'

type CtaBandProps = {
  title: string
  body: string
}

export default function CtaBand({ title, body }: CtaBandProps) {
  return (
    <section className="py-16 bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-wide">{title}</h2>
        <p className="text-lg font-light mb-8 leading-relaxed">{body}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${nap.phoneTel}`}
            className="bg-white text-amber-900 px-8 py-4 rounded-lg font-semibold"
          >
            Call {nap.phoneDisplay}
          </a>
          <a
            href={`mailto:${nap.email}`}
            className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-amber-900"
          >
            Email {nap.agentName}
          </a>
        </div>
        <p className="mt-6 text-sm text-amber-100 font-light">
          {nap.street}, {nap.city}, {nap.state} {nap.zip}
        </p>
      </div>
    </section>
  )
}
