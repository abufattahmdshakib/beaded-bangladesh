import React from "react";
import { RiListSettingsLine } from "react-icons/ri";

const FiltersSection = ({
    activeTab,
    setActiveTab,
    activeFilter,
    setActiveFilter,
    showFilters, // mobile toggle
    setShowFilters
}) => {
    const collectionButtons = ["All Items", "HOT DEALS", "EID COLLECTION", "BOISHAKHI COLLECTION"];
    const categoryButtons = ["TOP CATEGORIES", "OUR BESTSELLERS", "OUR NECKLACES", "OUR EARRINGS"];
    const buttons = activeTab === "collections" ? collectionButtons : categoryButtons;

    // Function to handle filter click
    const handleFilterClick = (btn) => {
        setActiveFilter(btn);
        // Mobile view close
        if (window.innerWidth < 768) {
            setShowFilters(false);
        }
    };

    return (
        <section
            className={`w-full mx-auto md:w-4/12 lg:w-4/12 mt-24 px-4 py-4 md:py-0 md:px-0
                fixed top-0 left-0 bg-white z-40
                h-[calc(100vh-5rem)]
                transform ${showFilters ? "translate-y-0" : "-translate-y-[calc(100%+7rem)]"}
                transition-transform duration-500 ease-in-out
                md:relative md:translate-x-0 md:translate-y-0`}
        >
            <div className="relative z-20 bg-white h-full">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="jost-font-uppercase text-[20px] lg:text-[24px] font-[400] text-[#1E1E1E]">
                        FILTERS
                    </h1>
                    {/* Mobile toggle / close button */}
                    <span className="md:hidden">
                        <button className="text-xl font-bold text-red-500" onClick={() => setShowFilters(prev => !prev)}>
                            {showFilters ? "✕" : <RiListSettingsLine size={22} />}
                        </button>
                    </span>

                    {/* Desktop icon */}
                    <span className="hidden md:block">
                        <RiListSettingsLine size={22} />
                    </span>
                </div>

                <div className="border-[2px] p-6 border-[#B7B7B7]">
                    {/* Search Box */}
                    <label className="flex justify-center items-center gap-2 w-full rounded-none border-2 border-[#B7B7B7] px-3 py-2 mt-6 mb-12">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="text" className="grow outline-none" placeholder="Search" />
                    </label>

                    {/* Collections & Categories */}
                    <div className="flex justify-between gap-2 border-b border-[#B7B7B7] mb-12">
                        <button
                            onClick={() => setActiveTab("collections")}
                            className={`jost-font-uppercase text-[16px] font-[400] pb-3 transition-all ${activeTab === "collections"
                                ? "border-b-2 border-[#1E1E1E] text-[#1E1E1E] w-38"
                                : "border-b border-transparent text-[#B7B7B7]"}`}
                        >
                            Collections
                        </button>
                        <button
                            onClick={() => setActiveTab("categories")}
                            className={`jost-font-uppercase text-[16px] font-[400] pb-3 transition-all ${activeTab === "categories"
                                ? "border-b-2 border-[#1E1E1E] text-[#1E1E1E] w-38"
                                : "border-b border-transparent text-[#B7B7B7]"}`}
                        >
                            Categories
                        </button>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex justify-center mb-5">
                        <div className="flex flex-col gap-3">
                            {buttons.map(btn => (
                                <button
                                    key={btn}
                                    onClick={() => handleFilterClick(btn)}
                                    className="jost-font-uppercase flex items-center gap-2"
                                >
                                    <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${activeFilter === btn ? "border-[#00B5A5]" : "border-[#B7B7B7]"}`}>
                                        {activeFilter === btn && <span className="w-2 h-2 rounded-full bg-[#00B5A5]"></span>}
                                    </span>
                                    {btn}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FiltersSection;
