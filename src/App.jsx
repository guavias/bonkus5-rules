import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import SectionLanding from './pages/SectionLanding.jsx'
import PageView from './pages/PageView.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path=":sectionSlug" element={<SectionLanding />} />
        <Route path=":sectionSlug/:pageSlug" element={<PageView />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
