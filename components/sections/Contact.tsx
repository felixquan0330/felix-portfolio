export default function Contact() {
  return (
    <section id="contact" className="max-w-xl mx-auto px-6 py-16 scroll-mt-20">
      <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
      <p className="text-gray-600 mb-8">Have a question or just want to say hi?</p>
      {/* your existing form JSX/logic from ContactForm — move it into a
          separate ContactForm.tsx client component since it needs "use client" */}
    </section>
  );
}