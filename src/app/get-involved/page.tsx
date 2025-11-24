"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  GraduationCap,
  BookOpen,
  Heart,
  Building2,
  Landmark,
  Microscope,
  Camera,
  Plane,
  ArrowRight
} from "lucide-react";

/**
 * Lake Malawi Positive Development™ — Get Involved Page
 * 
 * This page showcases how different stakeholder groups can participate
 * in the Lake Malawi Living Lab initiative and what they gain in return.
 */

// PD palette (matching home page)
const colors = {
  navy: "#0B3C49",
  gold: "#F4A300",
  aqua: "#E6F4F1",
  cream: "#FBF7EF",
};

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

function PrimaryButton({ href = "#", children }: { href?: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
      style={{ backgroundColor: colors.gold }}
    >
      {children}
    </Link>
  );
}

interface StakeholderCardProps {
  icon: React.ElementType;
  title: string;
  participation: string[];
  benefits: string[];
  tagline?: string;
}

function StakeholderCard({ icon: Icon, title, participation, benefits, tagline }: StakeholderCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group rounded-2xl bg-white p-6 shadow-md transition hover:shadow-xl"
    >
      <div className="mb-4 flex items-start gap-4">
        <div className="rounded-xl p-3 transition" style={{ backgroundColor: colors.aqua }}>
          <Icon className="h-6 w-6" style={{ color: colors.navy }} />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold transition" style={{ color: colors.navy }}>
            {title}
          </h3>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="mb-2 text-sm font-bold uppercase tracking-wide" style={{ color: colors.gold }}>
          How to Participate
        </h4>
        <ul className="space-y-2 text-sm text-gray-700">
          {participation.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: colors.navy }} />
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="mb-2 text-sm font-bold uppercase tracking-wide" style={{ color: colors.gold }}>
          Benefits
        </h4>
        <ul className="space-y-2 text-sm text-gray-700">
          {benefits.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: colors.gold }} />
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {tagline && (
        <div className="mt-4 border-t pt-4" style={{ borderColor: colors.aqua }}>
          <p className="text-center text-sm font-bold italic" style={{ color: colors.navy }}>
            {tagline}
          </p>
        </div>
      )}
    </motion.div>
  );
}

