import { motion } from 'framer-motion'
import aboutPhoto from '../assets/images/about-photo.png'

export default function AboutSection() {
  return (
    <section className="overflow-hidden bg-black py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="grid gap-10 lg:grid-cols-2 lg:items-center"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              About Casual Harmony
            </h2>
            <p className="text-base leading-relaxed text-white/70">
              Casual Harmony is Rutgers’ premier all‑male a cappella group, yipyap idk someone write ts
            </p>
            <p className="text-base leading-relaxed text-white/70">
              Follow our Instagram for the latest audition information, upcoming shows,
              and behind-the-scenes moments.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-none border border-white/10 shadow-glow">
            <img
              src={aboutPhoto}
              alt="Casual Harmony performing"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
