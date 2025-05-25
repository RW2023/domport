// File: src/app/components/CreditGroup.tsx

'use client';

import { Credit } from '@/data/credits';
import CreditItem from './CreditItem';

type Props = {
    type: string;
    items: Credit[];
    isOpen: boolean;
    onToggle: () => void;
};

export default function CreditGroup({ type, items, isOpen, onToggle }: Props) {
    return (
        <div className="border border-cambridge rounded-lg overflow-hidden">
            <button
                className="w-full flex justify-between items-center px-4 py-2 bg-sage hover:bg-cambridge hover:text-white transition"
                onClick={onToggle}
            >
                <span className="font-semibold text-lg">{type}</span>
                <span className="text-xl font-bold">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
                <div className="p-4 space-y-6 bg-background">
                    {items.map((credit, index) => (
                        <CreditItem key={index} credit={credit} />
                    ))}
                </div>
            )}
        </div>
    );
}
