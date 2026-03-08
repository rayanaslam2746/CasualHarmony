import { motion } from 'framer-motion'

export default function PerformanceSection() {
  return (
    <section id="performance" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="flex flex-col items-center gap-8 text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Featured Performance
          </h2>
          <p className="max-w-2xl text-base text-white/70">
            hahahahahah
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="mt-12 flex justify-center"
        >
          <div className="relative w-full max-w-4xl overflow-hidden rounded-none border border-white/10 shadow-glow">
            <div className="relative w-full pt-[56.25%]">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&showinfo=0"
                title="Casual Harmony Performance"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
