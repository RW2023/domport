import { Credit } from '@/data/credits';

type Props = {
    credit: Credit;
};

export default function CreditItem({ credit }: Props) {
    return (
        <li className="relative h-48 sm:h-56 md:h-64 overflow-hidden rounded-lg shadow-lg group">
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url(${credit.image})` }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-70 transition" />

            <div className="relative z-10 h-full w-full flex flex-col justify-between p-4 text-white">
                <div>
                    <h3 className="text-xl font-semibold">{credit.title}</h3>
                    <p className="text-sm">
                        {credit.role} &mdash; {credit.company} ({credit.year})
                    </p>
                </div>
                {credit.link && (
                    <a
                        href={credit.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm underline text-blue-200 hover:text-blue-300"
                    >
                        View Link
                    </a>
                )}
            </div>
        </li>
    );
}
