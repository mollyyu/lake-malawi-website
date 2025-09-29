"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Fish, Leaf, Recycle, Sprout, Landmark, GraduationCap, Mail, Phone, CirclePlay } from "lucide-react";

/**
 * Lake Malawi Positive Development™ — Home Page
 *
 * 🔧 Setup notes
 * - Place assets in /public/images:
 *   - new pd logo → /public/images/logo-pd.png
 *   - GT logo → /public/images/logo-gt.png
 *   - Malawi partner placeholders → /public/images/logo-mw-1.png, logo-mw-2.png
 *   - Hero (Lake Malawi shoreline/fishers) → /public/images/hero.jpg
 *   - "What This Is" visual → /public/images/what-this-is.jpg
 *   - Closing CTA (Lake Malawi at Dusk) → /public/images/dusk.jpg
 * - Tailwind required. Uses arbitrary color values based on PD palette guidance.
 * - Links currently point to placeholders; wire them to real routes later.
 */

// PD palette (arbitrary Tailwind colors)
const colors = {
  navy: "#0B3C49", // deep teal/navy for headings
  gold: "#F4A300", // gold/orange for CTAs
  aqua: "#E6F4F1", // light aqua for section breaks
  cream: "#FBF7EF", // cream
};

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

function PrimaryButton({ href = "#", children }: { href?: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
      style={{ backgroundColor: colors.gold }}
    >
      {children}
    </Link>
  );
}

