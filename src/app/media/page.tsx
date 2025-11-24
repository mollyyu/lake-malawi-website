"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import {
    Camera,
    Film,
    BookOpen,
    Users,
    Globe,
    TrendingUp,
    Heart,
    Award,
    Database,
    CheckCircle2,
    ChevronLeft,
    ChevronRight
} from "lucide-react";

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

interface FeatureCardProps {
    icon: React.ElementType;
    title: string;
    description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-xl"
        >
            <div className="mb-4 inline-flex rounded-xl p-3" style={{ backgroundColor: colors.aqua }}>
                <Icon className="h-6 w-6" style={{ color: colors.navy }} />
            </div>
            <h3 className="mb-3 text-lg font-bold" style={{ color: colors.navy }}>
                {title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-700 font-medium">
                {description}
            </p>
        </motion.div>
    );
}

function ImageCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const mediaImages = [
        { src: "/images/media_1.png", alt: "Media 1" },
        { src: "/images/media_2.png", alt: "Media 2" },
        { src: "/images/media_3.png", alt: "Media 3" },
        { src: "/images/media_4.png", alt: "Media 4" },
        { src: "/images/media_5.png", alt: "Media 5" },
        { src: "/images/media_6.png", alt: "Media 6" },
        { src: "/images/media_7.png", alt: "Media 7" },
        { src: "/images/media_8.png", alt: "Media 8" },
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % mediaImages.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + mediaImages.length) % mediaImages.length);
    };

    return (
        <div className="mx-auto max-w-5xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-white p-4 shadow-2xl"
            >
                <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-100">
                    <Image
                        src={mediaImages[currentIndex].src}
                        alt={mediaImages[currentIndex].alt}
                        fill
                        className="object-cover transition-all duration-500"
                    />

                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg transition hover:bg-white hover:scale-110"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="h-6 w-6" style={{ color: colors.navy }} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg transition hover:bg-white hover:scale-110"
                        aria-label="Next image"
                    >
                        <ChevronRight className="h-6 w-6" style={{ color: colors.navy }} />
                    </button>
                </div>

                <div className="mt-4 grid grid-cols-4 gap-2 md:grid-cols-8">
                    {mediaImages.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`relative aspect-video overflow-hidden rounded-lg border-2 transition ${index === currentIndex ? "border-opacity-100 ring-2 ring-blue-500 ring-offset-2" : "border-opacity-0 opacity-60 hover:opacity-100"
                                }`}
                            style={{
                                borderColor: index === currentIndex ? colors.gold : "transparent",
                            }}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover"
                            />
                        </button>
                    ))}
                </div>

                <div className="mt-4 text-center text-sm font-medium text-gray-600">
                    {currentIndex + 1} / {mediaImages.length}
                </div>
            </motion.div>
        </div>
    );
}

