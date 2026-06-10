import { members } from '../data/members'

export default function MembersGrid() {
  const sorted = [...members].sort((a, b) => (b.board === true ? 1 : 0) - (a.board === true ? 1 : 0))

  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-semibold tracking-tight text-white">Meet the Members</h1>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {sorted.map((member) => (
            <div key={member.name} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-white/5">

                {/* Photo */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />

                {/* Desktop: bottom gradient for legibility */}
                <div className="absolute inset-x-0 bottom-0 hidden h-2/5 bg-gradient-to-t from-black via-black/50 to-transparent md:block" />

                {/* Desktop: default label strip, fades out on hover */}
                <div className="absolute inset-x-0 bottom-0 hidden p-5 transition-opacity duration-200 md:block md:group-hover:opacity-0">
                  <p className="text-lg font-semibold leading-tight text-white">{member.name}</p>
                  {member.role
                    ? <p className="mt-1 text-xs text-white/75">{member.role}</p>
                    : <p className="mt-1 text-xs text-white/60">{member.voice}</p>
                  }
                </div>

                {/* Desktop: info panel slides up on hover */}
                <div className="absolute inset-x-0 bottom-0 hidden bg-black/90 p-5 transition-transform duration-300 ease-out md:block md:translate-y-full md:group-hover:translate-y-0">
                  <p className="text-lg font-semibold leading-tight text-white">{member.name}</p>
                  {member.role && (
                    <p className="mt-1 text-xs text-white/75">{member.role}</p>
                  )}
                  <div className="mt-3 space-y-1">
                    <p className="text-sm text-white/75">{member.voice}</p>
                    <p className="text-sm text-white/75">
                      {member.major}
                      {member.minor && <span className="text-white/55"> · {member.minor}</span>}
                    </p>
                    <p className="text-xs text-white/55">{member.year}</p>
                  </div>
                  {member.funFact && (
                    <p className="mt-4 text-xs italic leading-relaxed text-white/60">
                      "{member.funFact}"
                    </p>
                  )}
                </div>

              </div>

              {/* Mobile: static info below the photo */}
              <div className="pt-3 md:hidden">
                <p className="text-sm font-semibold text-white">{member.name}</p>
                {member.role && (
                  <p className="mt-0.5 text-xs text-white/75">{member.role}</p>
                )}
                <p className="mt-1 text-xs text-white/60">{member.voice}</p>
                <p className="text-xs text-white/60">
                  {member.major}
                  {member.minor && <span> · {member.minor}</span>}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
