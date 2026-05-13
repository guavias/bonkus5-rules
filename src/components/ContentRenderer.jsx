import React from 'react'

/**
 * Renders inline text supporting:
 *   **bold**
 *   *italic*
 *   [TBD: anything] => styled placeholder pill
 *   #channel and @handles => subtle highlight
 */
function renderInline(text, keyPrefix = '') {
  if (!text) return null
  // Order matters: TBD first (so brackets aren't eaten by bold/italic)
  const pattern = /(\[TBD:[^\]]*\])|(\*\*[^*]+\*\*)|(\*[^*]+\*)|(@[a-zA-Z0-9_.]+)|(#[a-zA-Z0-9_-]+)/g
  const out = []
  let lastIndex = 0
  let m
  let i = 0
  while ((m = pattern.exec(text)) !== null) {
    if (m.index > lastIndex) {
      out.push(text.slice(lastIndex, m.index))
    }
    const token = m[0]
    if (token.startsWith('[TBD')) {
      out.push(<span key={`${keyPrefix}t${i}`} className="tbd">{token.slice(1, -1)}</span>)
    } else if (token.startsWith('**')) {
      out.push(<strong key={`${keyPrefix}b${i}`}>{token.slice(2, -2)}</strong>)
    } else if (token.startsWith('*')) {
      out.push(<em key={`${keyPrefix}i${i}`}>{token.slice(1, -1)}</em>)
    } else if (token.startsWith('@')) {
      out.push(<span key={`${keyPrefix}a${i}`} className="text-diamond-700 font-medium">{token}</span>)
    } else if (token.startsWith('#')) {
      out.push(<span key={`${keyPrefix}h${i}`} className="font-mono text-dirt-700">{token}</span>)
    }
    lastIndex = m.index + token.length
    i++
  }
  if (lastIndex < text.length) out.push(text.slice(lastIndex))
  return out
}

function Block({ block, k }) {
  switch (block.type) {
    case 'p':
      return <p>{renderInline(block.text, k)}</p>
    case 'h2':
      return <h2 className="section-bar">{renderInline(block.text, k)}</h2>
    case 'h3':
      return <h3 className="subsection-bar">{renderInline(block.text, k)}</h3>
    case 'h4':
      return <h4 className="minisection-bar">{renderInline(block.text, k)}</h4>
    case 'ul':
      return (
        <ul>
          {block.items.map((it, idx) => (
            <li key={`${k}-li${idx}`}>
              {typeof it === 'string'
                ? renderInline(it, `${k}-li${idx}`)
                : (
                  <>
                    {it.lead && <strong>{it.lead}</strong>}
                    {it.lead && it.text ? ' ' : null}
                    {it.text && renderInline(it.text, `${k}-li${idx}`)}
                  </>
                )}
            </li>
          ))}
        </ul>
      )
    case 'ol':
      return (
        <ol>
          {block.items.map((it, idx) => (
            <li key={`${k}-oi${idx}`}>{renderInline(it, `${k}-oi${idx}`)}</li>
          ))}
        </ol>
      )
    case 'callout':
      return (
        <div className={`callout callout-${block.variant || 'info'}`}>
          {block.title && <div className="font-semibold mb-1">{block.title}</div>}
          {block.text && <div>{renderInline(block.text, k)}</div>}
        </div>
      )
    case 'note':
      return (
        <p className="text-stone-600 italic">{renderInline(block.text, k)}</p>
      )
    case 'hr':
      return <hr className="my-6 border-stone-300" />
    default:
      return null
  }
}

export default function ContentRenderer({ page }) {
  if (!page) return null
  return (
    <article className="prose-bonkus">
      <header className="mb-6">
        <h1 className="font-mc text-4xl text-grass-700 leading-none">
          {page.title}
        </h1>
        {page.status && (
          <div className="mt-2 flex items-center gap-2">
            <span
              className={`status-pill status-${(page.status || '').toLowerCase().includes('finalized')
                ? 'finalized'
                : (page.status || '').toLowerCase().includes('living')
                ? 'living'
                : 'draft'}`}
            >
              Status: {page.status}
            </span>
          </div>
        )}
        {page.intro && (
          <p className="mt-4 text-lg text-stone-700 italic">{renderInline(page.intro, 'intro')}</p>
        )}
      </header>

      {page.blocks?.map((block, i) => (
        <Block block={block} key={`b${i}`} k={`b${i}`} />
      ))}
    </article>
  )
}
