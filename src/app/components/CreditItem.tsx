import { Credit } from '@/data/credits';

type Props = {
    credit: Credit;
};

export default function CreditItem({ credit }: Props) {
    return (
        <li className="px-6 py-4 bg-white dark:bg-gray-900">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div>
                    <p className="text-lg font-medium">{credit.title}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        {credit.role} &mdash; {credit.company} ({credit.year})
                    </p>
                </div>
                {credit.link && (
                    <a
                        href={credit.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 sm:mt-0 text-sm text-blue-600 hover:underline"
                    >
                        View Link
                    </a>
                )}
            </div>
        </li>
    );
}
