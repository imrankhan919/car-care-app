import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.05)] hover:shadow-[0_0_50px_rgba(0,0,0,0.1)] transition-all duration-300 w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mt-8 text-gray-900">
            Create Account
          </h2>
          <p className="text-gray-600 mt-2">Join AutoFix Pro today</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
              placeholder="name@company.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              className="w-4 h-4 rounded text-primary mt-1"
            />
            <span className="text-sm text-gray-600 ml-2">
              I agree to the
              <a href="#" className="text-primary hover:text-primary/80">
                Terms of Service
              </a>
              and
              <a href="#" className="text-primary hover:text-primary/80">
                Privacy Policy
              </a>
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-opacity-90 transition-all duration-300 font-medium"
          >
            Create Account
          </button>
        </form>

        <p className="text-center mt-8 text-gray-600">
          Already have an account?
          <a
            href="/login.html"
            className="text-primary hover:text-primary/80 font-medium"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
