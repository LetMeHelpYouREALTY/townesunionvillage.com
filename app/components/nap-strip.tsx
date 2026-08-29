import { nap } from 'app/config/community'

export default function NapStrip() {
  return (
    <section className="bg-slate-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm">
        <p className="font-light">
          {nap.agentName} · {nap.brokerage} · NV {nap.license}
        </p>
        <p className="font-light">
          {nap.street}, {nap.city}, {nap.state} {nap.zip}
        </p>
        <p className="font-light">
          <a href={`tel:${nap.phoneTel}`} className="hover:text-amber-400">
            {nap.phoneDisplay}
          </a>
          {' · '}
          <a href={`mailto:${nap.email}`} className="hover:text-amber-400">
            {nap.email}
          </a>
        </p>
      </div>
    </section>
  )
}
