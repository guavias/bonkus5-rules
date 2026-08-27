import { useState, useEffect } from 'react'

function formatTime(date) {
  const diff = Date.now() - new Date(date).getTime()
  const mins  = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days  = Math.floor(diff / 86400000)
  if (mins < 1)   return 'just now'
  if (mins < 60)  return `${mins}m ago`
  if (hours < 24) return `${hours}h ago`
  if (days < 30)  return `${days}d ago`
  return new Date(date).toLocaleDateString()
}

export default function CommentSection({ sectionSlug, pageSlug }) {
  const [comments, setComments] = useState([])
  const [text, setText]         = useState('')
  const [loading, setLoading]   = useState(true)
  const [posting, setPosting]   = useState(false)
  const [fetchError, setFetchError] = useState(null)
  const [postError, setPostError]   = useState(null)
  const [posted, setPosted]         = useState(false)

  useEffect(() => {
    setLoading(true)
    setFetchError(null)
    fetch(`/api/comments/${sectionSlug}/${pageSlug}`)
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data)) setComments(data)
        else setFetchError('Failed to load comments.')
      })
      .catch(() => setFetchError('Could not reach the comments server.'))
      .finally(() => setLoading(false))
  }, [sectionSlug, pageSlug])

  async function handleSubmit(e) {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    setPosting(true)
    setPostError(null)
    setPosted(false)
    try {
      const res = await fetch(`/api/comments/${sectionSlug}/${pageSlug}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: trimmed }),
      })
      const data = await res.json()
      if (res.ok) {
        setComments(prev => [data, ...prev])
        setText('')
        setPosted(true)
        setTimeout(() => setPosted(false), 3000)
      } else {
        setPostError(data.error || 'Failed to post comment.')
      }
    } catch {
      setPostError('Could not reach the comments server.')
    } finally {
      setPosting(false)
    }
  }

  return (
    <section className="mt-12 pt-8 border-t-2 border-dirt-300">
      <h2 className="font-mc text-3xl text-grass-700 mb-1">Comments</h2>
      <p className="text-xs text-stone-500 mb-6">All comments are anonymous and publicly visible.</p>

      {/* Post form */}
      <div className="block-card p-4 mb-8">
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full rounded border border-stone-300 bg-stone-50 px-3 py-2 text-sm text-stone-800 focus:outline-none focus:border-grass-500 resize-none transition-colors"
            rows={3}
            maxLength={2000}
            placeholder="Leave a comment…"
            value={text}
            onChange={e => setText(e.target.value)}
            disabled={posting}
          />
          <div className="flex items-center justify-between mt-2">
            <span className={`text-xs ${text.length > 1800 ? 'text-redstone' : 'text-stone-400'}`}>
              {text.length}/2000
            </span>
            <div className="flex items-center gap-3">
              {posted && (
                <span className="text-xs text-grass-600 font-medium">Posted!</span>
              )}
              <button
                type="submit"
                disabled={posting || !text.trim()}
                className="px-4 py-1.5 bg-grass-600 text-white text-sm font-medium rounded hover:bg-grass-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                {posting ? 'Posting…' : 'Post'}
              </button>
            </div>
          </div>
          {postError && (
            <p className="text-redstone text-xs mt-2">{postError}</p>
          )}
        </form>
      </div>

      {/* Comments list */}
      {loading && (
        <p className="text-stone-500 text-sm italic">Loading comments…</p>
      )}
      {fetchError && (
        <p className="text-redstone text-sm">{fetchError}</p>
      )}
      {!loading && !fetchError && comments.length === 0 && (
        <p className="text-stone-500 text-sm italic">No comments yet. Be the first!</p>
      )}

      <div className="space-y-3">
        {comments.map(c => (
          <div key={c._id} className="block-card p-4">
            <p className="text-stone-800 text-sm whitespace-pre-wrap break-words">{c.text}</p>
            <p className="text-xs text-stone-400 mt-2">{formatTime(c.createdAt)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
