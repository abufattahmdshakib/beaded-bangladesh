import React, { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";

const ViewYourOrder = () => {
    const { cart = [] } = useContext(AuthContext) || {};

    // Helper: Convert price string to number
    const getPriceNumber = (priceStr) => {
        if (!priceStr) return 0;
        return Number(priceStr.replace(/[^\d.-]/g, "")) || 0;
    };

    // Summary calculations
    const subTotal = cart.reduce(
        (acc, item) => acc + getPriceNumber(item.price) * item.quantity,
        0
    );
    const deliveryFee = subTotal > 0 ? 50 : 0;
    const discount = subTotal > 500 ? 100 : 0;
    const grandTotal = subTotal + deliveryFee - discount;

    return (
        <div className="border-t border-[#7D7D7D] px-2 sm:px-4">
            <div className="w-11/12 mx-auto flex flex-col gap-6  p-2 sm:p-4 bg-gray-50">
                {/* Header */}
                <div className="flex justify-between pt-8">
                    <div>
                        <h1 className="text-[#9C9C9C] font-[600] jost-font-uppercase">
                            Order ID:{" "}
                            <span className="text-[#1E1E1E] font-[500]">#VXD69420</span>
                        </h1>
                        <p className="text-[#9C9C9C] font-[500] jost-font-capitalize">
                            29th March, 2023
                        </p>
                    </div>
                    <div>
                        <p className="jost-font-uppercase text-[#E1911B] font-[600] py-0.5 px-2 sm:py-1 sm:px-4 bg-[#ebd6b6] text-sm sm:text-base">
                            pending
                        </p>
                    </div>
                </div>

                {/* Row 1 - Section 1 + Section 2 */}
                <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
                    {/* Section 1 - Cart Items */}
                    <div className="flex-1 p-2 sm:p-4 divide-y divide-gray-200">
                        {cart.length === 0 ? (
                            <p className="jost-font-uppercase text-center py-4 text-gray-500 text-sm sm:text-base">
                                Your cart is empty.
                            </p>
                        ) : (
                            cart.map((item, idx) => (
                                <div
                                    key={item.id || idx}
                                    className="flex flex-col gap-2 py-3 sm:py-4 sm:flex-row sm:items-center sm:justify-between"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-14 h-18 sm:w-18 sm:h-24 flex-shrink-0 overflow-hidden">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <h3 className="jost-font-uppercase text-sm sm:text-base font-[400] text-gray-800 truncate">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <div className="flex justify-around  sm:gap-4 w-full mt-1 sm:mt-0">
                                        <p className="jost-font-uppercase text-sm sm:text-base">
                                            {item.quantity}x
                                        </p>
                                        <p className="jost-font-uppercase text-sm sm:text-base font-medium text-gray-800">
                                            {item.price}
                                        </p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Section 2 - Summary */}
                    <div className="w-full lg:w-96 border-t lg:border-t-0 lg:border-l-2 border-gray-300 p-3 sm:p-6 bg-white flex flex-col justify-between">
                        <div className="space-y-1 sm:space-y-2 text-sm">
                            <div className="flex jost-font-uppercase justify-between">
                                <span className="text-gray-600">Sub-Total:</span>
                                <span>৳{subTotal}</span>
                            </div>
                            <div className="flex jost-font-uppercase justify-between">
                                <span className="text-gray-600">Delivery Fee:</span>
                                <span>৳{deliveryFee}</span>
                            </div>
                            <div className="flex jost-font-uppercase justify-between">
                                <span className="text-gray-600">Discount:</span>
                                <span>-৳{discount}</span>
                            </div>
                        </div>
                        <div className="flex jost-font-uppercase justify-between font-semibold text-base mt-3 sm:mt-4 border-t pt-2 sm:pt-4">
                            <span>Grand Total:</span>
                            <span>৳{grandTotal}</span>
                        </div>
                    </div>
                </div>

                {/* Row 2 - Section 3 + Section 4 */}
                <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
                    {/* Section 3 - Delivery Address */}
                    <div className="flex-1 p-3 sm:p-6 bg-white">
                        <h3 className="text-base sm:text-lg jost-font-capitalize font-semibold mb-2 sm:mb-4">
                            Delivery Address
                        </h3>
                        <p className="jost-font-uppercase text-sm sm:text-base text-gray-600">
                            H-54, R-8, Niketan, Gulshan, Dhaka
                        </p>
                    </div>

                    {/* Section 4 - Notes Input */}
                    <div className="w-full lg:w-96 p-3 sm:p-6 bg-white">
                        <h4 className="text-base sm:text-[20px] font-medium text-[#1E1E1E]  jost-font-capitalize">
                            Notes
                        </h4>
                        <input
                            type="text"
                            placeholder="No notes were written"
                            className="w-full  px-2 sm:px-3 py-2 text-sm jost-font-capitalize"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewYourOrder;
