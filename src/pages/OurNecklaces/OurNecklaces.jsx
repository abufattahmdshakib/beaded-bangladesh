import React, { useState, useEffect } from 'react';
import { RiArrowLeftWideLine, RiArrowRightWideLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom"; // ✅ Added navigation
import products from "../../../src/products";

const OurNecklaces = () => {
    const navigate = useNavigate(); // ✅ Added
    const braceletProducts = products.filter(item => item.name.toUpperCase() === "NECKLACES");

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setCardsPerView(4);
            else if (window.innerWidth >= 768) setCardsPerView(3);
            else setCardsPerView(2);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prev) => {
            const newIndex = prev - cardsPerView;
            return newIndex < 0 ? Math.max(braceletProducts.length - cardsPerView, 0) : newIndex;
        });
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => {
            const newIndex = prev + cardsPerView;
            return newIndex >= braceletProducts.length ? 0 : newIndex;
        });
    };

    return (
        <div className="relative py-10 rounded-lg">
            <h1 className='jost-font-uppercase font-[400] text-[24px] lg:text-[38px] text-[#1E1E1E] text-center mb-8'>
                OUR NECKLACES
            </h1>

            <div className="flex items-center justify-center gap-4">
                <div className="overflow-hidden w-full">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${(100 / cardsPerView) * currentIndex}%)` }}
                    >
                        {braceletProducts.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => navigate(`/ViewShop/${item.id}`)} // ✅ Click navigation
                                className="flex-none mx-2 group cursor-pointer"
                                style={{ width: `calc(100% / ${cardsPerView} - 0.5rem)` }}
                            >
                                <div className="relative overflow-hidden rounded-lg">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-[250px] md:h-[300px] lg:h-[350px] object-cover group-hover:scale-105 transition duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition"></div>
                                </div>
                                <div className="text-center mt-4">
                                    <h2 className="jost-font-uppercase text-[#6D6D6D] font-[500] text-[12px] lg:text-[14px]">
                                        {item.name}
                                    </h2>
                                    <p className='jost-font-uppercase text-black text-[14px] lg:text-[16px] my-2'>{item.title}</p>
                                    <p className="jost-font-uppercase text-[#00B5A5] font-semibold text-[16px] lg:text-[23px]">{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div className='flex justify-center gap-10 md:gap-38 items-center mt-10 lg:mt-14'>
                <div className='flex justify-start items-center mt-2 md:mt-0'>
                    <button
                        onClick={prevSlide}
                        className="text-black cursor-pointer border border-black rounded-full p-2 md:p-2 hover:bg-[#00B5A5] hover:text-white transition"
                    >
                        <RiArrowLeftWideLine size={20} md:size={28} />
                    </button>
                </div>

                <div className="flex justify-center mt-4 gap-2 flex-wrap">
                    {Array.from({ length: Math.min(4, Math.ceil(braceletProducts.length / cardsPerView)) }).map((_, idx) => (
                        <div
                            key={idx}
                            className={`h-1 rounded-full transition-all ${Math.floor(currentIndex / cardsPerView) === idx ? "bg-[#00B5A5] w-8 md:w-12" : "bg-gray-300 w-8 md:w-12"}`}
                        ></div>
                    ))}
                </div>

                <div className='flex justify-end items-center mt-2 md:mt-0'>
                    <button
                        onClick={nextSlide}
                        className="text-black cursor-pointer border border-black rounded-full p-2 md:p-2 hover:bg-[#00B5A5] hover:text-white transition"
                    >
                        <RiArrowRightWideLine size={20} md:size={28} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OurNecklaces;
