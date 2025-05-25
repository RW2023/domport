// File: src/app/gallery/GalleryGrid.tsx

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export type GalleryImage = {
    src: string;
    alt: string;
    category: string;
};

type Props = {
    images: GalleryImage[];
};

export default function GalleryGrid({ images }: Props) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <AnimatePresence>
                {images.map(({ src, alt }, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden rounded-lg shadow-md"
                    >
                        <Image
                            src={src}
                            alt={alt}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}
