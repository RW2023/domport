// File: src/app/gallery/CategoryFilter.tsx

'use client';

type Props = {
    categories: string[];
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
};

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }: Props) {
    return (
        <div className="flex justify-center gap-4 flex-wrap mb-10">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => onSelectCategory(cat)}
                    className={`btn ${selectedCategory === cat ? 'btn-primary' : 'btn-outline'}`}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
}
