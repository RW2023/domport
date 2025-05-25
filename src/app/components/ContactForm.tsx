// components/ContactForm.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, MessageSquareText } from 'lucide-react';

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    return (
        <motion.form
            onSubmit={() => setSubmitted(true)}
            method="POST"
            action={endpoint}
            className="bg-[var(--card-bg)] p-8 md:p-10 rounded-2xl shadow-lg border border-[var(--border)] space-y-6 w-full max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            {submitted && (
                <div className="alert alert-success shadow-md">
                    <span>Thanks! Your message has been sent.</span>
                </div>
            )}

            <div className="form-control">
                <label htmlFor="name" className="label">
                    <span className="label-text font-semibold flex items-center gap-2">
                        <User size={16} /> Your Name
                    </span>
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="input input-bordered"
                />
            </div>

            <div className="form-control">
                <label htmlFor="email" className="label">
                    <span className="label-text font-semibold flex items-center gap-2">
                        <Mail size={16} /> Your Email
                    </span>
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="input input-bordered"
                />
            </div>

            <div className="form-control">
                <label htmlFor="message" className="label">
                    <span className="label-text font-semibold flex items-center gap-2">
                        <MessageSquareText size={16} /> Message
                    </span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="textarea textarea-bordered"
                ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-full">
                Send Message
            </button>
        </motion.form>
    );
}
