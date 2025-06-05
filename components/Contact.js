"use client";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-16 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl  text-outline-blue font-semibold text-[var(--primary-blue)]">
          Get In Touch
        </h2>
        <p className="text-gray-700 text-outline text-lg">
          Have questions or need support? Reach out and we’ll get back to you as soon as possible.
        </p>
        <form className="mt-8 space-y-4 text-left">
          <div>
            <label className="block mb-2 font-medium text-outline-blue">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--secondary-gold)]"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium text-outline-blue">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--secondary-gold)]"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium text-outline-blue">Message</label>
            <textarea
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--secondary-gold)]"
              rows="5"
              placeholder="How can we help?"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[var(--primary-blue)] bg-gray-900 text-white  text-outline-blue font-semibold px-8 py-3 rounded-lg hover:bg-opacity-90 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
