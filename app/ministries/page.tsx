"use client";
import { useState } from "react";
import Image from "next/image";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

const ministries = [
  {
    id: "junior-church",
    title: "Junior Church Service",
    time: "Sunday 8:45am - 10:00pm",
    description: "A vibrant children's ministry where kids learn about Jesus through fun activities, songs, and Bible stories.",
    images: [
      { src: "/junior_chruch/junior_1.jpg", alt: "Children's Ministry" },
      { src: "/junior_chruch/junior_2.jpg", alt: "Children's Ministry" },
      { src: "/junior_chruch/junior_3.jpeg", alt: "Children's Ministry" },
      { src: "/moments_3.jpg", alt: "Junior Church" },
    ]
  },
  {
    id: "sunday-service",
    title: "Sunday Service",
    time: "Sunday 10:00am - 1:00pm",
    description: "Our main worship service featuring powerful worship, inspiring messages, and fellowship with the church family.",
    images: [
      { src: "/sunday_service/sunday_1.jpeg", alt: "Sunday Service" },
      { src: "/sunday_service/sunday_2.jpeg", alt: "Sunday Service" },
    ]
  },
  {
    id: "bible-study",
    title: "Bible Study",
    time: "Sunday and Monday 6:00pm - 7:30pm",
    description: "Deep dive into God's Word through interactive study sessions that strengthen faith and understanding.",
    images: [
      { src: "/bible_study/bible_1.jpeg", alt: "Bible Study" },
    ]
  },
  {
    id: "ladies-fellowship",
    title: "Ladies Fellowship",
    time: "Wednesday 10:00am - 12:00pm",
    description: "A supportive community for women to grow in faith, build relationships, and encourage one another.",
    images: [
      { src: "/ladies_meeting/ladies_2.jpeg", alt: "Ladies Fellowship" },
      { src: "/ladies_meeting/ladies_1.jpeg", alt: "Ladies Fellowship" },
      { src: "/ladies_meeting/ladies_3.jpeg", alt: "Ladies Fellowship" },
    ]
  },
  {
    id: "cell-meeting",
    title: "Cell Meeting",
    time: "Thursday 6:00pm - 7:30pm",
    description: "Small group gatherings for intimate fellowship, prayer, and spiritual growth in a close-knit setting.",
    images: [
      { src: "/main_pic.png", alt: "Cell Meeting" },
      { src: "/senior_pastor_2.png", alt: "Small Group" },
    ]
  },
  {
    id: "fasting-prayer",
    title: "Fasting Prayer",
    time: "Friday 10:00am - 12:30pm",
    description: "A time of focused prayer and fasting to seek God's presence and intercede for our community and world.",
    images: [
      { src: "/friday_meeting/friday_1.jpeg", alt: "Fasting Prayer" },
      { src: "/friday_meeting/friday_3.jpeg", alt: "Fasting Prayer" },
    ]
  },
  {
    id: "youth-sunday",
    title: "Youth Sunday",
    time: "Every 2nd Sunday 6:00pm - 7:30pm",
    description: "Dynamic worship and teaching specifically designed for young people to grow in their relationship with Christ.",
    images: [
      { src: "/youth_meeting/youth_1.jpeg", alt: "Youth Sunday" },
      { src: "/youth_meeting/youth_2.jpeg", alt: "Youth Sunday" },
      { src: "/youth_meeting/youth_3.jpeg", alt: "Youth Sunday" },
      { src: "/youth_meeting/youth_4.jpeg", alt: "Youth Sunday" },
      { src: "/youth_meeting/youth_5.jpeg", alt: "Youth Sunday" },
    ]
  },
  {
    id: "Baptism-Service",
    title: "Baptism Service",
    time: "",
    description: "Dynamic worship and teaching specifically designed for young people to grow in their relationship with Christ.",
    images: [
      { src: "/baptism_service/baptism_1.jpeg", alt: "Youth Sunday" },
      { src: "/baptism_service/baptism_2.jpeg", alt: "Youth Sunday" },
    ]
  }
];

export default function Ministries() {
  const [selectedMinistry, setSelectedMinistry] = useState<string | null>(null);

  return (
    <div className="space-y-16">
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pt-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold sm:text-5xl">Our Ministries</h1>
          <p className="mt-4 text-lg text-foreground/70">Discover the various ways we serve and grow together as a church family</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ministries.map((ministry) => (
            <div
              key={ministry.id}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-black/5 transition-all hover:border-white/20 hover:bg-black/10"
              onClick={() => setSelectedMinistry(ministry.id)}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={ministry.images[0].src}
                  alt={ministry.title}
                  fill
                  sizes="(min-width: 1024px) 400px, 100vw"
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-medium text-white/90">{ministry.time}</p>
                  <h3 className="text-lg font-semibold text-white">{ministry.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm leading-6 text-foreground/80">{ministry.description}</p>
                <div className="mt-4 flex items-center text-sm text-indigo-400 group-hover:text-indigo-300">
                  <span>View Gallery</span>
                  <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedMinistry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setSelectedMinistry(null)}
              className="absolute -top-12 right-0 text-white hover:text-white/70"
            >
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="rounded-2xl overflow-hidden">
              <Carousel
                images={ministries.find(m => m.id === selectedMinistry)?.images || []}
                autoPlayMs={3000}
                rounded="rounded-2xl"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-white">
                {ministries.find(m => m.id === selectedMinistry)?.title}
              </h3>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
