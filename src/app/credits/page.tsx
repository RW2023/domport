import CreditAccordion from '@/app/components/CreditAccordion';
import { credits } from '@/data/credits';

export default function CreditsPage() {
    return (
        <main className="max-w-3xl mx-auto p-6 space-y-6">
            <h1 className="text-3xl font-bold text-center">Credits</h1>
            <CreditAccordion credits={credits} />
        </main>
    );
}
