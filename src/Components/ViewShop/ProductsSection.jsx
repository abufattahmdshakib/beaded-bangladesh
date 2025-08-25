import React, { useEffect, useState } from "react";
import SortByButton from "./SortByButton"; // Import your SortByButton component
import productsData from "../../../src/products";

const ProductsSection = ({ activeTab, activeFilter }) => {
    const [sortOption, setSortOption] = useState(""); // Default "Sort By"
    const [displayProducts, setDisplayProducts] = useState([...productsData]);

    useEffect(() => {
        let filtered = [...productsData];

        // Collections filter
        if (activeTab === "collections") {
            if (activeFilter === "HOT DEALS") filtered = [];
            else if (activeFilter === "EID COLLECTION") filtered = [];
            else if (activeFilter === "BOISHAKHI COLLECTION") filtered = filtered.filter(p => p.name === "BRACELET");
        }

        // Categories filter
        if (activeTab === "categories") {
            if (activeFilter === "TOP CATEGORIES") filtered = filtered.filter(p => [5, 6, 7, 8].includes(p.id));
            else if (activeFilter === "OUR BESTSELLERS") filtered = filtered.filter(p => p.sales >= 100);
            else if (activeFilter === "OUR NECKLACES") filtered = filtered.filter(p => p.name === "NECKLACES");
            else if (activeFilter === "OUR EARRINGS") filtered = filtered.filter(p => p.name === "EARRINGS");
        }

        // Sorting logic
        if (sortOption === "Newest") {
            filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        } else if (sortOption === "Best Selling") {
            filtered.sort((a, b) => b.sales - a.sales);
        } else if (sortOption === "Price: Low to High") {
            filtered.sort((a, b) => a.priceNumber - b.priceNumber);
        } else if (sortOption === "Price: High to Low") {
            filtered.sort((a, b) => b.priceNumber - a.priceNumber);
        }

        setDisplayProducts(filtered);
    }, [activeFilter, activeTab, sortOption]);

    return (
        <section className="w-9/12">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="jost-font-uppercase text-[48px] font-[400] text-[#1E1E1E]">Shop</h2>
                    <p className="text-[18px] jost-font-uppercase text-[#6D6D6D]">Showing {displayProducts.length} Items</p>
                </div>
                <SortByButton sortOption={sortOption} setSortOption={setSortOption} />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3  gap-6">
                {displayProducts.length > 0 ? (
                    displayProducts.map(product => (
                        <div
                            key={product.id}
                        >
                            <img
                                src={product.image}
                                alt={product.title}
                                 className="w-full h-[250px] md:h-[300px] lg:h-[350px] object-cover"
                            />
                            <h3 className="jost-font-uppercase text-[#6D6D6D] font-[500] text-[12px] lg:text-[14px] text-center">{product.name}</h3>
                            <p className="jost-font-uppercase text-black text-[14px] lg:text-[16px] my-2 text-center">{product.title}</p>
                            <p className="jost-font-uppercase text-[#00B5A5] font-semibold text-[16px] lg:text-[23px] text-center">{product.price}</p>
                        </div>
                    ))
                ) : (
                    <div className="jost-font-uppercase col-span-3 text-center text-gray-500 text-lg py-10">
                        No products found.
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductsSection;
