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
        <div className="border rounded-lg overflow-hidden shadow">
            <button
                onClick={onToggle}
                className="w-full text-left px-6 py-4 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition"
            >
                <h2 className="text-xl font-semibold">{type}</h2>
            </button>

            {isOpen && (
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {items.map((item, index) => (
                        <CreditItem key={index} credit={item} />
                    ))}
                </ul>
            )}
        </div>
    );
}
