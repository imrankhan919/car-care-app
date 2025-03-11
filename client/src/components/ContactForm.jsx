import React from "react";

const ContactForm = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-16">
            Get in Touch
          </h2>
          <div className="bg-white p-8 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.05)] hover:shadow-[0_0_50px_rgba(0,0,0,0.1)] transition-all duration-300">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your message"
                  rows="4"
                  className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white px-6 py-3 rounded-xl hover:bg-opacity-90 transition-all duration-300 font-medium bg-blue-500 w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
