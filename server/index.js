import express from 'express'
import mongoose from 'mongoose'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import 'dotenv/config'

const app = express()
const __dir = dirname(fileURLToPath(import.meta.url))

app.use(express.json({ limit: '16kb' }))

// ── Schema ────────────────────────────────────────────────────────────────────

const commentSchema = new mongoose.Schema({
  sectionSlug: { type: String, required: true },
  pageSlug:    { type: String, required: true },
  text:        { type: String, required: true, maxlength: 2000 },
  createdAt:   { type: Date, default: Date.now },
})
commentSchema.index({ sectionSlug: 1, pageSlug: 1, createdAt: -1 })
const Comment = mongoose.model('Comment', commentSchema)

// ── API routes ────────────────────────────────────────────────────────────────

app.get('/api/comments/:sectionSlug/:pageSlug', async (req, res) => {
  try {
    const comments = await Comment
      .find({ sectionSlug: req.params.sectionSlug, pageSlug: req.params.pageSlug })
      .sort({ createdAt: -1 })
      .limit(200)
      .select('text createdAt')
    res.json(comments)
  } catch {
    res.status(500).json({ error: 'Failed to load comments.' })
  }
})

app.post('/api/comments/:sectionSlug/:pageSlug', async (req, res) => {
  const text = (req.body.text || '').trim()
  if (!text) return res.status(400).json({ error: 'Comment cannot be empty.' })
  if (text.length > 2000) return res.status(400).json({ error: 'Comment too long (max 2000 characters).' })

  try {
    const comment = await Comment.create({
      sectionSlug: req.params.sectionSlug,
      pageSlug:    req.params.pageSlug,
      text,
    })
    res.status(201).json({ _id: comment._id, text: comment.text, createdAt: comment.createdAt })
  } catch {
    res.status(500).json({ error: 'Failed to save comment.' })
  }
})

// ── Serve built React app in production ───────────────────────────────────────

if (process.env.NODE_ENV === 'production') {
  const dist = join(__dir, '../dist')
  app.use(express.static(dist))
  app.get('*', (_req, res) => res.sendFile(join(dist, 'index.html')))
}

// ── Start ─────────────────────────────────────────────────────────────────────

const MONGODB_URI = process.env.MONGODB_URI
if (!MONGODB_URI) {
  console.error('ERROR: MONGODB_URI is not set. Add it to your .env file.')
  process.exit(1)
}

mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(e => { console.error('MongoDB connection error:', e.message); process.exit(1) })

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`))
