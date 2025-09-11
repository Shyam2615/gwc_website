import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl text-white min-h-[85vh] lg:min-h-[90vh]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/main_pic.png"
          alt="Grace Worship Center"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      {/* Vignette/gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" aria-hidden />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="w-full px-6 sm:px-10 lg:px-16">
          <div className="max-w-2xl">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              Sundays 10:00 AM • All are welcome
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Grace Worship Center
            </h1>
            <p className="mt-4 text-base/7 text-white/90 sm:text-lg/8">
              Encounter God, grow in community, and live out the gospel together.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="https://maps.app.goo.gl/5MaBUiCQbY8GkJaeA" className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-gray-900 shadow hover:bg-white/90">
                Plan Your Visit
              </a>
              <a href="https://www.youtube.com/@gracemediadandeli2192" className="inline-flex items-center justify-center rounded-md bg-white/10 px-6 py-3 text-sm font-medium text-white ring-1 ring-inset ring-white/30 hover:bg-white/15">
                Watch Live
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Info strip at bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10">
        <div className="mx-6 mb-6 sm:mx-10 lg:mx-16">
          <div className="pointer-events-auto grid w-full grid-cols-1 gap-4 rounded-xl bg-white/10 p-4 text-sm backdrop-blur sm:grid-cols-3">
            <div>
              <p className="text-white/70">Location</p>
              <p className="font-medium">7J3C+H8M, Dandeli, Karnataka 581325</p>
            </div>
            <div>
              <p className="text-white/70">Service Time</p>
              <p className="font-medium">Sundays • 10:00 AM</p>
            </div>
            <div>
              <p className="text-white/70">New Here?</p>
              <p className="font-medium"><a href="https://maps.app.goo.gl/5MaBUiCQbY8GkJaeA">Plan a Visit →</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


