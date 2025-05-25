// components/CreditAccordion.tsx
'use client';

import { useState } from 'react';
import { Credit } from '@/data/credits';
import CreditGroup from './CreditGroup';

type Props = {
    credits: Credit[];
};

export default function CreditAccordion({ credits }: Props) {
    const grouped = credits.reduce<Record<string, Credit[]>>((acc, credit) => {
        (acc[credit.type] ||= []).push(credit);
        return acc;
    }, {});
    const [open, setOpen] = useState<string | null>(null);
    const toggle = (type: string) => setOpen(prev => (prev === type ? null : type));

    return (
        <div className="space-y-4">
            {Object.entries(grouped).map(([type, items]) => (
                <CreditGroup
                    key={type}
                    type={type}
                    items={items}
                    isOpen={open === type}
                    onToggle={() => toggle(type)}
                />
            ))}
        </div>
    );
}
