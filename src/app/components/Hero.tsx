// File: src/app/components/Hero.tsx

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section
            className="relative w-full py-20 bg-[var(--background)] text-[var(--foreground)] overflow-hidden"
        >
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <div className="inline-block rounded-full overflow-hidden shadow-lg">
                        <Image
                            src="/profile/dominicBeach.jpg"
                            alt="Dominic headshot"
                            width={180}
                            height={180}
                            className="rounded-full object-cover"
                            priority
                        />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold font-heading">
                        Dominic Wilson
                    </h1>
                    <p className="text-xl text-[var(--color-cambridge)]">
                        Child Actor & Model
                    </p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <Link href="/gallery">
                            <button className="btn btn-primary btn-wide">View Portfolio</button>
                        </Link>
                        <a
                            href="/Dominic_Wilson_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline btn-wide"
                        >
                            Download Résumé
                        </a>
                        <Link href="/contact">
                            <button className="btn btn-accent btn-wide">Contact</button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
