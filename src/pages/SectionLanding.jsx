import { useParams, Link, Navigate } from 'react-router-dom'
import { findSection } from '../data/navigation.js'

export default function SectionLanding() {
  const { sectionSlug } = useParams()
  const section = findSection(sectionSlug)
  if (!section) return <Navigate to="/" replace />

  return (
    <div>
      <h1 className="font-mc text-4xl text-grass-700 leading-none">{section.title}</h1>
      <p className="mt-2 text-lg text-stone-700 italic">{section.tagline}</p>

      <div className="mt-6 grid gap-3">
        {section.pages.map((p, i) => (
          <Link
            key={p.slug}
            to={`/${section.slug}/${p.slug}`}
            className="block-card px-4 py-3 hover:bg-grass-50 transition-colors flex items-center gap-3"
          >
            <span className="font-pixel text-xs text-grass-700 w-8">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="font-mc text-xl text-stone-800">{p.title}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
