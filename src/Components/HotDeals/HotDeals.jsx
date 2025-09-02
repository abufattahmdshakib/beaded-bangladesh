import React from 'react';

const HotDeals = () => {
  return (
    <div className="border-t-1 border-[#7D7D7D] px-4">
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
        {/* Heading with animation */}
        <h1
          className="jost-font-uppercase text-3xl md:text-4xl font-[600] text-[#1E1E1E] mb-3 opacity-0 animate-fadeInUp"
          style={{ animationDelay: '0.2s' }}
        >
          🔥 Hot Deals Coming Soon
        </h1>

        {/* Subtitle with staggered animation */}
        <p
          className="jost-font-capitalize text-gray-600 text-lg mb-6 opacity-0 animate-fadeInUp"
          style={{ animationDelay: '0.4s' }}
        >
          Get ready for amazing discounts! Our exclusive Hot Deals are coming soon. Stay tuned!
        </p>
      </div>

      {/* Inline CSS for fadeInUp animation */}
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease forwards;
          }
        `}
      </style>
    </div>
  );
};

export default HotDeals;
