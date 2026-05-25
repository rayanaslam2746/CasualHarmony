import { members } from '../data/members'

export default function MembersGrid() {
  const sorted = [...members].sort((a, b) => (b.board === true ? 1 : 0) - (a.board === true ? 1 : 0))

  return (
    <section className="overflow-hidden bg-black py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Meet the Members
            </h1>
            <p className="mt-2 max-w-2xl text-base text-white/70">
              Our group includes vocal directors, arrangers, and performers dedicated to gooning
              .
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {sorted.map((member, index) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-none border border-white/10 bg-white/5 p-8 shadow-glow transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-center">
                <div className="relative w-full overflow-hidden rounded-none border border-white/10 md:w-1/2">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-72 w-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-semibold text-white">
                      {member.name}
                    </h3>
                    {member.board && (
                      <span className="rounded-none bg-brand-600 px-3 py-1 text-xs font-semibold tracking-wide text-white">
                        Board
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-base text-white/70">
                    {member.voice} · {member.year}
                  </p>
                  <p className="mt-4 text-base text-white/60">{member.major}</p>
                  {member.role && (
                    <div className="mt-6 inline-flex items-center gap-2 rounded-none border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                      <span className="font-semibold"></span> {member.role}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
