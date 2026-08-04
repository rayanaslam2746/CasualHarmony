import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Members from './pages/Members'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="relative">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/members" element={<Members />} />
            <Route path="/book" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </ErrorBoundary>
      </main>
      <Footer />
      <Analytics />
    </div>
  )
}
