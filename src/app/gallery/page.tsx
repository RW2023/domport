// File: src/app/gallery/page.tsx

'use client';

import { useState } from 'react';
import GalleryGrid from '@/app/components/Gallery/GalleryGrid';
import CategoryFilter from '../components/Gallery/CategoryFilter';
import { images, categories } from '@/data/galleryData';

export default function GalleryPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredImages =
        selectedCategory === 'All'
            ? images
            : images.filter((img) => img.category === selectedCategory);

    return (
        <main className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-center mb-10 text-[var(--foreground)] font-heading">
                Photo Gallery
            </h1>

            <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />

            <GalleryGrid images={filteredImages} />
        </main>
    );
}
