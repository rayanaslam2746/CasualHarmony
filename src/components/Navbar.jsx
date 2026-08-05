import { useEffect, useMemo, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import cas_logo_full from '../assets/images/cas_logo_full.png'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Members', to: '/members' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const activeLinkClass = useMemo(
    () =>
      'relative text-white before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-full before:bg-brand-500 before:opacity-80',
    [],
  )

  const linkClass = 'text-sm font-semibold tracking-wide text-white/80 hover:text-white'

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 ${
          scrolled ? 'bg-black/90 backdrop-blur' : 'bg-transparent'
        }`}
      >
        <NavLink to="/" className="flex items-center gap-3 text-white">
          <div className="flex h-10 w-10 items-center justify-center rounded-none ">
            <img
              src={cas_logo_full}
              className="h-full w-full object-cover"
            />
          </div>
          <span className="hidden font-semibold tracking-wide sm:inline">Casual Harmony</span>
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeLinkClass : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="block h-6 w-6">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full text-white"
            >
              <path
                d={
                  open
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </button>
      </div>

      {open ? (
        <nav className="md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 border-t border-white/10 bg-black/90 px-4 py-4 backdrop-blur">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `block rounded-none px-3 py-2 text-sm font-semibold tracking-wide ${
                    isActive
                      ? 'bg-white/10 text-white'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  )
}
