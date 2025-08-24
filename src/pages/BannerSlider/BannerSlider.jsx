import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import Rectangle4 from "../../../src/assets/Rectangle 4.png";
import Rectangle7347 from "../../../src/assets/Rectangle 7347.png";

const BannerSlider = () => {
  return (
    <div className="relative w-full">
      <Carousel
        autoPlay
        infiniteLoop
        transitionTime={500}
        stopOnHover
        showThumbs={false}
        showStatus={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute left-34 md:left-6 lg:left-16 
                         md:top-1/2 md:-translate-y-1/2 
                         bottom-18 md:bottom-auto 
                         z-20 text-white border border-white rounded-full p-1 
                         hover:scale-110 transition"
            >
              <LuChevronLeft size={28} />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute right-34 md:right-6 lg:right-16  
                         md:top-1/2 md:-translate-y-1/2 
                         bottom-18 md:bottom-auto 
                         z-20 text-white border border-white rounded-full p-1 
                         hover:scale-110 transition"
            >
              <LuChevronRight size={28} />
            </button>
          )
        }
      >
        {[1, 2, 3].map((i) => (
          <div key={i} className="relative w-full">
            {/* Desktop image */}
            <div className="hidden md:block w-full relative">
              <img
                src={Rectangle4}
                alt={`slide-${i}`}
                className="w-full object-cover"
              />
              {/* Black overlay */}
              <div className="absolute inset-0 bg-black/40 bg-opacity-30"></div>
            </div>

            {/* Mobile image */}
            <div className="block md:hidden w-full relative">
              <img
                src={Rectangle7347}
                alt={`slide-mobile-${i}`}
                className="w-full object-cover"
              />
              {/* Black overlay */}
              <div className="absolute inset-0 bg-black/50 bg-opacity-30"></div>
            </div>

            {/* Centered text */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
              <h1 className="jost-font-uppercase text-[#FFFFFF] font-[500] text-[24px] md:text-[36px] lg:text-[64px] mb-[12px]">
                Arts & Crafts Store
              </h1>
              <p className="jost-font-capitalize text-[#FFFFFF] font-[400] text-[12px] md:text-[16px] lg:text-[20px] max-w-xl lg:max-w-4xl mb-6">
                Luxury bead accessories, handcrafted with beads from around the
                world! Our selection of fine jewelry features timeless designs
                in a variety of styles, all created with the highest quality
                materials.
              </p>
              <button className="jost-font-uppercase text-[8px] md:text-[12px] text-[#FFFFFF] px-[30px] py-[10px] border-2 font-[500]">
                SHOP NOW
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BannerSlider;
