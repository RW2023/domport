// app/credits/page.tsx
'use client';

import { useState } from 'react';
import { credits, Credit } from '@/data/credits';

const grouped = credits.reduce<Record<string, Credit[]>>((acc, credit) => {
    if (!acc[credit.type]) acc[credit.type] = [];
    acc[credit.type].push(credit);
    return acc;
}, {});

const CreditAccordion = () => {
    const [openType, setOpenType] = useState<string | null>(null);

    const toggle = (type: string) => {
        setOpenType(prev => (prev === type ? null : type));
    };

    return (
        <main className="max-w-3xl mx-auto p-6 space-y-6">
            <h1 className="text-3xl font-bold text-center">Credits</h1>

            {Object.entries(grouped).map(([type, items]) => (
                <div key={type} className="border rounded-lg overflow-hidden shadow-md">
                    <button
                        onClick={() => toggle(type)}
                        className="w-full text-left px-6 py-4 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition"
                    >
                        <h2 className="text-xl font-semibold">{type}</h2>
                    </button>

                    {openType === type && (
                        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                            {items.map((item, index) => (
                                <li key={index} className="px-6 py-4 bg-white dark:bg-gray-900">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                                        <div>
                                            <p className="text-lg font-medium">{item.title}</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                {item.role} &mdash; {item.company} ({item.year})
                                            </p>
                                        </div>
                                        {item.link && (
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-2 sm:mt-0 text-sm text-blue-600 hover:underline"
                                            >
                                                View Link
                                            </a>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </main>
    );
};

export default CreditAccordion;
