import Image from "next/image";
import Footer from "../components/Footer";

const values = [
  {
    title: "Worship",
    description: "We believe in authentic, Spirit-led worship that honors God and draws people closer to Him.",
    icon: "🎵"
  },
  {
    title: "Word",
    description: "The Bible is our foundation. We teach God's Word with clarity, relevance, and practical application.",
    icon: "📖"
  },
  {
    title: "Community",
    description: "We are a family that supports, encourages, and grows together in faith and love.",
    icon: "👥"
  },
  {
    title: "Service",
    description: "Following Jesus' example, we serve our community and world with compassion and excellence.",
    icon: "🤝"
  }
];

const beliefs = [
  "We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.",
  "We believe in the deity of Jesus Christ, His virgin birth, sinless life, miracles, and teachings.",
  "We believe in the death, burial, and resurrection of Jesus Christ for the salvation of humanity.",
  "We believe in the Holy Spirit as the third person of the Trinity, who indwells believers.",
  "We believe in the Bible as the inspired, infallible Word of God and our final authority.",
  "We believe in salvation by grace through faith in Jesus Christ alone.",
  "We believe in the church as the body of Christ, called to worship, fellowship, and service.",
  "We believe in the second coming of Jesus Christ and the eternal destiny of all people."
];

const leadership = [
  {
    name: "Pastor Sanjoy R M",
    role: "Senior Pastor",
    image: "/sanjoy.png",
    bio: "Pastor Sanjoy has been serving at Grace Worship Center for over 15 years, leading with passion and dedication to God's Word."
  },
  {
    name: "Pastor Ravi C",
    role: "Associate Pastor",
    image: "/ravi.png",
    bio: "Pastor Ravi brings years of experience in pastoral care and community outreach to our church family."
  },
  {
    name: "Pastor David Y",
    role: "Assistant Pastor",
    image: "/david.png",
    bio: "Pastor David leads our youth ministry and worship teams with energy and a heart for the next generation."
  }
];

export default function About() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pt-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold sm:text-5xl">About Grace Worship Center</h1>
          <p className="mt-4 text-lg text-foreground/70">
            A Christ-centered community committed to worship, the Word, and serving our city
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/5">
            <div className="relative aspect-[4/3]">
              <Image
                src="/main_pic.png"
                alt="Grace Worship Center building"
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
            <p className="text-foreground/80 leading-7 mb-4">
              Grace Worship Center was founded with a vision to create a place where people can encounter God, 
              grow in their faith, and serve their community. What started as a small gathering of believers has 
              grown into a vibrant church family of over 200 families.
            </p>
            <p className="text-foreground/80 leading-7">
              Over the years, we have seen God's faithfulness in our midst. From our humble beginnings to our 
              current ministry, we remain committed to the core values that have guided us: authentic worship, 
              biblical teaching, genuine community, and compassionate service.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/5 p-8">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-foreground/80 leading-7">
              To lead people into a growing relationship with Jesus Christ through worship, 
              the Word, and authentic community, while serving our city with love and compassion.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/5 p-8">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-foreground/80 leading-7">
              To be a thriving church that transforms lives, strengthens families, and impacts 
              our community for the glory of God, reaching people with the Gospel of Jesus Christ.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Core Values</h2>
          <p className="text-foreground/70">The principles that guide everything we do</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <div key={index} className="rounded-2xl border border-white/10 bg-black/5 p-6 text-center">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-sm text-foreground/80 leading-6">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What We Believe */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">What We Believe</h2>
          <p className="text-foreground/70">Our foundational beliefs based on God's Word</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-black/5 p-8">
          <div className="grid gap-4 md:grid-cols-2">
            {beliefs.map((belief, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-indigo-400 mt-2"></div>
                <p className="text-foreground/80 leading-6">{belief}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Leadership</h2>
          <p className="text-foreground/70">Meet the pastors who guide our church family</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {leadership.map((leader, index) => (
            <div key={index} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full border-4 border-white/10">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{leader.name}</h3>
              <p className="text-indigo-400 font-medium mb-3">{leader.role}</p>
              <p className="text-sm text-foreground/80 leading-6">{leader.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20 p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Join Our Family</h2>
          <p className="text-lg text-foreground/80 mb-6 max-w-2xl mx-auto">
            Whether you're exploring faith or looking for a church home, we'd love to welcome you 
            into our community. Come as you are and discover what God has in store for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/" 
              className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-white font-medium hover:bg-indigo-500 transition-colors"
            >
              Plan Your Visit
            </a>
            <a 
              href="/ministries" 
              className="inline-flex items-center justify-center rounded-md bg-white/10 px-6 py-3 text-white font-medium ring-1 ring-inset ring-white/30 hover:bg-white/15 transition-colors"
            >
              Explore Ministries
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
