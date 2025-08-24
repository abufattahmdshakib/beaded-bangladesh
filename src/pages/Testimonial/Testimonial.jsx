import React, { useState } from "react";
import { RiArrowLeftWideLine, RiArrowRightWideLine } from "react-icons/ri";

// Images import
import mainImg1 from "../../../src/assets/Frame 12.png";
import mainImg2 from "../../../src/assets/Frame 12.png";
import mainImg3 from "../../../src/assets/Frame 12.png";

import subImg1 from "../../../src/assets/format_quote_FILL1_wght400_GRAD0_opsz48 1.png";
import subImg2 from "../../../src/assets/format_quote_FILL1_wght400_GRAD0_opsz48 1.png";
import subImg3 from "../../../src/assets/format_quote_FILL1_wght400_GRAD0_opsz48 1.png";

// JSON data
const testimonial = [
    {
        thumbnail: subImg1,
        details: "Lorem ipsum dolor sit amet consectetur. Purus elementum consequat malesuada amet turpis mollis etiam non. Lobortis molestie sit lacinia facilisi in cras. Consectetur bibendum dictum quam id volutpat aliquet tortor leo. Velit metus feugiat sapien vitae id tempus vitae vitae. Urna enim faucibus sapien consequat venenatis id sit. Amet eget nunc porttitor justo odio volutpat purus nibh aliquet. Amet in sed nulla neque libero.",
        title: "Ava Nicholls 1",
        mainImage: mainImg1,
    },
    {
        thumbnail: subImg2,
        details: "Lorem ipsum dolor sit amet consectetur. Purus elementum consequat malesuada amet turpis mollis etiam non. Lobortis molestie sit lacinia facilisi in cras. Consectetur bibendum dictum quam id volutpat aliquet tortor leo. Velit metus feugiat sapien vitae id tempus vitae vitae. Urna enim faucibus sapien consequat venenatis id sit. Amet eget nunc porttitor justo odio volutpat purus nibh aliquet. Amet in sed nulla neque libero.",
        title: "Ava Nicholls 2",
        mainImage: mainImg2,
    },
    {
        thumbnail: subImg3,
        details: "Lorem ipsum dolor sit amet consectetur. Purus elementum consequat malesuada amet turpis mollis etiam non. Lobortis molestie sit lacinia facilisi in cras. Consectetur bibendum dictum quam id volutpat aliquet tortor leo. Velit metus feugiat sapien vitae id tempus vitae vitae. Urna enim faucibus sapien consequat venenatis id sit. Amet eget nunc porttitor justo odio volutpat purus nibh aliquet. Amet in sed nulla neque libero.",
        title: "Ava Nicholls 3",
        mainImage: mainImg3,
    }
];

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonial.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === testimonial.length - 1 ? 0 : prev + 1));
    };

    const current = testimonial[currentIndex];

    return (
        <div className="flex flex-col md:flex-row justify-between items-center h-auto  md:h-[420px] p-6 md:p-12 gap-6 bg-[#509B70] relative">
            {/* Left side: Info */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-4 text-left">
                <img
                    src={current.thumbnail}
                    alt="thumbnail"
                    className="w-16 h-16 object-cover"
                />
                <p className="text-[#FFFFFF] -mt-6 text-sm md:text-base jost-font-capitalize">{current.details}</p>

                {/* Small line above the title */}

                <div className="flex gap-4 items-center jost-font-capitalize">
                    <div className="w-8 h-1 bg-[#FFFFFF] mb-2 md:mb-3"></div>
                    <h2 className="text-2xl text-[#FFFFFF] md:text-3xl font-semibold">{current.title}</h2>
                </div>
                {/* Navigation buttons */}
                <div className="hidden md:flex mt-4 md:mt-8 lg:mt-12 gap-8">
                    <button
                        onClick={prevSlide}
                        className="md:left-6 lg:left-16  
                               md:top-1/2 md:-translate-y-1/2 
                               bottom-18 md:bottom-auto 
                               z-20 text-white border border-white rounded-full p-2 
                               hover:scale-110 transition"
                    >
                        <RiArrowLeftWideLine size={28} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className=" md:right-6 lg:right-16  
                               md:top-1/2 md:-translate-y-1/2 
                               bottom-18 md:bottom-auto 
                               z-20 text-white border border-white rounded-full p-2 
                               hover:scale-110 transition"
                    >
                        <RiArrowRightWideLine size={28} />
                    </button>
                </div>
            </div>

            {/* Right side: Image */}
            <div className="relative w-full md:w-1/2 lg:w-2/5 flex justify-center items-center mt-6 md:mt-0">
                <img
                    src={current.mainImage}
                    alt={current.title}
                    className="h-[250px] md:h-[300px] lg:h-[350px] object-cover w-full"
                />
            </div>
            {/* Navigation buttons */}
            <div className="md:hidden flex mt-4 md:mt-8 lg:mt-12 gap-8">
                <button
                    onClick={prevSlide}
                    className="md:left-6 lg:left-16  
                               md:top-1/2 md:-translate-y-1/2 
                               bottom-18 md:bottom-auto 
                               z-20 text-white border border-white rounded-full p-2 
                               hover:scale-110 transition"
                >
                    <RiArrowLeftWideLine size={28} />
                </button>
                <button
                    onClick={nextSlide}
                    className=" md:right-6 lg:right-16  
                               md:top-1/2 md:-translate-y-1/2 
                               bottom-18 md:bottom-auto 
                               z-20 text-white border border-white rounded-full p-2 
                               hover:scale-110 transition"
                >
                    <RiArrowRightWideLine size={28} />
                </button>
            </div>
        </div>
    );
};

export default Testimonial;
