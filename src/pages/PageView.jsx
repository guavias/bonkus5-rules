import { useParams, Link, Navigate } from 'react-router-dom'
import { findSection } from '../data/navigation.js'
import { getPage } from '../data/content/index.js'
import ContentRenderer from '../components/ContentRenderer.jsx'

export default function PageView() {
  const { sectionSlug, pageSlug } = useParams()
  const section = findSection(sectionSlug)
  if (!section) return <Navigate to="/" replace />

  const meta = section.pages.find(p => p.slug === pageSlug)
  if (!meta) return <Navigate to={`/${sectionSlug}`} replace />

  const page = getPage(sectionSlug, pageSlug) || {
    title: meta.title,
    status: "Draft",
    intro: "This page hasn’t been written yet.",
    blocks: [],
  }

  // Find adjacent pages for prev/next nav
  const pages = section.pages
  const idx = pages.findIndex(p => p.slug === pageSlug)
  const prev = idx > 0 ? pages[idx - 1] : null
  const next = idx < pages.length - 1 ? pages[idx + 1] : null

  return (
    <div>
      {/* Breadcrumb */}
      <div className="text-sm text-stone-600 mb-2">
        <Link to="/" className="hover:text-grass-700">Home</Link>
        <span className="mx-1.5 text-stone-400">/</span>
        <Link to={`/${section.slug}`} className="hover:text-grass-700">{section.title}</Link>
        <span className="mx-1.5 text-stone-400">/</span>
        <span className="text-stone-800 font-medium">{meta.title}</span>
      </div>

      <ContentRenderer page={page} />

      {/* Prev / next nav */}
      <div className="mt-12 pt-6 border-t-2 border-dirt-300 grid grid-cols-2 gap-3">
        <div>
          {prev && (
            <Link
              to={`/${section.slug}/${prev.slug}`}
              className="block-card block p-3 hover:bg-grass-50 transition-colors"
            >
              <div className="text-xs uppercase text-stone-500">Previous</div>
              <div className="font-mc text-lg text-grass-700">← {prev.title}</div>
            </Link>
          )}
        </div>
        <div className="text-right">
          {next && (
            <Link
              to={`/${section.slug}/${next.slug}`}
              className="block-card block p-3 hover:bg-grass-50 transition-colors"
            >
              <div className="text-xs uppercase text-stone-500">Next</div>
              <div className="font-mc text-lg text-grass-700">{next.title} →</div>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
