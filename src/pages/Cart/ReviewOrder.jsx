import React, { useContext } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { AuthContext } from "../Auth/AuthProvider";

const ReviewOrder = ({ setStep }) => {
  const { cart = [], setCart, removeFromCart } = useContext(AuthContext) || {};

  // Helper: Convert price string to number
  const getPriceNumber = (priceStr) => {
    if (!priceStr) return 0;
    return Number(priceStr.replace(/[^\d.-]/g, "")) || 0;
  };

  // Quantity functions
  const increaseQuantity = (productId) => {
    const updated = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const decreaseQuantity = (productId) => {
    const updated = cart
      .map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // Summary
  const subTotal = cart.reduce(
    (acc, item) => acc + getPriceNumber(item.price) * item.quantity,
    0
  );
  const deliveryFee = subTotal > 0 ? 50 : 0;
  const discount = subTotal > 500 ? 100 : 0;
  const grandTotal = subTotal + deliveryFee - discount;

  return (
    <div className="flex flex-col mb-12 gap-6">
      {/* SECTION ONE - Cart Items */}
      <div className="w-full p-4">
        <div className="divide-y divide-gray-200">
          {cart.length === 0 ? (
            <p className="jost-font-uppercase text-center py-6 text-gray-500">Your cart is empty.</p>
          ) : (
            cart.map((item, idx) => (
              <div
                key={item.id || idx}
                className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                {/* Top row: Image + Title */}
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="jost-font-uppercase text-sm font-[400] text-gray-800 truncate">
                      {item.title}
                    </h3>
                  </div>
                  {/* Action button for mobile */}
                  <button
                    className="text-red-500 sm:hidden"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                {/* Bottom row: Quantity + Price */}
                <div className="flex justify-between mt-2 sm:mt-0 sm:items-center sm:gap-4 w-full">
                  <div className="flex items-center gap-2 border border-black rounded-full px-3 py-[2px] w-24 justify-between">
                    <button onClick={() => decreaseQuantity(item.id)}>
                      <Minus size={16} />
                    </button>
                    <span className="jost-font-uppercase">{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>
                      <Plus size={16} />
                    </button>
                  </div>
                  <p className="jost-font-uppercase text-sm font-medium text-gray-800">{item.price}</p>
                  {/* Action button for desktop */}
                  <button
                    className="text-red-500 hidden sm:block"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* SECTION TWO */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* SECTION THREE - Delivery Address */}
        <div className="flex-1 p-4 sm:p-6  bg-white">
          <h3 className="text-lg jost-font-capitalize font-semibold mb-4">Delivery Address</h3>
          <p className="jost-font-uppercase text-sm text-gray-600">
            H-54, R-8, Niketan, Gulshan, Dhaka
          </p>
        </div>

        {/* SECTION FOUR - Summary */}
        <div className="w-full lg:w-96 p-4 sm:p-6 bg-gray-50 flex flex-col justify-between">
          <div className="space-y-2 text-sm">
            <div className="flex jost-font-uppercase justify-between">
              <span className=" text-gray-600">Sub-Total:</span>
              <span>৳{subTotal}</span>
            </div>
            <div className="flex jost-font-uppercase justify-between">
              <span className=" text-gray-600">Delivery Fee:</span>
              <span>৳{deliveryFee}</span>
            </div>
            <div className="flex jost-font-uppercase justify-between">
              <span className=" text-gray-600">Discount:</span>
              <span>-৳{discount}</span>
            </div>
          </div>

          <div className="flex jost-font-uppercase justify-between font-semibold text-base mt-4 border-t pt-4">
            <span>Grand Total:</span>
            <span>৳{grandTotal}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col-reverse sm:flex-row justify-end gap-4">
        <button
          onClick={() => setStep(1)}
          className="jost-font-uppercase px-6 text-[#1E1E1E] hover:bg-gray-200 font-[500] py-2 border-[1.5px] rounded-full w-full sm:w-54"
        >
          Back
        </button>
        <button
          onClick={() => setStep(3)}
          className="jost-font-uppercase px-6 py-2 border bg-[#00B5A5] hover:bg-[#287d77] font-[500] rounded-full text-[#FFFFFF] w-full sm:w-54"
        >
          Confirm Order
        </button>
      </div>


    </div>
  );
};

export default ReviewOrder;
