import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  Check,
  Clock,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Play,
  Send,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";

// Replace with Chels Makeover's live WhatsApp number in international format, without +.
const WHATSAPP_NUMBER = "233XXXXXXXXX";

// Replace with Chels Makeover's real Instagram link if it changes.
const INSTAGRAM_URL = "https://www.instagram.com/chels.makeover";

// Replace this placeholder email with the brand's preferred contact email.
const CONTACT_EMAIL = "hello@chelsmakeover.com";

// Replace these brand details if the studio location, tagline, or contact information changes.

// Replace these image and video file names after adding real Chels Makeover media to public/images and public/videos.
const media = {
  hero: "/images/hero.jpg",
  about: "/images/about.jpg",
  looks: [
    {
      label: "Soft glam finish",
      type: "image",
      src: "/images/look-1.jpg",
    },
    {
      label: "Birthday-ready glam",
      type: "video",
      src: "/videos/look-1.mp4",
      poster: "/images/look-2.jpg",
    },
    {
      label: "Camera-ready look",
      type: "image",
      src: "/images/look-3.jpg",
    },
    {
      label: "Elegant occasion glam",
      type: "video",
      src: "/videos/look-2.mp4",
      poster: "/images/look-4.jpg",
    },
    {
      label: "Bridal-inspired look",
      type: "image",
      src: "/images/look-5.jpg",
    },
    {
      label: "Full glam moment",
      type: "video",
      src: "/videos/look-3.mp4",
      poster: "/images/look-6.jpg",
    },
  ],
};

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Services", "services"],
  ["Recent Looks", "recent-looks"],
  ["Booking", "booking"],
  ["Contact", "contact"],
];

const services = [
  ["Soft Glam", "Clean, polished makeup that enhances your natural beauty."],
  ["Full Glam", "A more defined, camera-ready look for standout moments."],
  ["Birthday Glam", "Celebrate your day with a flawless look made for photos and memories."],
  [
    "Photoshoot Glam",
    "Makeup designed to photograph beautifully for studio shoots, portraits, and content.",
  ],
  [
    "Bridal & Engagement Glam",
    "Elegant makeup for weddings, engagements, traditional ceremonies, and bridal moments.",
  ],
  ["Special Occasion Makeup", "Perfect for dinners, graduations, parties, ceremonies, and events."],
];

