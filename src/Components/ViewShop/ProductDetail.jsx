import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productsData from "../../../src/products";
import { FaHeart } from "react-icons/fa";
import { AuthContext } from "../../pages/Auth/AuthProvider";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { wishlist, addToWishlist } = useContext(AuthContext); // context

  const initialProduct = productsData.find((p) => p.id === Number(id));
  const [mainImage, setMainImage] = useState(initialProduct?.image);

  if (!initialProduct)
    return <p className="text-center mt-10 text-lg">Product not found</p>;

  const currentIndex = productsData.findIndex(
    (p) => p.id === initialProduct.id
  );

  const thumbnails = [
    initialProduct.image,
    productsData[currentIndex + 1]?.image,
    productsData[currentIndex + 2]?.image,
  ].filter(Boolean);

  const product = productsData.find((p) => p.image === mainImage);
  const isInWishlist = wishlist.some((item) => item.id === product.id);

  return (
    <div className="border-t-1 border-gray-400 mb-14 md:mb-0">
      <div className="w-full px-4 md:w-10/12 md:px-8 mx-auto min-h-screen bg-gray-50 mt-5 md:mt-12">
        <button
          className="mb-8 text-2xl font-extrabold transition-transform duration-200 ease-in-out hover:scale-110 active:scale-95"
          onClick={() => navigate(-1)}
        >
          ←
        </button>

        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-6">
          {/* Thumbnails */}
          <div className="hidden md:flex flex-col gap-3 w-[120px]">
            {thumbnails.map((img, idx) => (
              <div key={idx} className="relative w-full h-[120px] cursor-pointer">
                <img
                  src={img}
                  alt={`thumb-${idx}`}
                  className="w-full h-full object-cover"
                  onClick={() => setMainImage(img)}
                />
                {img !== mainImage && (
                  <div className="absolute inset-0 bg-white/70 pointer-events-none"></div>
                )}
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={mainImage}
              alt={product.title}
              className="w-[340px] h-[450px] md:w-[350px] object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1 mt-4 md:mt-0">
            <h1 className="text-[#7D7D7D] text-sm md:text-[20px] mb-4">
              {product.name}
            </h1>
            <h2 className="text-lg md:text-2xl font-semibold mb-2 text-[#1E1E1E]">
              {product.title}
            </h2>
            <p className="text-[#00B5A5] text-xl md:text-[32px] mb-4">{product.price}</p>
            <p className="text-[#333333] text-sm md:text-[14px] mb-3 border-t-[1px] border-[#D9D9D9] pt-5 mt-5">
              {product.description}
            </p>
            <p className="text-[#333333] text-sm md:text-[14px] border-b-[1px] border-[#D9D9D9] pb-5 mb-5">
              {product.brand_notice}
            </p>

            <button
              className="flex items-center gap-2 text-[#1E1E1E] text-[14px] mt-8"
              onClick={() => addToWishlist(product)} // context toggle
            >
              <FaHeart style={{ color: isInWishlist ? "red" : "#9C9C9C" }} />
              {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>

            <button className="text-[#1E1E1E] text-[14px] border-2 border-[#7D7D7D] px-10 py-2 rounded-full transition mt-5">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
