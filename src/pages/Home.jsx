import AboutSection from '../components/AboutSection'
import Gallery from '../components/Gallery'
import Hero from '../components/Hero'
import PerformanceSection from '../components/PerformanceSection'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <PerformanceSection />
      <AboutSection />
      <Gallery />

      <section className="bg-black py-24">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="grid gap-8 rounded-none border border-white/10 bg-white/5 p-12 text-center shadow-glow"
          >
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Ready to book us for your next event?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">
                Reach out and we’ll follow up with availability, pricing, and set suggestions.
              </p>
            </div>
            <div>
              <Link
                to="/book"
                className="inline-flex items-center justify-center rounded-none border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold tracking-wide text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
