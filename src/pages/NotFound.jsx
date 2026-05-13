import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <div className="font-pixel text-3xl text-grass-700 mb-4">404</div>
      <p className="font-mc text-2xl text-dirt-700">This block isn’t in the world.</p>
      <Link to="/" className="inline-block mt-6 px-4 py-2 bg-grass-600 text-white font-semibold rounded-sm shadow-block">
        Back to spawn
      </Link>
    </div>
  )
}
