// File: src/app/credits/page.tsx

import CreditAccordion from '@/app/components/CreditAccordion';
import { credits } from '@/data/credits';

export default function CreditsPage() {
    return (
        <main className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Credits</h1>
            <CreditAccordion credits={credits} />
        </main>
    );
}
