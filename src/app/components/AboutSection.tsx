'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutSection() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="container mx-auto px-6 py-16 max-w-4xl"
        >
            <h1 className="text-4xl font-bold mb-8 text-center font-heading text-gray-900 dark:text-white">
                About Dominic
            </h1>

            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                    <Image
                        src="/profile/dominicBeach.jpg" alt="Dominic smiling"
                        width={300}
                        height={400}
                        className="rounded-xl shadow-lg object-cover"
                    />
                </div>

                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p>
                        Dominic Wilson is a charismatic young actor and model currently based in London, Ontario. At just [Age], he has already landed several roles in film and television, showcasing his natural talent and on-screen presence.
                    </p>

                    <p>
                        Dominic is represented by Bon-Ker and is known for his professionalism, adaptability, and infectious enthusiasm on set.
                    </p>

                    <p>
                        When he&apos;s not performing, Dominic enjoys [Fun Hobby #1], [Fun Hobby #2], and spending time with his family and pets. He brings joy and dedication to everything he does — both in front of the camera and behind the scenes.
                    </p>
                </div>
            </div>
        </motion.section>
    );
}
