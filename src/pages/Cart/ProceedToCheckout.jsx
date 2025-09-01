import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import DeliveryInfo from "./DeliveryInfo";
import ReviewOrder from "./ReviewOrder";
import Confirmation from "./Confirmation";

const ProceedToCheckout = () => {
    const [step, setStep] = useState(1);

    const steps = [
        { id: 1, label: "Delivery Info" },
        { id: 2, label: "Review Order" },
        { id: 3, label: "Confirmation" },
    ];

    useEffect(() => {
        AOS.init({ duration: 600, once: true });
    }, []);

    return (
        <div className="border-t border-[#7D7D7D] px-4">
            <div className="max-w-3xl mx-auto  my-16 flex flex-col gap-6">

                {/* Horizontal Steps */}
                <div className="relative w-full flex items-center justify-between">
                    {steps.map((s, idx) => (
                        <div key={s.id} className="flex-1 flex flex-col items-center relative cursor-pointer"
                            onClick={() => setStep(s.id)}
                        >
                            {/* Line to next step */}
                            {idx < steps.length - 1 && (
                                <div
                                    className={`absolute top-5 left-1/2 h-[1px] z-0`}
                                    style={{
                                        width: "100%",
                                        backgroundColor: step > s.id ? "#16a34a" : "#D9D9D9",
                                        transform: "translateX(0%)"
                                    }}
                                ></div>
                            )}

                            {/* Circle */}
                            <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center z-10
      ${step >= s.id ? "bg-green-600 text-white" : "bg-[#D9D9D9] text-[#1E1E1E]"}
    `}
                            >
                                {s.id}
                            </div>

                            {/* Label */}
                            <span
                                className={`mt-2 text-sm font-semibold z-10 ${step >= s.id ? "text-green-600" : "text-[#7D7D7D]"}`}
                            >
                                {s.label}
                            </span>
                        </div>

                    ))}
                </div>

                {/* Step Content */}
                <div
                    className="flex-1 p-2 pt-10 min-h-[200px]"
                    data-aos="fade-up"
                >
                    {step === 1 && <DeliveryInfo />}
                    {step === 2 && <ReviewOrder />}
                    {step === 3 && <Confirmation />}
                </div>
            </div>
        </div>
    );
};

export default ProceedToCheckout;
