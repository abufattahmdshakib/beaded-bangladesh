import React, { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";

const Wishlist = () => {
  const { wishlist, addToWishlist } = useContext(AuthContext);

  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {wishlist.length > 0 ? (
          wishlist.map((product) => (
            <div
              key={product.id}
              className="cursor-pointer relative"
            >
              {/* Remove Button */}
              <button
                onClick={() => addToWishlist(product)}
                className="absolute top-2 right-2 shadow rounded-full px-1 bg-[#00B5A5] text-black text-xl font-bold"
              >
                ×
              </button>

              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[250px] md:h-[300px] lg:h-[380px] object-cover"
              />

              {/* Category Name */}
              <h3 className="jost-font-uppercase text-[#6D6D6D] font-[500] text-[12px] lg:text-[14px] text-center mt-2">
                {product.name}
              </h3>

              {/* Product Title */}
              <p className="jost-font-uppercase text-[#1E1E1E]/80 text-[14px] lg:text-[16px] my-1 text-center font-[500]">
                {product.title}
              </p>

              {/* Price */}
              <p className="jost-font-uppercase text-[#00B5A5] font-semibold text-[16px] lg:text-[20px] text-center">
                {product.price}
              </p>
            </div>
          ))
        ) : (
          <div className="jost-font-uppercase col-span-3 text-center text-gray-400 mt-8 text-lg py-10">
            Your wishlist is empty.
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
