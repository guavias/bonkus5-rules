import { Link } from 'react-router-dom'
import { sections } from '../data/navigation.js'

export default function Home() {
  return (
    <div>
      <div className="text-center mb-10">
        <h1 className="font-pixel text-3xl md:text-5xl text-grass-700 leading-tight">
          BONKUS 5
        </h1>
        <p className="mt-3 font-mc text-2xl text-dirt-700">
          Complete rules, systems, and guidelines for the fifth season.
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-stone-700">
          Welcome to the Bonkus 5 Complete Guide! New here? Start with{' '}
          <Link to="/start-here/welcome" className="text-grass-700 font-semibold underline">
            Welcome to Bonkus
          </Link>.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {sections.map(s => (
          <Link
            key={s.slug}
            to={`/${s.slug}`}
            className="block-card p-5 hover:-translate-y-0.5 transition-transform"
          >
            <div className="font-mc text-2xl text-grass-700">{s.title}</div>
            <p className="text-sm text-stone-700 italic mt-1">{s.tagline}</p>
            <ul className="mt-3 text-sm text-stone-700 space-y-0.5 list-disc list-inside">
              {s.pages.slice(0, 4).map(p => (
                <li key={p.slug}>{p.title}</li>
              ))}
              {s.pages.length > 4 && (
                <li className="text-stone-500 italic list-none">
                  + {s.pages.length - 4} more…
                </li>
              )}
            </ul>
          </Link>
        ))}
      </div>
    </div>
  )
}
