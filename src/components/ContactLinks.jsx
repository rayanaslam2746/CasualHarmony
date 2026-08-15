import contactPhoto from '../assets/images/Contact_pic.png'

const links = [
  {
    label: 'Spotify',
    handle: 'Casual Harmony',
    href: 'https://open.spotify.com/artist/3rYNHrlVKSXPoHy3pCZCb3',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7 10.3c3-.9 7-.7 9.6.9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M7.6 13.4c2.5-.7 5.6-.6 7.9.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M8.2 16.3c1.9-.5 4.3-.4 6 .7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Email',
    handle: 'casualharmony@gmail.com',
    href: 'mailto:casualharmony@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white">
        <rect x="3" y="5" width="18" height="14" rx="1" stroke="currentColor" strokeWidth="1.6" />
        <path d="m3 6 9 7 9-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    handle: '@casualharmonyru',
    href: 'https://www.instagram.com/casualharmonyru/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    handle: '@casualharmonyru',
    href: 'https://www.tiktok.com/@casualharmonyru',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white">
        <path
          d="M16 3.5a4.7 4.7 0 0 0 4 4.6V11a7.9 7.9 0 0 1-4-1.1v6.4a5.3 5.3 0 1 1-4.6-5.26v2.9a2.4 2.4 0 1 0 1.8 2.36V3.5H16Z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    handle: '@CasualHarmony',
    href: 'https://www.youtube.com/@CasualHarmony',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white">
        <rect x="3" y="5.5" width="18" height="13" rx="3.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M10.5 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    handle: 'Casual Harmony',
    href: 'https://www.facebook.com/profile.php?id=100063549032606',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M13.5 21v-6.5h2.2l.3-2.6h-2.5V10.2c0-.75.2-1.26 1.28-1.26h1.37V6.6c-.24-.03-1.05-.1-2-.1-1.98 0-3.33 1.2-3.33 3.42v1.98H8.5v2.6h2.32V21"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

export default function ContactLinks() {
  return (
    <section id="contact" className="overflow-hidden bg-black py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Connect With Us
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/70">
            Follow the music, book a set, or just say hi. Every link below reaches the group
            directly.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="relative min-h-[320px] overflow-hidden rounded-none border border-white/10 bg-white/5 shadow-glow lg:min-h-full">
            <img
              src={contactPhoto}
              alt="Casual Harmony"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="group flex items-center gap-4 rounded-none border border-white/10 bg-white/5 px-5 py-5 shadow-glow hover:bg-white/10"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-none border border-white/10 bg-black/50">
                  {link.icon}
                </span>
                <span className="flex-1">
                  <span className="block text-sm font-semibold text-white">{link.label}</span>
                  <span className="block text-sm text-white/55">{link.handle}</span>
                </span>
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0 text-white/40">
                  <path d="M7 17 17 7M7 7h10v10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