const features = [
  ["Tailored Looks", "Every face, outfit, and occasion gets a thoughtful finish."],
  ["Long-Lasting Finish", "Polished glam made to stay fresh through the celebration."],
  ["Occasion-Ready Glam", "Soft, bold, classic, or editorial looks for your moment."],
];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.65, ease: "easeOut", delay },
  };
}

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/45 bg-ivory/82 backdrop-blur-xl">
      <nav className="section-shell flex h-20 items-center justify-between" aria-label="Main navigation">
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="text-left font-display text-2xl font-bold text-cocoa"
          aria-label="Go to Chels Makeover home"
        >
          Chels <span className="text-rosewood">Makeover</span>
        </button>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map(([label, id]) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollToSection(id)}
              className="text-sm font-semibold text-espresso/75 transition hover:text-cocoa"
            >
              {label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollToSection("booking")}
          className="hidden items-center gap-2 rounded-full bg-cocoa px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-espresso lg:inline-flex"
        >
          Book Now <MessageCircle size={17} aria-hidden="true" />
        </button>

        <button
          type="button"
          className="rounded-full border border-rosewood/20 p-3 text-cocoa lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-rosewood/10 bg-ivory/95 px-5 py-5 shadow-soft lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map(([label, id]) => (
              <button
                key={id}
                type="button"
                onClick={() => {
                  scrollToSection(id);
                  setIsOpen(false);
                }}
                className="rounded-2xl px-4 py-3 text-left text-sm font-semibold text-cocoa transition hover:bg-white/70"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="min-h-screen pt-24">
      <div className="section-shell grid min-h-[calc(100vh-6rem)] items-center gap-12 py-12 lg:grid-cols-[1fr_0.88fr]">
        <motion.div {...fadeUp()} className="max-w-3xl">
          <p className="eyebrow">Accra, Ghana Makeup Artist</p>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.04] text-cocoa sm:text-6xl lg:text-7xl">
            Flawless Makeup for Every Occasion
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-espresso/76">
            Professional makeup in Accra for birthdays, weddings, photoshoots, graduations,
            engagements, dinners, and special moments.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => scrollToSection("booking")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cocoa px-7 py-4 font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-espresso"
            >
              Book Your Glam <ArrowRight size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("recent-looks")}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-rosewood/25 bg-white/50 px-7 py-4 font-semibold text-cocoa transition hover:-translate-y-0.5 hover:bg-white"
            >
              View Recent Looks <Play size={18} aria-hidden="true" />
            </button>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-espresso/70">
            <span className="rounded-full bg-white/70 px-4 py-2">Soft glam</span>
            <span className="rounded-full bg-white/70 px-4 py-2">Full glam</span>
            <span className="rounded-full bg-white/70 px-4 py-2">Camera-ready looks</span>
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.12)} className="relative">
          <div className="absolute left-4 top-4 z-10 max-w-[calc(100%-2rem)] rounded-2xl border border-white/70 bg-porcelain/82 px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] text-cocoa shadow-soft backdrop-blur-md sm:left-6 sm:top-6 sm:px-5">
            Soft glam • Full glam • Camera-ready
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-white/75 bg-white shadow-soft">
            {/* Replace /public/images/hero.jpg with Chels Makeover's real hero photo or reel thumbnail. */}
            <img
              src={media.hero}
              alt="Elegant makeup look with warm beauty styling"
              className="h-[36rem] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 right-4 rounded-[1.4rem] bg-cocoa px-5 py-4 text-white shadow-soft sm:right-10">
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">Based in</p>
            <p className="mt-1 font-display text-2xl">Accra</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-shell">
        <motion.div {...fadeUp()} className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">About Chels</p>
            <h2 className="mt-4 font-display text-4xl font-bold text-cocoa sm:text-5xl">
              Beauty That Feels Like You
            </h2>
          </div>
          <p className="text-lg leading-8 text-espresso/76">
            Chels Makeover creates polished, long-lasting makeup looks tailored to your face,
            outfit, event, and personal style. Whether you want a soft natural finish or a bold glam
            moment, every look is designed to help you feel confident, beautiful, and photo-ready.
          </p>
        </motion.div>

        <motion.div {...fadeUp(0.08)} className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="overflow-hidden rounded-[1.5rem] border border-white/75 bg-white shadow-soft">
            {/* Replace /public/images/about.jpg with a real portrait, studio, kit, or behind-the-scenes image. */}
            <img
              src={media.about}
              alt="Chels Makeover beauty artistry placeholder"
              className="h-full min-h-[24rem] w-full object-cover"
            />
          </div>
          <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
            {features.map(([title, body], index) => (
              <motion.article key={title} {...fadeUp(index * 0.08)} className="premium-card p-7">
                <div className="mb-6 inline-flex rounded-full bg-blush/18 p-3 text-rosewood">
                  <Sparkles size={22} aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl font-bold text-cocoa">{title}</h3>
                <p className="mt-3 leading-7 text-espresso/70">{body}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-cocoa py-24 text-white">
      {/* Place the Services section background video at public/videos/services-bg.mp4. Keep it subtle and elegant. */}
      <video
        src="/videos/services-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-cocoa/82" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-cocoa/75 via-cocoa/60 to-cocoa/88" aria-hidden="true" />

      <div className="section-shell relative z-10">
        <motion.div {...fadeUp()} className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-champagne">
            Services
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">Makeup Services</h2>
          <p className="mt-5 text-lg leading-8 text-white/72">
            From intimate celebrations to big life moments, Chels Makeover offers makeup for every
            occasion.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map(([title, body], index) => (
            <motion.article
              key={title}
              {...fadeUp(index * 0.05)}
              whileHover={{ y: -6 }}
              className="rounded-[1.35rem] border border-white/14 bg-white/[0.075] p-7 shadow-glow backdrop-blur-md"
            >
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-full bg-champagne text-cocoa">
                <Star size={20} fill="currentColor" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl font-bold">{title}</h3>
              <p className="mt-3 leading-7 text-white/68">{body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function RecentLooks() {
  return (
    <section id="recent-looks" className="py-24">
      <div className="section-shell">
        <motion.div {...fadeUp()} className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="eyebrow">Portfolio</p>
            <h2 className="mt-4 font-display text-4xl font-bold text-cocoa sm:text-5xl">
              Recent Looks
            </h2>
            <p className="mt-5 text-lg leading-8 text-espresso/74">
              A glimpse of soft glam, full glam, bridal moments, birthday looks, and camera-ready
              beauty.
            </p>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-rosewood/20 bg-white/60 px-6 py-3 font-semibold text-cocoa transition hover:-translate-y-0.5 hover:bg-white"
          >
            See more looks on Instagram <Instagram size={18} aria-hidden="true" />
          </a>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {media.looks.map((look, index) => (
            <motion.article
              key={look.label}
              {...fadeUp(index * 0.05)}
              whileHover={{ scale: 1.015 }}
              className="group relative aspect-square overflow-hidden rounded-[1.5rem] bg-espresso shadow-soft"
            >
              {/* Replace image files in /public/images and video files in /public/videos with Chels Makeover's real media. */}
              {look.type === "video" ? (
                <video
                  src={look.src}
                  poster={look.poster}
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  aria-label={look.label}
                  className="h-full w-full rounded-[1.5rem] object-cover transition duration-700 group-hover:scale-105"
                />
              ) : (
                <img
                  src={look.src}
                  alt={look.label}
                  className="h-full w-full rounded-[1.5rem] object-cover transition duration-700 group-hover:scale-105"
                />
              )}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-cocoa/82 via-cocoa/35 to-transparent" />
              {look.type === "video" && (
                <div className="pointer-events-none absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/88 text-cocoa shadow-soft">
                  <Play size={20} fill="currentColor" aria-hidden="true" />
                </div>
              )}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
                <p className="inline-flex rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-cocoa shadow-soft">
                  {look.label}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    occasion: "",
    date: "",
    time: "",
    location: "",
    look: "",
    people: "1",
    notes: "",
  });
  const [error, setError] = useState("");

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function submitBooking(event) {
    event.preventDefault();
    const required = ["name", "phone", "occasion", "date", "time", "location", "look"];
    const missing = required.find((field) => !form[field].trim());

    if (missing) {
      setError("Please complete all required fields so Chels can confirm your booking details.");
      return;
    }

    setError("");
    const message = `Hello Chels Makeover, I'd like to book a makeup appointment.
Name: ${form.name}
Occasion: ${form.occasion}
Date: ${form.date}
Time: ${form.time}
Location: ${form.location}
Preferred look: ${form.look}
Number of people: ${form.people}
Notes: ${form.notes || "None provided"}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  }

  return (
    <section id="booking" className="py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <motion.div {...fadeUp()} className="lg:sticky lg:top-28">
          <p className="eyebrow">Booking</p>
          <h2 className="mt-4 font-display text-4xl font-bold text-cocoa sm:text-5xl">
            Book Your Glam
          </h2>
          <p className="mt-5 text-lg leading-8 text-espresso/75">
            Tell us about your occasion and we'll confirm availability.
          </p>
          <div className="mt-8 space-y-4 text-espresso/74">
            <p className="flex items-center gap-3">
              <CalendarCheck className="text-rosewood" size={20} aria-hidden="true" />
              Booking requests open in WhatsApp with your details ready to send.
            </p>
            <p className="flex items-center gap-3">
              <Clock className="text-rosewood" size={20} aria-hidden="true" />
              Add your time and location for a faster response.
            </p>
            <p className="flex items-center gap-3">
              <Users className="text-rosewood" size={20} aria-hidden="true" />
              Group bookings are welcome for special events.
            </p>
          </div>
        </motion.div>

        <motion.form {...fadeUp(0.1)} onSubmit={submitBooking} className="premium-card p-5 sm:p-8">
          {error && (
            <p className="mb-5 rounded-2xl border border-rosewood/20 bg-blush/15 px-4 py-3 text-sm font-semibold text-rosewood">
              {error}
            </p>
          )}
          <div className="grid gap-5 md:grid-cols-2">
            <Input label="Full name" name="name" value={form.name} onChange={updateField} required />
            <Input label="WhatsApp number" name="phone" value={form.phone} onChange={updateField} required />
            <Input label="Occasion type" name="occasion" value={form.occasion} onChange={updateField} required />
            <Input label="Event date" name="date" type="date" value={form.date} onChange={updateField} required />
            <Input label="Event time" name="time" type="time" value={form.time} onChange={updateField} required />
            <Input label="Location" name="location" value={form.location} onChange={updateField} required />
            <Input label="Preferred look" name="look" value={form.look} onChange={updateField} required />
            <Input label="Number of people" name="people" type="number" min="1" value={form.people} onChange={updateField} />
          </div>
          <label className="mt-5 block text-sm font-semibold text-cocoa">
            Extra notes
            <textarea
              name="notes"
              value={form.notes}
              onChange={updateField}
              rows="5"
              className="field resize-none"
              placeholder="Tell us about outfit colors, skin preferences, venue, or inspiration."
            />
          </label>
          <button
            type="submit"
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cocoa px-7 py-4 font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-espresso sm:w-auto"
          >
            Send Booking Request <Send size={18} aria-hidden="true" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Input({ label, ...props }) {
  return (
    <label className="block text-sm font-semibold text-cocoa">
      {label}
      <input className="field" placeholder={label} {...props} />
    </label>
  );
}

function Contact() {
  return (
    <footer id="contact" className="bg-espresso py-16 text-white">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-champagne">
              Contact
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold">Chels Makeover</h2>
            <p className="mt-4 max-w-xl leading-7 text-white/68">
              Premium, friendly makeup artistry for weddings, birthdays, photoshoots, graduations,
              dinners, parties, and special events in Accra.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <a className="inline-flex items-center gap-3 text-white/78 transition hover:text-white" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              <Instagram size={19} aria-hidden="true" /> Instagram
            </a>
            <a className="inline-flex items-center gap-3 text-white/78 transition hover:text-white" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
              <MessageCircle size={19} aria-hidden="true" /> WhatsApp
            </a>
            <p className="inline-flex items-center gap-3 text-white/78">
              <MapPin size={19} aria-hidden="true" /> Accra, Ghana
            </p>
            <a className="inline-flex items-center gap-3 text-white/78 transition hover:text-white" href={`mailto:${CONTACT_EMAIL}`}>
              <Mail size={19} aria-hidden="true" /> {CONTACT_EMAIL}
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-sm text-white/55 sm:flex-row">
          <p>© 2026 Chels Makeover. All rights reserved.</p>
          <p>Soft glam • Full glam • Camera-ready beauty</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <RecentLooks />
        <Booking />
      </main>
      <Contact />
    </>
  );
}
