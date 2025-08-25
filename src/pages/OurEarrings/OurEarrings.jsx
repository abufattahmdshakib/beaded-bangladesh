import React, { useState, useEffect } from 'react';
import { RiArrowLeftWideLine, RiArrowRightWideLine } from "react-icons/ri";
import products from "../../../src/products";


const OurEarrings = () => {
    const braceletProducts = products.filter(item => item.name.toUpperCase() === "EARRINGS");

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(4);

    // Update cardsPerView based on window width
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setCardsPerView(4); // lg
            else if (window.innerWidth >= 768) setCardsPerView(3); // md
            else setCardsPerView(2); // sm
        };
        handleResize(); // initial check
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
        <div className="relative ">
            <h1 className='jost-font-uppercase font-[400] text-[24px] lg:text-[38px] text-[#1E1E1E] text-center mb-8'>
                OUR NECKLACES
            </h1>

            <div className="flex items-center justify-center gap-4">
                {/* Animated cards container */}
                <div className="overflow-hidden w-full">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${(100 / cardsPerView) * currentIndex}%)` }}
                    >
                        {braceletProducts.map((item) => (
                            <div
                                key={item.id}
                                className="flex-none mx-2"
                                style={{ width: `calc(100% / ${cardsPerView} - 0.5rem)` }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-[250px] md:h-[300px] lg:h-[350px] object-cover"
                                />
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
                        className="text-black border border-black rounded-full p-2 md:p-2 hover:scale-110 transition"
                    >
                        <RiArrowLeftWideLine size={20} md:size={28} />
                    </button>
                </div>

                <div className="flex justify-center mt-4 gap-2 flex-wrap">
                    {Array.from({ length: Math.min(4, Math.ceil(braceletProducts.length / cardsPerView)) }).map((_, idx) => (
                        <div
                            key={idx}
                            className={`h-1 rounded-full ${Math.floor(currentIndex / cardsPerView) === idx ? "bg-[#00B5A5] w-8 md:w-12" : "bg-gray-400 w-8 md:w-12"}`}
                        ></div>
                    ))}
                </div>

                <div className='flex justify-end items-center mt-2 md:mt-0'>
                    <button
                        onClick={nextSlide}
                        className="text-black border border-black rounded-full p-2 md:p-2 hover:scale-110 transition"
                    >
                        <RiArrowRightWideLine size={20} md:size={28} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OurEarrings;