export default function GetInvolvedPage() {
  const stakeholders: StakeholderCardProps[] = [
    {
      icon: Users,
      title: "Local Communities",
      participation: [
        "Participate as co-creators of the Living Lab – shaping priorities and leading land and water restoration efforts",
        "Share indigenous knowledge and pilot new regenerative practices",
        "Teach visiting students and experts"
      ],
      benefits: [
        "New livelihoods created through teaching, guiding, restoration work and regenerative enterprise",
        "Co-design long-term models that support cultural heritage, youth opportunity and village prosperity"
      ],
      tagline: "Communities are not beneficiaries — they are the teachers, innovators and stewards who lead the way"
    },
    {
      icon: Microscope,
      title: "Universities and Researchers",
      participation: [
        "Participate through field placements, Living Lab modules and data partnerships"
      ],
      benefits: [
        "Unparalleled real-world research conditions",
        "Open data dashboards",
        "Co-authorship in cutting-edge interdisciplinary work",
        "Expansion of global reach and new connections to potential funders and collaborators"
      ],
      tagline: "The Living Lab turns daily practice into publishable science"
    },
    {
      icon: GraduationCap,
      title: "Students and Learners",
      participation: [
        "Participate in the Learn–Do–Teach–Get Paid loop",
        "Engage in apprenticeships, research projects, and remote collaboration"
      ],
      benefits: [
        "Gain real-world impact experience and contribute to measurable regeneration",
        "Potentially contribute on the ground at the Lake Malawi Living Lab as part of university coursework"
      ],
      tagline: "Learning is not an outcome – it is the outcome"
    },
    {
      icon: Heart,
      title: "Foundations and Philanthropies",
      participation: [
        "Fund \"double-duty dollars\" — investments that regenerate twice: once in the landscape, once in the learning"
      ],
      benefits: [
        "Clear metrics and compelling media",
        "Legacy-level impact that multiplies itself"
      ],
      tagline: "Every dollar does not just fund activity; it creates capacity"
    },
    {
      icon: Building2,
      title: "Private Sector Partners and SMEs",
      participation: [
        "Participate through circular supply chains and product sourcing",
        "Mentor local enterprises"
      ],
      benefits: [
        "Ethical brand alignment",
        "Measurable ESG returns",
        "Access to regenerative innovations and co-ops"
      ],
      tagline: "In PD, profit circulates — it does not extract"
    },
    {
      icon: Landmark,
      title: "Government and NGOs",
      participation: [
        "Participate through policy collaboration, reserve management and program alignment"
      ],
      benefits: [
        "Strengthened local enforcement",
        "Transparent dashboards",
        "Scalable governance models for replication across Malawi"
      ],
      tagline: "Each partnership becomes a prototype for national resilience"
    },
    {
      icon: BookOpen,
      title: "Malawian and International Domain Experts",
      participation: [
        "Share practical wisdom and mentor university teams",
        "Co-develop field protocols and help shape regenerative models",
        "Contribute expertise in agriculture, fisheries, health, ecology, enterprise, climate science, storytelling and more"
      ],
      benefits: [
        "Work alongside Malawian students, practitioners and communities eager to learn, adapt, and replicate proven approaches",
        "Ensure your expertise becomes a living asset – teaching, scaling and uplifting communities long after you have shared it"
      ],
      tagline: "Your sharing and teaching cements your legacy"
    },
    {
      icon: Camera,
      title: "Media and Storytelling Partners",
      participation: [
        "Co-produce documentaries",
        "Train storytellers and distribute stories of regeneration"
      ],
      benefits: [
        "Authentic narratives",
        "Visibility for social impact",
        "Enduring cultural relevance"
      ],
      tagline: "Every frame creates a future"
    },
    {
      icon: Plane,
      title: "Travelers, Tourists and Global Citizens",
      participation: [
        "Visit, volunteer or support through our upcoming Adopt-a-Plot and Sponsor-a-Student programs"
      ],
      benefits: [
        "See regeneration firsthand",
        "Learn from local experts",
        "Experience next-generation ecotourism",
        "Know that your contribution grows beyond your visit"
      ],
      tagline: "Come to learn, leave transformed"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/Lake-Malawi-Project-Logo.png" alt="PD Logo" width={461} height={44} className="h-16 object-contain" />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
            <Link className="text-sm hover:opacity-80 font-bold" style={{ color: colors.navy }} href="/#about">About PD</Link>
            <Link className="text-sm hover:opacity-80 font-bold" style={{ color: colors.navy }} href="/#about">Lake Malawi PD Corridor</Link>
            <Link className="text-sm hover:opacity-80 font-bold" style={{ color: colors.navy }} href="/#media">Media</Link>
            <Link className="text-sm hover:opacity-80 font-bold" style={{ color: colors.navy }} href="/get-involved">Get Involved</Link>
            <Link className="text-sm hover:opacity-80 font-bold" style={{ color: colors.navy }} href="/#contact">Contact</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/" className="text-sm font-semibold hover:opacity-80" style={{ color: colors.navy }}>
              ← Back to Home
            </Link>
          </div>
        </Container>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20" style={{ backgroundColor: colors.navy }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("/images/home-page-main-image.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
        </div>
        <Container>
          <div className="relative text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
            >
              GET INVOLVED
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 text-xl font-bold sm:text-2xl"
            >
              Every Stakeholder Strengthens the System
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mx-auto mt-4 max-w-3xl text-base font-medium text-white/90 sm:text-lg"
            >
              Positive Development™ thrives when everyone brings their unique strengths to the table.
              Because PD is designed as a self-reinforcing ecosystem, every partner — from local farmer
              to global foundation — plays a vital and visible role.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Introduction */}
      <section className="py-12" style={{ backgroundColor: colors.aqua }}>
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-bold sm:text-3xl" style={{ color: colors.navy }}>
              How Different Groups Can Participate
            </h2>
            <p className="mt-4 text-base text-gray-700 font-medium">
              Below are examples of how different groups can participate and what they gain in return
            </p>
          </div>
        </Container>
      </section>

      {/* Stakeholder Cards */}
      <section className="py-16">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {stakeholders.map((stakeholder, idx) => (
              <StakeholderCard key={idx} {...stakeholder} />
            ))}
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/Lake-Malawi-at-Dusk.jpg"
            alt="Lake Malawi at Dusk"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <Container>
          <div className="relative text-center text-white">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-extrabold sm:text-4xl md:text-5xl"
            >
              Join the Movement
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mx-auto mt-6 max-w-3xl text-lg font-medium sm:text-xl"
            >
              Whether you teach, invest, study, film, farm or simply believe in doing more good —
              the Lake Malawi Living Lab welcomes you.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mx-auto mt-4 max-w-2xl text-xl font-bold sm:text-2xl"
            >
              Together, we are proving that learning can be the world&apos;s most regenerative resource.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
            >
              <PrimaryButton href="/#contact">Contact Us</PrimaryButton>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-2xl border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Learn More About PD
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="border-t py-10">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-sm font-bold" style={{ color: colors.navy }}>Positive Development™</h3>
              <div className="mt-4 flex flex-col gap-2 text-sm text-gray-700">
                <a href="mailto:info@example.org" className="hover:underline">info@example.org</a>
                <a href="tel:+10000000000" className="hover:underline">+1 000 000 0000</a>
              </div>
            </div>
            <nav aria-label="Footer" className="grid grid-cols-2 gap-3 text-sm md:grid-cols-1">
              <Link className="hover:underline" href="/#about">About PD</Link>
              <Link className="hover:underline" href="/#why">Corridor</Link>
              <Link className="hover:underline" href="/#media">Media</Link>
              <Link className="hover:underline" href="/get-involved">Get Involved</Link>
              <Link className="hover:underline" href="/#contact">Contact</Link>
            </nav>
            <div className="grid content-start gap-4">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-36">
                  <Image src="/images/new-pd-logo.png" alt="PD" fill className="object-contain" />
                </div>
                <div className="relative h-10 w-10">
                  <Image src="/images/logo-gt.png" alt="GT" fill className="object-contain" />
                </div>
              </div>
              <p className="text-xs text-gray-500">© {new Date().getFullYear()} Positive Development. All rights reserved.</p>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
