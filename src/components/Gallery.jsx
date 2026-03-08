import { motion } from 'framer-motion'
import gallery1 from '../assets/images/gallery-1.png'
import gallery2 from '../assets/images/gallery-2.png'
import gallery3 from '../assets/images/gallery-3.png'
import gallery4 from '../assets/images/gallery-4.png'
import gallery5 from '../assets/images/gallery-5.png'

const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5]

export default function Gallery() {
  return (
    <section className="overflow-hidden bg-black py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Tour the Crew
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">
            Clip clip clip clip clip
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-none border border-white/10 bg-black/30 shadow-glow"
            >
              <img
                src={src}
                alt={`Gallery photo ${index + 1}`}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-black/20 opacity-0 transition duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
