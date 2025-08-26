import React, { useState } from "react";
import FiltersSection from "./FiltersSection";
import ProductsSection from "./ProductsSection";

const ViewShop = () => {
    const [activeTab, setActiveTab] = useState("collections");
    const [activeFilter, setActiveFilter] = useState("All Items");

    // Mobile filter toggle
    const [showFilters, setShowFilters] = useState(false);

    return (
        <div className="border-t-[2px] border-gray-300">
            <div className="w-11/12 mx-auto mt-10 mb-16 flex gap-8 relative">
                {/* Filters Section */}
                <FiltersSection
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                    showFilters={showFilters} // pass toggle state
                    setShowFilters={setShowFilters} // allow closing
                />

                {/* Products Section */}
                <ProductsSection
                    activeTab={activeTab}
                    activeFilter={activeFilter}
                    setShowFilters={setShowFilters} // allow mobile button toggle
                />
            </div>
        </div>
    );
};

export default ViewShop;
