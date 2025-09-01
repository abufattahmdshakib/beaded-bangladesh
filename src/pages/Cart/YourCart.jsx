import React, { useContext, useEffect } from "react";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { AuthContext } from "../Auth/AuthProvider";

const YourCart = ({ isOpen, setIsOpen }) => {
    const { cart = [], setCart, removeFromCart } = useContext(AuthContext) || {};

    // Disable body scroll when popup is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

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

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] bg-black/50 flex justify-center items-start sm:pt-20 px-2 sm:px-4">
            <div className="bg-white w-full max-w-6xl relative max-h-[90vh] shadow-2xl flex flex-col sm:flex-row">
                {/* Section One - Cart Items */}
                <div className="flex-1 overflow-auto p-4 sm:p-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <X
                                size={24}
                                className="cursor-pointer text-[#1E1E1E]"
                                onClick={() => setIsOpen(false)}
                            />
                            <h2 className="jost-font-uppercase text-[22px] sm:text-[28px] font-[400] text-[#1E1E1E]">
                                Your Cart
                            </h2>
                            <span className="text-[#6D6D6D] text-[12px] sm:text-[14px]">
                                {cart.length} Items
                            </span>
                        </div>
                    </div>

                    {/* Table Header */}
                    <div className="hidden sm:grid jost-font-uppercase grid-cols-[2fr_2fr_1fr_1fr] font-[500] text-[#9C9C9C] text-[14px] border-b border-gray-300 mb-3">
                        <p className="truncate">ITEM</p>
                        <p className="text-center">QTY</p>
                        <p className="text-center">PRICE</p>
                        <p className="text-right">ACTION</p>
                    </div>

                    {/* Cart Items */}
                    <div className="divide-y divide-[#E0E0E0]">
                        {cart.length === 0 ? (
                            <p className="text-center py-6 text-[#6D6D6D]">
                                Your cart is empty.
                            </p>
                        ) : (
                            cart.map((item, idx) => (
                                <div className="grid grid-cols-[3fr_2fr_1fr_1fr] items-center py-4 gap-4 md:grid-cols-[3fr_2fr_1fr_1fr]">
                                    {/* Image */}
                                    <div className="flex items-center gap-3">
                                        <div className="flex-shrink-0 overflow-hidden w-16 h-16">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Title + Mobile Prices */}
                                        <div className="flex flex-col justify-center">
                                            <h3 className="jost-font-uppercase text-[14px] text-[#1E1E1E] truncate">{item.title}</h3>

                                            {/* Mobile Only Price Info */}
                                            <div className="block md:hidden text-[14px] text-[#6D6D6D] mt-1">
                                                <p>Unit Price: ৳{item.price}</p>
                                                <p>Total Price: ৳{item.price * item.quantity}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Quantity */}
                                    <div className="flex justify-start">
                                        <div className="jost-font-uppercase flex items-center justify-between gap-2 border border-black rounded-full px-3 py-[2px] w-20">
                                            <button onClick={() => decreaseQuantity(item.id)}><Minus size={18} /></button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => increaseQuantity(item.id)}><Plus size={18} /></button>
                                        </div>
                                    </div>

                                    {/* Price - Desktop only */}
                                    <p className="jost-font-uppercase text-center text-[14px] text-[#1E1E1E] font-[500] hidden md:flex justify-start">
                                        {item.price}
                                    </p>
                                    {/* Action */}
                                    <div className="flex justify-end">
                                        <button className="text-red-500" onClick={() => removeFromCart(item.id)}>
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>

                            ))
                        )}
                    </div>
                </div>

                {/* Section Two - Summary */}
                <div className="w-full sm:w-80 bg-black text-white flex flex-col justify-between p-6 max-h-[90vh]">
                    {/* Scrollable summary */}
                    <div className="overflow-auto mb-4">
                        <h3 className="jost-font-uppercase text-[16px] sm:text-[18px] font-[500] mb-4">
                            Summary
                        </h3>
                        <div className="space-y-2 text-[13px] sm:text-[14px]">
                            <div className="jost-font-uppercase flex justify-between font[600]">
                                <span className="text-[#7D7D7D]">Sub-Total:</span>
                                <span>৳{subTotal}</span>
                            </div>
                            <div className="jost-font-uppercase flex justify-between font[600]">
                                <span className="text-[#7D7D7D] ">Delivery Fee:</span>
                                <span>৳{deliveryFee}</span>
                            </div>
                            <div className="jost-font-uppercase flex justify-between font[600]">
                                <span className="text-[#7D7D7D]">Discount:</span>
                                <span>-৳{discount}</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        {/* Grand Total row */}
                        <div className="jost-font-uppercase flex justify-between font-[600] text-[15px] sm:text-[16px] mb-6">
                            <span>Grand Total:</span>
                            <span>৳{grandTotal}</span>
                        </div>

                        {/* Checkout button */}
                        <button className="jost-font-uppercase w-full border text-white py-3 rounded-full font-[500]">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YourCart;
