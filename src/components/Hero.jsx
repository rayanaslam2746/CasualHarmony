import heroBackground from '../assets/images/hero-bg.png'

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/65" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[95vh] max-w-6xl flex-col items-start justify-center gap-8 px-4 py-28 text-left">
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
          Casual Harmony
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
          Rutgers’ premier all‑male a cappella ensemble.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-none border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold tracking-wide text-white hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            Contact Us
          </a>
          <a
            href="#performance"
            className="inline-flex items-center justify-center rounded-none border border-white/20 bg-black/40 px-6 py-3 text-sm font-semibold tracking-wide text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            Watch Video
          </a>
        </div>

        <div className="absolute bottom-8 left-4 hidden w-[calc(100%-2rem)] border-t border-white/10 md:block" />
      </div>
    </section>
  )
}
