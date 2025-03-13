import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 pt-20 pb-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Expert Car Care.
            <br />
            Modern Service.
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Experience premium auto repair with our certified technicians and
            state-of-the-art facilities.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/car/raise-complaint"
              className="text-white px-6 py-3 rounded-xl hover:bg-opacity-90 transition-all duration-300 font-medium bg-blue-500"
            >
              Raise Complaint
            </Link>
            <Link
              to="/car/all-complaints"
              className="bg-white text-primary border-2 border-primary px-6 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium bg-gray-400"
            >
              All Complaints
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
