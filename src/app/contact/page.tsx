import ContactForm from '../components/ContactForm';
import PageWrapper from '../components/PageWrapper';

export default function ContactPage() {
    return (
        <PageWrapper>
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-10">
                    <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Whether you&apos;re casting a role or booking for a shoot, feel free to reach out using the form below.
                    </p>
                </div>
                <ContactForm />
            </section>
        </PageWrapper>
    );
}
