import React, { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";

const Wishlist = () => {
  const { wishlist, addToWishlist } = useContext(AuthContext);

  return (
    <div>
      <h3 className="font-semibold mb-2">My Wishlist</h3>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="border p-3 rounded shadow hover:shadow-md transition relative"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-cover mb-2 rounded"
              />
              <h4 className="text-[#1E1E1E] font-semibold">{product.title}</h4>
              <p className="text-[#00B5A5] font-[400]">{product.price}</p>
              <button
                onClick={() => addToWishlist(product)}
                className="absolute top-2 right-2 text-red-500 font-bold text-xl"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
