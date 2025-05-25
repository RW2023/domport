// components/CreditGroup.tsx
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
        <div className="border rounded-lg overflow-hidden">
            <button
                className="w-full flex justify-between items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 transition"
                onClick={onToggle}
            >
                <span className="font-semibold">{type}</span>
                <span className="text-xl font-bold">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
                <div className="p-4 space-y-6">
                    {items.map((credit, index) => (
                        <CreditItem key={index} credit={credit} />
                    ))}
                </div>
            )}
        </div>
    );
}
