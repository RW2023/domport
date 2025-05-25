// File: src/app/components/CreditItem.tsx

'use client';

import Image from 'next/image';
import { Credit } from '@/data/credits';

type Props = { credit: Credit };

export default function CreditItem({ credit }: Props) {
    return (
        <div className="space-y-2">
            <Image
                src={credit.image}
                alt={credit.title}
                width={640}
                height={360}
                className="w-full h-auto object-cover rounded-md shadow-sm"
            />
            <h3 className="text-lg font-semibold text-foreground">{credit.title}</h3>
            <p className="text-sm text-gray-600">
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
    );
}
