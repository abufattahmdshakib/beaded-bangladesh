import React, { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const MyOrders = () => {
  const [activeTab, setActiveTab] = useState("processing");

  const orders = [
    { id: "#VXD69420", status: "pending", date: "29th March, 2022" },
    { id: "#VXD69421", status: "pending", date: "30th March, 2022" },
    { id: "#VXD69422", status: "pending", date: "31st March, 2022" },
  ];

  const tabs = [
    { key: "processing", label: "Processing", count: 3 },
    { key: "shipped", label: "Shipped", count: 3 },
    { key: "completed", label: "Completed", count: 3 },
    { key: "canceled", label: "Canceled", count: 3 },
  ];

  const handleTabClick = (key) => {
    setActiveTab((prev) => (prev === key ? "" : key)); // toggle same tab
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-200">
      {/* Left Navbar */}
      <div className="w-full md:w-60 border-1 border-gray-300 flex flex-col gap-0 md:gap-2 relative">
        {tabs.map((tab) => (
          <div key={tab.key} className="relative">
            <button
              onClick={() => handleTabClick(tab.key)}
              className={`w-full border md:border-hidden py-2 px-4 text-left font-[400] jost-font-uppercase text-[14px] flex justify-between items-center transition-all ${
                activeTab === tab.key
                  ? "bg-[#00B5A5] text-white"
                  : "text-[#1E1E1E]"
              }`}
            >
              {tab.label} ({tab.count})
              <span
                className={`md:hidden transition-transform duration-300 ${
                  activeTab === tab.key ? "rotate-180" : "rotate-0"
                }`}
              >
                <ChevronDown size={16} />
              </span>
            </button>

            {/* Mobile: Section 2 under clicked button */}
            {activeTab === tab.key && (
              <div className="md:hidden bg-gray-100 p-4 border-1 border-gray-300 mt-1 animate-slideDown">
                {orders.map((order, idx) => (
                  <div
                    key={idx}
                    className="p-4 flex flex-col gap-2 border-b border-gray-200 last:border-b-0"
                  >
                    <p className="font-[500] jost-font-uppercase text-[#9C9C9C] text-[14px]">
                      Order ID:{" "}
                      <span className="font-[400] text-[#1E1E1E]">{order.id}</span>
                    </p>
                    <p className="font-[500] jost-font-uppercase text-[#9C9C9C] text-[14px]">
                      Order STATUS:{" "}
                      <span className="font-[500] p-1 bg-[#edd3ad] text-[#E1911B]">
                        {order.status}
                      </span>
                    </p>
                    <button className="text-[#1E1E1E] font-[400] jost-font-uppercase text-[14px] w-max flex items-center gap-2">
                      VIEW DETAILS <ArrowRight size={16} />
                    </button>
                    <div className="text-[#7D7D7D] font-[500] text-[14px] mt-2">
                      {order.date}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop Right Content */}
      <div className="hidden md:flex flex-1 flex-col gap-4 p-4 md:p-8">
        {orders.map((order, idx) => (
          <div
            key={idx}
            className="p-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4"
          >
            <div className="flex flex-col gap-2 md:w-2/3">
              <p className="font-[500] jost-font-uppercase text-[#9C9C9C] text-[14px]">
                Order ID: <span className="font-[400] text-[#1E1E1E]">{order.id}</span>
              </p>
              <p className="font-[500] jost-font-uppercase text-[#9C9C9C] text-[14px]">
                Order STATUS:{" "}
                <span className="font-[500] p-1 bg-[#edd3ad] text-[#E1911B]">{order.status}</span>
              </p>
              <button className="text-[#1E1E1E] font-[400] jost-font-uppercase text-[14px] w-max flex items-center gap-2 transition">
                VIEW DETAILS <ArrowRight size={16} />
              </button>
            </div>
            <div className="flex justify-end md:w-1/3 text-[#7D7D7D] font-[500] text-[14px] mt-2 md:mt-0">
              {order.date}
            </div>
          </div>
        ))}
      </div>

      {/* Tailwind Animation */}
      <style>
        {`
          @keyframes slideDown {
            0% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slideDown {
            animation: slideDown 0.3s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default MyOrders;
