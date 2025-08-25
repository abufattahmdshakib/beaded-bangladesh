import React, { useState } from "react";
import FiltersSection from "./FiltersSection";
import ProductsSection from "./ProductsSection";

const ViewShop = () => {
    const [activeTab, setActiveTab] = useState("collections");
    const [activeFilter, setActiveFilter] = useState("All Items");

    return (
        <div className="border-t-[2px] border-gray-300">
            <div className="w-11/12 mx-auto mt-10 mb-16 flex gap-6">
                <FiltersSection
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                />
                <ProductsSection
                    activeTab={activeTab}
                    activeFilter={activeFilter}
                />
            </div>
        </div>
    );
};

export default ViewShop;
