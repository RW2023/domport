// app/contact/page.tsx
import ContactForm from '@/app/components/ContactForm';

export default function ContactPage() {
    return (
        <section className="py-12 px-4 md:px-8 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-center">Contact</h1>
            <p className="text-center mb-8 text-lg text-[var(--muted)]">
                Interested in working with Dominic? Reach out below.
            </p>
            <ContactForm />
        </section>
    );
}
