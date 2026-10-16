'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import AgentPhoto from './agent-photo'

const navItems = {
  '/': {
    name: 'Home',
  },
  '/floor-plans': {
    name: 'Floor Plans',
  },
  '/healthcare': {
    name: 'Healthcare',
  },
  '/community': {
    name: 'Community',
  },
  '/buyers': {
    name: 'Buyers',
  },
  '/sellers': {
    name: 'Sellers',
  },
  '/contact': {
    name: 'Contact',
  },
}

function navClass(isActive: boolean) {
  return isActive
    ? 'text-blue-600 font-medium border-b-2 border-blue-600'
    : 'text-gray-700 hover:text-blue-600'
}

export function Navbar() {
  const pathname = usePathname() || '/'
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="flex items-center justify-between w-full py-3 px-4 gap-3 xl:py-4">
        <div className="flex items-center space-x-6 min-w-0">
          <Link href="/" className="flex items-center gap-3 text-lg sm:text-2xl font-bold text-blue-600">
            <AgentPhoto size={40} className="ring-2 ring-amber-400 shrink-0" />
            <span className="leading-tight">Townes at Union Village</span>
          </Link>
          <div className="hidden xl:flex space-x-5">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = path === '/' ? pathname === '/' : pathname.startsWith(path)
              return (
                <Link key={path} href={path} className={`transition-optimized ${navClass(isActive)}`}>
                  {name}
                </Link>
              )
            })}
          </div>
        </div>
        <a
          href="tel:7025001955"
          className="hidden xl:inline-flex bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-6 py-2 rounded-lg hover-scale transition-optimized font-medium tracking-wide transform-gpu"
        >
          Call (702) 500-1955
        </a>
      </div>
      <div className="xl:hidden flex items-center gap-3 px-4 pb-3">
        <button
          type="button"
          className="border border-gray-300 text-gray-800 px-3 py-2 rounded-lg text-sm font-medium"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>
        <a
          href="tel:7025001955"
          className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-3 py-2 rounded-lg text-center font-medium text-sm tracking-wide"
        >
          Call (702) 500-1955
        </a>
      </div>
      {open ? (
        <div id="site-menu" className="xl:hidden border-t border-gray-100 px-4 pb-4">
          <div className="flex flex-col">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = path === '/' ? pathname === '/' : pathname.startsWith(path)
              return (
                <Link
                  key={path}
                  href={path}
                  onClick={() => setOpen(false)}
                  className={`py-3 border-b border-gray-100 ${navClass(isActive)}`}
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </div>
      ) : null}
    </nav>
  )
}
