import ContactForm from "../component/ContactForm";

export default function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
      <p className="text-lg text-gray-600 mb-10">
        Have a question or want to work with us? Fill out the form below, and
        we’ll get back to you as soon as possible.
      </p>
      <ContactForm />
    </section>
  );
}
