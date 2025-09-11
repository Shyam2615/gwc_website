import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import Image from "next/image";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <section className="space-y-4">
        <div className="text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">Moments at GWC</h2>
          <p className="mt-1 text-sm text-foreground/70">Highlights from our worship and community life</p>
        </div>
        <div className="mx-auto w-full max-w-17xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl">
            <div className="h-[260px] sm:h-[340px] md:h-[420px]">
              <Carousel
                images={[
                  { src: "/main_pic.png", alt: "Church" },
                  { src: "/senior_pastor_2.png", alt: "Window" },
                ]}
                autoPlayMs={4000}
                rounded="rounded-2xl"
                fill
              />
            </div>
          </div>
        </div>
      </section>



      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/5">
            <div className="relative aspect-[4/3]">
              <Image
                src="/senior_pastor.png"
                alt="Senior Pastor"
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div>
            <p className="text-sm font-medium tracking-wide text-foreground/70">Our Senior Pastor</p>
            <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">Pastor Name</h3>
            <p className="mt-3 text-sm leading-7 text-foreground/80">
              Welcome to Grace Worship Center. We are a Christ-centered community devoted to worship, the Word,
              and serving our city. Whether you are exploring faith or looking for a church family, we would be
              honored to walk with you.
            </p>
            <div className="mt-6">
              <a href="#" className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-500">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-8 md:min-h-[560px] md:grid-cols-2">
          <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/5">
            <div className="border-b border-white/10 p-6">
              <h3 className="text-xl font-semibold">Church Schedule</h3>
              <p className="mt-1 text-sm text-foreground/70">Join us throughout the week</p>
            </div>
            <ul className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2">
              <li className="rounded-lg bg-white/5 p-4 ring-1 ring-white/10">
                <p className="text-sm text-foreground/70">Junior Church Service</p>
                <p className="mt-1 font-medium">Sunday 8:45am - 10:00pm</p>
              </li>
              <li className="rounded-lg bg-white/5 p-4 ring-1 ring-white/10">
                <p className="text-sm text-foreground/70">Sunday Service</p>
                <p className="mt-1 font-medium">Sunday 10:00am - 1:00pm</p>
              </li>
              <li className="rounded-lg bg-white/5 p-4 ring-1 ring-white/10">
                <p className="text-sm text-foreground/70">Bible Study</p>
                <p className="mt-1 font-medium">Sunday and Monday 6:00pm - 7:30pm</p>
              </li>
              <li className="rounded-lg bg-white/5 p-4 ring-1 ring-white/10">
                <p className="text-sm text-foreground/70">Ladies Fellowship</p>
                <p className="mt-1 font-medium">Wednesday 10:00am - 12:00pm</p>
              </li>
              <li className="rounded-lg bg-white/5 p-4 ring-1 ring-white/10">
                <p className="text-sm text-foreground/70">Cell Meeting</p>
                <p className="mt-1 font-medium">Thursday 6:00pm - 7:30pm</p>
              </li>
              <li className="rounded-lg bg-white/5 p-4 ring-1 ring-white/10">
                <p className="text-sm text-foreground/70">Fasting Prayer</p>
                <p className="mt-1 font-medium">Friday 10:00am - 12:30pm</p>
              </li>
              <li className="rounded-lg bg-white/5 p-4 ring-1 ring-white/10 sm:col-span-2">
                <p className="text-sm text-foreground/70">Youth Sunday</p>
                <p className="mt-1 font-medium">Every 2nd Sunday 6:00pm - 7:30pm</p>
              </li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/5">
            <div className="relative h-[360px] md:h-full">
              <Image
                src="/schedule.png"
                alt="Church Schedule"
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 text-center">
          <h3 className="text-2xl font-semibold sm:text-3xl">Latest Sermons</h3>
          <p className="mt-1 text-sm text-foreground/70">From our YouTube channel</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/5">
            <div className="relative aspect-video">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/GbwVlSCiNgU?si=WLA_iZTDRmNB2y_6"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="p-4 text-sm">
              <a className="hover:opacity-80" href="https://www.youtube.com/@gracemediadandeli2192" target="_blank" rel="noreferrer">Watch on YouTube →</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/5">
            <div className="relative aspect-video">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/EBFnZsRNmD8?si=Tb65fXP3lpSLLgaS"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="p-4 text-sm">
              <a className="hover:opacity-80" href="https://www.youtube.com/@gracemediadandeli2192" target="_blank" rel="noreferrer">Watch on YouTube →</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/5">
            <div className="relative aspect-video">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/1EMJPtzf__Y?si=1pAH8ZltjO0XH8O8"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="p-4 text-sm">
              <a className="hover:opacity-80" href="https://www.youtube.com/@gracemediadandeli2192" target="_blank" rel="noreferrer">Watch on YouTube →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center">
          <h3 className="text-2xl font-semibold sm:text-3xl">Church Leadership</h3>
          <p className="mt-1 text-sm text-foreground/70">Servant leaders guiding our church family</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            { src: "/sanjoy.png", name: "Pastor Sanjoy R M", role: "Senior Pastor" },
            { src: "/ravi.png", name: "Pastor Ravi C", role: "Associate Pastor" },
            { src: "/david.png", name: "Pastor David Y", role: "Assistant Pastor" },
            { src: "/shelji.png", name: "Pastor Shelji Sanjoy", role: "Assistant Pastor" },
            { src: "/pramila.png", name: "Pastor Pramila Ravi", role: "Assistant Pastor" },
            { src: "/shalom.png", name: "Master Shalom", role: "Worship Leader" },
          ].map((p, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-white/10 bg-black/5">
              <div className="relative aspect-[4/3]">
                <Image
                  src={p.src}
                  alt={p.name}
                  fill
                  sizes="(min-width: 1024px) 400px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-foreground/70">{p.role}</p>
                <p className="mt-1 text-base font-semibold">{p.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/5">
            <div className="relative aspect-[4/3]">
              <Image
                src="/public.png"
                alt="Grace Worship Center building"
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-sm font-medium tracking-wide text-foreground/70">About Grace Worship Center</p>
            <h2 className="mt-2 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              We're a family of
              <span className="block text-purple-200">200+ families</span>
            </h2>
            <div className="mt-4 text-sm leading-7 text-foreground/80">
              GWC is a Christ-centered community devoted to worship, the Word, and serving our city.
            </div>
            <div className="mt-6 border-t border-white/20 pt-6 grid grid-cols-2 gap-6">
              <div>
                <p className="text-3xl font-semibold">50M+</p>
                <p className="text-sm text-foreground/70">TV Outreach</p>
              </div>
              <div>
                <p className="text-3xl font-semibold">10+</p>
                <p className="text-sm text-foreground/70">Churches</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
