import aboutPhoto from '../assets/images/about-photo.png'

export default function AboutSection() {
  return (
    <section className="overflow-hidden bg-black py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              About Casual Harmony
            </h2>
            <p className="text-base leading-relaxed text-white/70">
              Casual Harmony is Rutgers University's premier tenor-bass A Cappella group. We have performed at a wide array of venues, from campus events to local festivals and even national stages. Founded in 2003, we showcase our vocal prowess through complex arrangements, powerful soloists, and intricate vocal percussion.
            </p>
            <p className="text-base leading-relaxed text-white/70">
              Follow our Instagram for the latest audition information, upcoming shows,
              and behind-the-scenes.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-none border border-white/10 shadow-glow">
            <img
              src={aboutPhoto}
              alt="Casual Harmony performing"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
