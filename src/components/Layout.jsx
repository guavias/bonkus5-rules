import { Outlet, NavLink, Link, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar.jsx'
import { sections } from '../data/navigation.js'

export default function Layout() {
  const location = useLocation()
  const activeSection = sections.find(s => location.pathname.startsWith(`/${s.slug}`))

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <header className="bg-grass-700 text-white border-b-4 border-grass-900 shadow-block">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
          <Link to="/" className="flex items-center gap-3 group">
            <img src="/bonkus.png" alt="" className="w-9 h-9 shadow-block" />
            <span className="font-pixel text-lg leading-none group-hover:text-gold transition-colors">
              BONKUS 5
            </span>
          </Link>
          <span className="hidden sm:inline-block font-mc text-xl text-gold ml-1">
            Complete Guide
          </span>

          {/* Top-level tab nav */}
          <nav className="ml-auto hidden md:flex gap-1">
            {sections.map(s => (
              <NavLink
                key={s.slug}
                to={`/${s.slug}`}
                className={({ isActive }) =>
                  `px-3 py-1.5 text-sm font-semibold rounded-sm border-b-2 transition-colors ${
                    isActive || activeSection?.slug === s.slug
                      ? "bg-grass-600 border-gold text-white"
                      : "border-transparent text-grass-100 hover:bg-grass-600/70 hover:text-white"
                  }`
                }
              >
                {s.title}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      {/* Body */}
      <div className="flex-1 flex">
        {/* Sidebar (only when inside a section) */}
        {activeSection && <Sidebar section={activeSection} />}

        {/* Main content */}
        <main className="flex-1 min-w-0">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-obsidian text-stone-300 mt-8">
        <div className="max-w-7xl mx-auto px-4 py-5 text-sm flex flex-wrap justify-between gap-2">
          <div>Bonkus 5 - Complete Guide</div>
          <div className="text-stone-400">
            hallo :)
          </div>
        </div>
      </footer>
    </div>
  )
}
