import gallery1 from '../assets/images/gallery-1.png'
import gallery2 from '../assets/images/gallery-2.png'
import gallery3 from '../assets/images/gallery-3.png'
import gallery4 from '../assets/images/gallery-4.png'
import gallery5 from '../assets/images/gallery-5.png'
import gallery6 from '../assets/images/gallery-6.png'
import gallery7 from '../assets/images/gallery-7.png'
import gallery8 from '../assets/images/gallery-8.png'

const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8]

export default function Gallery() {
  return (
    <section className="overflow-hidden bg-black py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Behind the Scenes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {galleryImages.map((src, index) => (
            <div
              key={src}
              className="relative overflow-hidden rounded-none border border-white/10 bg-black/30 shadow-glow"
            >
              <img
                src={src}
                alt={`Gallery photo ${index + 1}`}
                className="h-96 w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
