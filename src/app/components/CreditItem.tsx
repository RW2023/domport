// components/CreditItem.tsx
import { Credit } from '@/data/credits';

type Props = { credit: Credit };

export default function CreditItem({ credit }: Props) {
    return (
        <div className="space-y-2">
            <img
                src={credit.image}
                alt={credit.title}
                className="w-full h-auto object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold">{credit.title}</h3>
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
