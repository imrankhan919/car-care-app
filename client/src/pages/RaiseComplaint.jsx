import React from "react";

const RaiseComplaint = () => {
  return (
    <div class="min-h-screen flex items-center justify-center p-4">
      <div class="bg-white p-8 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.05)] hover:shadow-[0_0_50px_rgba(0,0,0,0.1)] transition-all duration-300 w-full max-w-2xl">
        <div class="text-center mb-8">
          <h2 class="text-2xl font-bold mt-8 text-gray-900">Service Request</h2>
          <p class="text-gray-600 mt-2">
            Fill out the form below to request a service
          </p>
        </div>

        <form class="space-y-6">
          <div>
            <label class="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              class="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label class="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              class="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
              placeholder="name@example.com"
            />
          </div>

          <div>
            <label class="block text-gray-700 font-medium mb-2">
              Car Model
            </label>
            <select class="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-white">
              <option value="">Select your car model</option>
              <option value="toyota">Toyota</option>
              <option value="honda">Honda</option>
              <option value="ford">Ford</option>
              <option value="bmw">BMW</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
              <option value="volkswagen">Volkswagen</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label class="block text-gray-700 font-medium mb-2">
              Registration Number
            </label>
            <input
              type="text"
              class="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
              placeholder="e.g., ABC-123"
            />
          </div>

          <div>
            <label class="block text-gray-700 font-medium mb-2">
              Vehicle Photo URL
            </label>
            <input
              type="url"
              class="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
              placeholder="https://example.com/car-photo.jpg"
            />
          </div>

          <div>
            <label class="block text-gray-700 font-medium mb-2">
              Complaint/Issue Description
            </label>
            <textarea
              rows="4"
              class="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
              placeholder="Please describe the issue with your vehicle..."
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-all duration-300 font-medium"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default RaiseComplaint;