function OutlineButton({ href = "#", children }: { href?: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-2xl border px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
      style={{ borderColor: "#ffffff", color: "#ffffff" }}
    >
      {children}
    </Link>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* 0) Header / Navigation */}
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/Lake-Malawi-Project-Logo.png" alt="PD Logo" width={461} height={44} className="h-16 object-contain" />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
            <Link className="text-sm hover:opacity-80 font-bold" style={{ color: colors.navy }} href="#about">About PD</Link>
            <Link className="text-sm hover:opacity-80 font-bold" style={{ color: colors.navy }} href="#about">Lake Malawi PD Corridor</Link>
            <Link className="text-sm hover:opacity-80 font-bold" style={{ color: colors.navy }} href="#media">Media</Link>
            <Link className="text-sm hover:opacity-80 font-bold" style={{ color: colors.navy }} href="#involved">Get Involved</Link>
            <Link className="text-sm hover:opacity-80 font-bold" style={{ color: colors.navy }} href="#contact">Contact</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="#about" className="hidden items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold md:inline-flex" style={{ borderColor: colors.navy, color: colors.navy }}>
              <Play className="h-4 w-4" /> Watch 60s Video
            </Link>
            <button className="md:hidden inline-flex items-center justify-center rounded-full p-2 text-gray-700 hover:bg-gray-100" aria-label="Open Menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
          </div>
        </Container>
      </header>

      {/* 1) Main */}
      <section id="main" className="relative">
        <div className="absolute inset-0">
          <Image src="/images/home-page-main-image.png" alt="Lake Malawi shoreline and fishers" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        <Container>
          <div className="relative flex min-h-[72vh] flex-col items-center justify-center py-20 text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
            >
              Lake Malawi Project
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
            >
              Positive Development™
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-5 max-w-3xl text-base sm:text-lg md:text-xl text-white/90 font-bold"
            >
              Doing more good: Regenerating Nature,
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-1 max-w-3xl text-base sm:text-lg md:text-xl text-white/90 font-bold"
            >
              Serving Society and Growing Local Economies — Together
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
            >
              <OutlineButton href="#about"><CirclePlay className="h-5 w-5" /> Watch 60-Second Video</OutlineButton>
              <PrimaryButton href="#involved">Get Involved</PrimaryButton>
            </motion.div>
          </div>
        </Container>
      </section>


      {/* 2) PD vs Sustainability */}
      <section aria-labelledby="pd-vs" className="py-10" style={{ backgroundColor: colors.aqua }}>
        <Container>
          <h2 className="text-3xl font-extrabold" style={{ color: colors.navy }}>PD vs Sustainability</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {/* Card A */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-3">
                <Leaf className="h-6 w-6" style={{ color: colors.navy }} />
                <h3 className="text-lg font-bold" style={{ color: colors.navy }}>Traditional Sustainability</h3>
              </div>
              <ul className="list-disc space-y-1 pl-5 text-sm font-bold">
                <li>&quot;Do less harm&quot;</li>
                <li>Accepts trade-offs and thinks in silos</li>
                <li>Mitigates negative tipping points</li>
              </ul>
            </div>
            {/* Card B */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-3">
                <Recycle className="h-6 w-6" style={{ color: colors.navy }} />
                <h3 className="text-lg font-bold" style={{ color: colors.navy }}>Positive Development™</h3>
              </div>
              <ul className="list-disc space-y-1 pl-5 text-sm font-bold">
                <li>&quot;Do more good&quot;</li>
                <li>Creates synergistic benefits across sectors</li>
                <li>Fosters positive tipping points</li>
              </ul>
            </div>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-gray-700 font-bold">
            Positive Development™ is about engineering positive tipping points for society, the environment and the economy
          </p>
        </Container>
      </section>

      {/* 3) What This Is */}
      <section id="about" className="py-20" style={{ backgroundColor: colors.cream }}>
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold" style={{ color: colors.navy }}>What is the Lake Malawi PD Corridor?</h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-700 font-bold">
                A world-first model that links regenerative agriculture, sustainable aquaculture, circular SMEs, higher education,
                eco-tourism and community-led conservation so that waste becomes wealth, ecosystems recover and communities thrive
              </p>
              <div className="mt-6">
                <PrimaryButton href="#corridor">Get Involved</PrimaryButton>
              </div>
            </div>

            <div className="mx-auto max-w-4xl px-4 text-center">
              <h2 className="text-2xl font-bold mb-6">Watch the 60s Introduction</h2>
              
              <div className="relative aspect-video overflow-hidden rounded-2xl shadow-lg">
                <video 
                  controls
                  poster="/images/what-this-is.jpg"  // optional preview image
                  className="h-full w-full object-cover"
                >
                  <source src="/videos/Lake-Malawi-Project-Introduction-2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* 4) Why Lake Malawi? */}
      <section id="why" className="py-10" >
        <Container>
          <h2 className="text-center text-3xl font-extrabold" style={{ color: colors.navy }}>Why Lake Malawi?</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { value: "1,000+", label: "fish species (global freshwater biodiversity hotspot)", icon: Fish },
              { value: "2M+", label: "people depend on the lake", icon: Landmark },
              { value: "40%+", label: "of national protein from fisheries", icon: Sprout },
            ].map((s, idx) => (
              <div key={idx} className="rounded-2xl border p-6 text-center shadow-sm">
                <s.icon className="mx-auto mb-2 h-7 w-7" style={{ color: colors.navy }} />
                <div className="text-4xl font-extrabold" style={{ color: colors.navy }}>{s.value}</div>
                <div className="mt-1 text-sm text-gray-700">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-xs text-gray-600">
            Pressures: overfishing, soil loss, weak value chains — PD connects solutions
          </p>
        </Container>
      </section>


      {/* 5) Project Highlights */}
      <section id="highlight" className="py-10" style={{ backgroundColor: colors.aqua }}>
        <Container>
          <h2 className="text-3xl font-extrabold" style={{ color: colors.navy }}>What We Are Building</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Crop and fishery byproducts → sustainable fish feed", icon: Recycle },
              { title: "Regenerative farming that restores water & soils", icon: Leaf },
              { title: "Circular SMEs that grow local incomes", icon: Sprout },
              { title: "Eco-tourism &quot;living labs&quot; for learning & jobs", icon: GraduationCap },
            ].map((c, idx) => (
              <Link href="#" key={idx} className="group rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md">
                <div className="mb-3 flex items-center gap-3">
                  <c.icon className="h-6 w-6 flex-shrink-0" style={{ color: colors.navy }} />
                  <h3 className="text-sm font-semibold group-hover:underline" style={{ color: colors.navy }}>{c.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 6) Closing CTA */}
      <section id="close-cta" className="relative">
        <div className="absolute inset-0">
          <Image src="/images/Lake-Malawi-at-Dusk.jpg" alt="Lake Malawi at Dusk" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <Container>
          <div className="relative flex min-h-[50vh] flex-col items-center justify-center py-16 text-center text-white">
            <h2 className="max-w-4xl text-2xl font-bold sm:text-3xl md:text-4xl">
              Only one country can be first. 
            </h2>
            <h2 className="mt-4 max-w-4xl text-2xl font-bold sm:text-3xl md:text-4xl">
              Let&apos;s make Malawi the world&apos;s first Positive Development™ Corridor
            </h2>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
              <PrimaryButton href="#involved">Get Involved</PrimaryButton>
              <OutlineButton href="#contact">Contact Us</OutlineButton>
            </div>
          </div>
        </Container>
      </section>

      {/* 7) Partners & Students */}
      <section className="py-16" id="partners" style={{ backgroundColor: colors.cream }}>
        <Container>
          <h2 className="text-2xl font-extrabold text-center" style={{ color: colors.navy }}>Built Together</h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-sm text-gray-700">
            Co-created with Malawian partners and supported by Georgia Tech students and global collaborators
          </p>
          <div className="mt-8 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 md:grid-cols-5">
            <div className="relative mx-auto h-12 w-36">
              <Image src="/images/new-pd-logo.png" alt="PD" fill className="object-contain" />
            </div>
            <div className="relative mx-auto h-12 w-36">
              <Image src="/images/logo-gt.png" alt="Georgia Tech" fill className="object-contain" />
            </div>
            <div className="relative mx-auto h-12 w-36">
              <Image src="/images/logo-mw-1.png" alt="Malawi Partner 1" fill className="object-contain" />
            </div>
            <div className="relative mx-auto h-12 w-36">
              <Image src="/images/logo-mw-2.png" alt="Malawi Partner 2" fill className="object-contain" />
            </div>
            <div className="relative mx-auto h-12 w-36">
              <Image src="/images/logo-mw-3.png" alt="Malawi Partner 3" fill className="object-contain" />
            </div>
          </div>
        </Container>
      </section>

      {/* 8) Footer */}
      <footer className="border-t py-10">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-sm font-bold" style={{ color: colors.navy }}>Positive Development™</h3>
              <div className="mt-4 flex items-center gap-4 text-sm text-gray-700" id="contact">
                <a href="mailto:info@example.org" className="inline-flex items-center gap-2 hover:underline"><Mail className="h-4 w-4" /> info@example.org</a>
                <a href="tel:+10000000000" className="inline-flex items-center gap-2 hover:underline"><Phone className="h-4 w-4" /> +1 000 000 0000</a>
              </div>
            </div>
            <nav aria-label="Footer" className="grid grid-cols-2 gap-3 text-sm md:grid-cols-1">
              <Link className="hover:underline" href="#about">About PD</Link>
              <Link className="hover:underline" href="#why">Corridor</Link>
              <Link className="hover:underline" href="#media">Media</Link>
              <Link className="hover:underline" href="#involved">Get Involved</Link>
              <Link className="hover:underline" href="#contact">Contact</Link>
            </nav>
            <div className="grid content-start gap-4">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-36"><Image src="/images/new-pd-logo.png" alt="PD" fill className="object-contain" /></div>
                <div className="relative h-10 w-10"><Image src="/images/logo-gt.png" alt="GT" fill className="object-contain" /></div>
              </div>
              <p className="text-xs text-gray-500">© {new Date().getFullYear()} Positive Development. All rights reserved.</p>
            </div>
          </div>
        </Container>
      </footer>

      {/* Hidden anchors for nav targets */}
      <div id="about" className="sr-only" aria-hidden />
      <div id="media" className="sr-only" aria-hidden />
      <div id="involved" className="sr-only" aria-hidden />
      <div id="video" className="sr-only" aria-hidden />
    </div>
  );
}