export default function MediaPage() {
    const whyStorytellingMatters = [
        {
            icon: Database,
            title: "Intelligence",
            description: "Malawi's stories are supported by the world's first whole-systems development intelligence — an open, learning-based data platform ensuring every story sits alongside transparent environmental and community data."
        },
        {
            icon: BookOpen,
            title: "Education",
            description: "Each short film doubles as a training resource for future practitioners, whether in local ecotourism development, regenerative agriculture, fisheries management, etc."
        },
        {
            icon: TrendingUp,
            title: "Replication",
            description: "Stories of success in one village become blueprints for others"
        },
        {
            icon: Award,
            title: "Pride",
            description: "Local creators document their own progress, turning learning into legacy"
        },
        {
            icon: Camera,
            title: "Visibility",
            description: "Funders, ministries and universities gain transparent, high-impact media content that communicates the Living Lab's progress"
        },
        {
            icon: Heart,
            title: "Inspiration",
            description: "Global audiences witness not charity, but creativity – hope with a user's manual"
        }
    ];

    return (
        <div className="min-h-screen bg-white text-gray-900">
            <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
                <Container className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center gap-3">
                        <Image src="/images/Lake-Malawi-Project-Logo.png" alt="PD Logo" width={461} height={44} className="h-16 object-contain" />
                    </Link>

                    <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
                        <Link className="text-sm hover:opacity-80 font-bold" style={{ color: colors.navy }} href="/#about">About PD</Link>
                        <Link className="text-sm hover:opacity-80 font-bold" style={{ color: colors.navy }} href="/#about">Lake Malawi PD Corridor</Link>
                        <Link className="text-sm hover:opacity-80 font-bold" style={{ color: colors.navy }} href="/media">Media</Link>
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

            <section className="relative overflow-hidden py-20" style={{ backgroundColor: colors.navy }}>
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/images/main_image_for_media_page.jpg"
                        alt="Lake Malawi Media"
                        fill
                        className="object-cover"
                    />
                </div>
                <Container>
                    <div className="relative text-center text-white">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="mb-6 inline-flex rounded-2xl p-4"
                            style={{ backgroundColor: 'rgba(244, 163, 0, 0.2)' }}
                        >
                            <Film className="h-12 w-12" style={{ color: colors.gold }} />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
                        >
                            MEDIA
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.25 }}
                            className="mx-auto mt-6 max-w-3xl text-xl font-bold italic sm:text-2xl"
                        >
                            &quot;Every story regenerates twice – once in the telling and once in the learning&quot;
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mx-auto mt-6 max-w-2xl text-base font-medium text-white/90 sm:text-lg"
                        >
                            At Lake Malawi, media is not an accessory – it is a catalyst
                        </motion.p>

                    </div>
                </Container>
            </section>

            <section className="py-16" style={{ backgroundColor: colors.cream }}>
                <Container>
                    <ImageCarousel />
                </Container>
            </section>

            <section className="py-16" style={{ backgroundColor: colors.aqua }}>
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12 text-center"
                    >
                        <h2 className="text-3xl font-extrabold sm:text-4xl" style={{ color: colors.navy }}>
                            Local Voices, Global Reach
                        </h2>
                    </motion.div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="rounded-2xl p-8 shadow-lg bg-white"
                        >
                            <div className="mb-6 flex items-center gap-3">
                                <Camera className="h-8 w-8" style={{ color: colors.navy }} />
                                <h3 className="text-xl font-bold" style={{ color: colors.navy }}>
                                    Vision Six
                                </h3>
                            </div>
                            <p className="text-sm leading-relaxed text-gray-700 font-medium">
                                Through Positive Development™ Vision Six: <strong>Shared Stories of Regeneration</strong>, storytelling becomes both a learning tool and a livelihood. Every film, photo and article serves two purposes at once: <strong>it educates and it uplifts</strong>.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="rounded-2xl p-8 shadow-lg bg-white"
                        >
                            <div className="mb-6 flex items-center gap-3">
                                <Users className="h-8 w-8" style={{ color: colors.navy }} />
                                <h3 className="text-xl font-bold" style={{ color: colors.navy }}>
                                    Malawian Storytellers at the Center
                                </h3>
                            </div>
                            <p className="text-sm leading-relaxed text-gray-700 font-medium">
                                From the very beginning, the Lake Malawi Living Lab is about placing Malawian storytellers at the center of the narrative. We are building a <strong>Media Circle</strong> that captures transformation through Malawian eyes.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="rounded-2xl bg-white p-8 shadow-lg"
                        >
                            <div className="mb-6 flex items-center gap-3">
                                <Globe className="h-8 w-8" style={{ color: colors.gold }} />
                                <h3 className="text-xl font-bold" style={{ color: colors.navy }}>
                                    Each Production Teaches
                                </h3>
                            </div>
                            <ul className="space-y-3 text-sm text-gray-700">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: colors.gold }} />
                                    <span className="font-medium">Students learn world-class filming and editing</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: colors.gold }} />
                                    <span className="font-medium">Communities learn from each other&apos;s success</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: colors.gold }} />
                                    <span className="font-medium">Funders see visible, human results</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-8 rounded-2xl border-2 p-6 md:p-8 bg-white"
                        style={{ borderColor: colors.gold }}
                    >
                        <p className="text-base leading-relaxed text-gray-700 font-medium">
                            When global partners and streaming networks eventually join, <strong>Malawian voices and media students will remain front and center</strong> – providing them with a genuine Living Lab to hone their professional skills and expand their portfolios while creating media for the global stage. This ensures that every dollar spent continues to regenerate twice: once in the landscape and once in the learning.
                        </p>
                    </motion.div>
                </Container>
            </section>

            <section className="py-16">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12 text-center"
                    >
                        <h2 className="text-3xl font-extrabold sm:text-4xl" style={{ color: colors.navy }}>
                            Why Storytelling Matters
                        </h2>
                    </motion.div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {whyStorytellingMatters.map((item, idx) => (
                            <FeatureCard key={idx} {...item} />
                        ))}
                    </div>
                </Container>
            </section>

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
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mx-auto max-w-4xl"
                        >
                            <div className="mb-8 inline-flex rounded-2xl p-4" style={{ backgroundColor: 'rgba(244, 163, 0, 0.2)' }}>
                                <Film className="h-10 w-10" style={{ color: colors.gold }} />
                            </div>

                            <p className="text-2xl font-bold italic sm:text-3xl md:text-4xl">
                                &quot;We do not just restore a lake – we pay Malawians to teach regeneration. Each story teaches others how to do the same.&quot;
                            </p>

                            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                                <PrimaryButton href="/get-involved">Get Involved</PrimaryButton>
                                <Link
                                    href="/"
                                    className="inline-flex items-center gap-2 rounded-2xl border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                                >
                                    Learn More About PD
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>

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
                            <Link className="hover:underline" href="/media">Media</Link>
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
