import React from "react";

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="text-gray-600 mt-4">
            Comprehensive auto care solutions for your vehicle
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.05)] hover:shadow-[0_0_50px_rgba(0,0,0,0.1)] transition-all duration-300">
            <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Diagnostics</h3>
            <p className="text-gray-600">
              Advanced computer diagnostics to identify issues accurately
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.05)] hover:shadow-[0_0_50px_rgba(0,0,0,0.1)] transition-all duration-300">
            <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Maintenance</h3>
            <p className="text-gray-600">
              Regular service to keep your vehicle in optimal condition
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.05)] hover:shadow-[0_0_50px_rgba(0,0,0,0.1)] transition-all duration-300">
            <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Repairs</h3>
            <p className="text-gray-600">
              Expert repairs for all makes and models
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
