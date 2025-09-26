// src/Components/ViewShop/SortByButton.jsx
import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const SortByButton = ({ sortOption, setSortOption }) => {
  const [open, setOpen] = useState(false);
  const options = ["Newest", "Best Selling", "Price: Low to High", "Price: High to Low"];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex jost-font-capitalize cursor-pointer items-center justify-between w-40 px-4 py-2 border border-gray-300 bg-white text-[#7D7D7D] hover:border-[#00B5A5] focus:outline-none"
      >
        {sortOption || "Sort by"}
        <RiArrowDownSLine className="ml-2 text-xl" />
      </button>

      {open && (
        <div className="absolute mt-2 w-40 bg-white border border-gray-200 shadow-lg z-10 jost-font-capitalize">
          {options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSortOption(option);
                setOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-sm text-[#1E1E1E] cursor-pointer hover:bg-gray-100"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortByButton;
