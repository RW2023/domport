// components/CreditCard.tsx
'use client';

import Image from 'next/image';
import { Credit } from '@/data/credits';

type Props = {
    credit: Credit;
};

export default function CreditCard({ credit }: Props) {
    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <Image
                src={credit.image}
                alt={credit.title}
                width={400}
                height={250}
                className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30" />

            <div className="relative p-4 bg-white">
                <h3 className="text-lg font-semibold mb-1">{credit.title}</h3>
                <p className="text-sm text-gray-600 mb-2">
                    {credit.role} — {credit.company} ({credit.year})
                </p>
                {credit.link && (
                    <a
                        href={credit.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        View Link
                    </a>
                )}
            </div>
        </div>
    );
}
