// components/CreditsGrid.tsx
'use client';

import { Credit } from '@/data/credits';
import CreditCard from './CreditCard';

type Props = {
    credits: Credit[];
};

export default function CreditsGrid({ credits }: Props) {
    return (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {credits.map((credit, idx) => (
                <CreditCard key={idx} credit={credit} />
            ))}
        </div>
    );
}
