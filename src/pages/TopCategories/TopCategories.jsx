import React from 'react';
import products from "../../../src/products";

const TopCategories = () => {
    const filteredProducts = products.filter(item => item.id >= 5 && item.id <= 8);

    return (
        <div>
            <div>
                <h1 className='jost-font-uppercase font-[400] text-[24px] lg:text-[38px] text-[#1E1E1E] text-center mb-12 md:mb-10 lg:mb-4'>TOP CATEGORIES</h1>
                <p className='jost-font-uppercase font-[400] text-[16px] text-[#1E1E1E] lg:block hidden text-center mb-12 lg:w-[780px] mx-auto px-2'>
                    Luxury bead accessories, handcrafted with beads from around the world!
                    Our selection of fine jewelry features timeless designs in a variety of styles,
                    all created with the highest quality materials.
                </p>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredProducts.map((item) => (
                    <div 
                        key={item.id} 
                        className="relative group w-full"
                    >
                        {/* Image */}
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-[380px] mx-auto"
                        />

                        {/* Black Overlay */}
                        <div className="absolute inset-0 bg-black/50"></div>

                        {/* Text */}
                        <h2 className="jost-font-uppercase absolute bottom-7 left-1/2 -translate-x-1/2 text-white font-[500] text-[16px] md:text-[20px] lg:text[24px]">
                            {item.name}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopCategories;
