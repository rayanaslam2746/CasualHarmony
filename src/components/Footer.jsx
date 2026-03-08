export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/90 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-center text-sm text-white/50 sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-semibold text-white">Casual Harmony</p>
          <p>Rutgers University • New Brunswick, NJ</p>
        </div>
        <div className="space-y-1">
          <p>Follow us</p>
          <div className="flex items-center justify-center gap-4 sm:justify-start">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-white/70 transition hover:text-white"
            >
              Instagram
            </a>
            <a
              href="mailto:booking@casualharmony.com"
              className="text-white/70 transition hover:text-white"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
