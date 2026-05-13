import { NavLink } from 'react-router-dom'

export default function Sidebar({ section }) {
  return (
    <aside className="hidden md:block w-64 shrink-0 bg-grass-800 text-grass-100 border-r-4 border-grass-900">
      <div className="sticky top-0">
        <div className="px-4 py-4 border-b-2 border-grass-900/70">
          <div className="font-mc text-xl text-gold">{section.title}</div>
          <p className="text-xs text-grass-200 italic mt-1">{section.tagline}</p>
        </div>
        <nav className="px-2 py-3 space-y-0.5">
          {section.pages.map(p => (
            <NavLink
              key={p.slug}
              to={`/${section.slug}/${p.slug}`}
              end
              className={({ isActive }) =>
                `side-link ${isActive ? 'active' : ''}`
              }
            >
              {p.title}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  )
}
