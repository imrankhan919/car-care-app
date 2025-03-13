"use client";

import { useEffect, useState } from "react";

export default function CarLoadingScreen() {
  const [progress, setProgress] = useState(0);

  // Simulate loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-full bg-blue-900 flex flex-col items-center justify-center overflow-hidden">
      {/* Loading text */}
      <h1 className="text-white text-3xl font-bold mb-10">Loading...</h1>

      {/* 3D Car using pure Tailwind */}
      <div className="relative w-64 h-32 mb-16 transform-gpu perspective-[800px] rotate-y-[15deg] animate-pulse">
        {/* Car body */}
        <div className="absolute w-64 h-16 bg-blue-500 rounded-xl bottom-0 shadow-xl transform-gpu rotate-x-[5deg]">
          {/* Car roof */}
          <div className="absolute w-40 h-12 bg-white rounded-t-xl left-12 -top-12 shadow-lg"></div>

          {/* Car windows */}
          <div className="absolute w-10 h-8 bg-blue-200 rounded-sm left-14 -top-10"></div>
          <div className="absolute w-16 h-8 bg-blue-200 rounded-sm left-26 -top-10"></div>
          <div className="absolute w-10 h-8 bg-blue-200 rounded-sm right-14 -top-10"></div>

          {/* Car lights */}
          <div className="absolute w-6 h-3 bg-amber-300 rounded-full left-1 top-6"></div>
          <div className="absolute w-6 h-3 bg-red-500 rounded-full right-1 top-6"></div>

          {/* Car grille */}
          <div className="absolute w-12 h-4 bg-gray-200 rounded-sm left-26 top-10"></div>
        </div>

        {/* Wheels */}
        <div className="absolute w-12 h-12 bg-gray-800 rounded-full left-10 bottom-0 shadow-md border-4 border-gray-300">
          <div className="absolute w-4 h-4 bg-gray-300 rounded-full left-3 top-3"></div>
        </div>
        <div className="absolute w-12 h-12 bg-gray-800 rounded-full right-10 bottom-0 shadow-md border-4 border-gray-300">
          <div className="absolute w-4 h-4 bg-gray-300 rounded-full left-3 top-3"></div>
        </div>

        {/* Road/shadow */}
        <div className="absolute w-full h-2 bg-blue-950 rounded-full bottom-0 blur-sm"></div>
      </div>

      {/* Progress bar */}
      <div className="w-64 h-3 bg-blue-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-white rounded-full transition-all duration-200 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-blue-200 mt-2">{progress}%</p>
    </div>
  );
}
