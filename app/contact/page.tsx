"use client";
import { useState } from "react";
import Footer from "../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // In a real implementation, you would send this to your backend
      // For now, we'll simulate the submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Address",
      details: [
        "Grace Worship Center",
        "1234 Hope Avenue",
        "Your City, State 12345"
      ]
    },
    {
      icon: "📞",
      title: "Phone",
      details: [
        "Main Office: (555) 123-4567",
        "Pastor's Line: (555) 123-4568"
      ]
    },
    {
      icon: "✉️",
      title: "Email",
      details: [
        "info@gwc.org",
        "pastor@gwc.org"
      ]
    },
    {
      icon: "🕒",
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 5:00 PM",
        "Saturday: 9:00 AM - 1:00 PM"
      ]
    }
  ];

  const serviceTimes = [
    {
      day: "Sunday",
      services: [
        { name: "Junior Church Service", time: "8:45 AM - 10:00 AM" },
        { name: "Sunday Service", time: "10:00 AM - 1:00 PM" },
        { name: "Bible Study", time: "6:00 PM - 7:30 PM" }
      ]
    },
    {
      day: "Monday",
      services: [
        { name: "Bible Study", time: "6:00 PM - 7:30 PM" }
      ]
    },
    {
      day: "Wednesday",
      services: [
        { name: "Ladies Fellowship", time: "10:00 AM - 12:00 PM" }
      ]
    },
    {
      day: "Thursday",
      services: [
        { name: "Cell Meeting", time: "6:00 PM - 7:30 PM" }
      ]
    },
    {
      day: "Friday",
      services: [
        { name: "Fasting Prayer", time: "10:00 AM - 12:30 PM" }
      ]
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pt-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold sm:text-5xl">Contact Us</h1>
          <p className="mt-4 text-lg text-foreground/70">
             We&apos;d love to hear from you. Get in touch with us today!
          </p>
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-70 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-white/10 bg-black/5 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-white/10 bg-black/5 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-white/10 bg-black/5 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-white/10 bg-black/5 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="visit">Plan a Visit</option>
                    <option value="ministry">Ministry Information</option>
                    <option value="prayer">Prayer Request</option>
                    <option value="support">Pastoral Care</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-white/10 bg-black/5 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400">
                   Thank you for your message! We&apos;ll get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
                  There was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-2xl">{info.icon}</div>
                    <div>
                      <h3 className="font-semibold mb-2">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-foreground/80 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Times */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Service Times</h2>
              <div className="space-y-4">
                {serviceTimes.map((day, index) => (
                  <div key={index} className="border-l-2 border-indigo-500 pl-4">
                    <h3 className="font-semibold text-indigo-400">{day.day}</h3>
                    <div className="mt-2 space-y-1">
                      {day.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="text-sm text-foreground/80">
                          <span className="font-medium">{service.name}</span>
                          <span className="ml-2">{service.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Follow Us</h2>
              <div className="flex gap-4">
                <a href="#" className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <span className="text-lg">📘</span>
                </a>
                <a href="#" className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <span className="text-lg">📷</span>
                </a>
                <a href="#" className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <span className="text-lg">📺</span>
                </a>
                <a href="#" className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <span className="text-lg">🐦</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-black/5 p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Find Us</h2>
          <div className="aspect-video rounded-lg bg-white/5 flex items-center justify-center">
            <div className="text-center text-foreground/60">
              <div className="text-4xl mb-2">🗺️</div>
              <p>Interactive map will be embedded here</p>
              <p className="text-sm mt-2">Grace Worship Center, 1234 Hope Avenue, Your City</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
