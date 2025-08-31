import React from "react";
import { FaHome, FaBriefcase, FaEye, FaEdit, FaTrash, FaPlus  } from "react-icons/fa";

const MyAddresses = () => {
    const addresses = [
        {
            type: "HOME",
            division: "Dhaka",
            district: "Dhaka",
            area: "Gulshan",
            zipCode: "1401",
            fullAddress: "House-54, Road-8, Nikatan, Gulshan Dhaka",
            default: true,
            buttonText: "Default Address",
            buttonColor: "#EA9442",
        },
        {
            type: "WORK",
            division: "Dhaka",
            district: "Dhaka",
            area: "Banani",
            zipCode: "1213",
            fullAddress: "House-23, Road-12, Banani, Dhaka",
            default: false,
            buttonText: "Set AS Address",
            buttonColor: "#1E1E1E",
        },
    ];

    const getIcon = (type) => (
        <span className="text-[#1E1E1E] text-xl mr-2">
            {type === "HOME" ? <FaHome /> : <FaBriefcase />}
        </span>
    );

    return (
        <div className="p-6 space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
                {/* HOME and WORK cards */}
                {addresses.map((addr, idx) => (
                    <div key={idx} className="flex-1 flex flex-col">
                        <div className="p-4 flex flex-col justify-between bg-gray-200 flex-1">
                            {/* Top section: icon + type on left, actions on right */}
                            <div className="flex border-b border-gray-400 justify-between items-center mb-4">
                                <div className="flex items-center text-[#1E1E1E]">
                                    {getIcon(addr.type)}
                                    <h2 className="font-[400] jost-font-uppercase text-lg">{addr.type}</h2>
                                </div>
                                <div className="flex items-center gap-3 text-[#1E1E1E]">
                                    <FaEye className="cursor-pointer" />
                                    <FaEdit className="cursor-pointer" />
                                    <FaTrash className="cursor-pointer" />
                                </div>
                            </div>

                            {/* Address details */}
                            <div className="space-y-2 text-[#1E1E1E]">
                                <div className="flex justify-center gap-20">
                                    <div>
                                        <h1 className="jost-font-uppercase font-[500] text-[16px] text-[#6D6D6D]">Division</h1>
                                        <h2 className="jost-font-capitalize text-[#1E1E1E] text-[14px]">{addr.division}</h2>
                                    </div>
                                    <div>
                                        <h1 className="jost-font-uppercase font-[500] text-[16px] text-[#6D6D6D]">District</h1>
                                        <h2 className="jost-font-capitalize text-[#1E1E1E] text-[14px]">{addr.district}</h2>
                                    </div>
                                </div>
                                <div className="flex justify-center gap-20">
                                    <div>
                                        <h1 className="jost-font-uppercase font-[500] text-[16px] text-[#6D6D6D]">Area</h1>
                                        <h2 className="jost-font-capitalize text-[#1E1E1E] text-[14px]">{addr.area}</h2>
                                    </div>
                                    <div>
                                        <h1 className="jost-font-uppercase font-[500] text-[16px] text-[#6D6D6D]">ZIP Code</h1>
                                        <h2 className="jost-font-capitalize text-[#1E1E1E] text-[14px]">{addr.zipCode}</h2>
                                    </div>
                                </div>
                                <div>
                                    <h1 className="jost-font-uppercase font-[500] text-[16px] text-[#6D6D6D]">Full Address</h1>
                                    <h2 className="jost-font-capitalize text-[#1E1E1E] text-[14px]">{addr.fullAddress}</h2>
                                </div>
                            </div>
                        </div>

                        {/* Button below card */}
                        <div className="mt-2 text-center">
                            <button
                                style={{ color: addr.buttonColor }}
                                className="hover:underline jost-font-uppercase cursor-pointer"
                            >
                                {addr.buttonText}
                            </button>
                        </div>
                    </div>
                ))}

                {/* Add New Address Section */}
                <div className="flex-1 flex flex-col p-4 bg-gray-200 border border-gray-300 justify-center items-center hover:bg-gray-300 cursor-pointer">
                    <div className="flex-1 flex flex-col justify-center items-center gap-2">
                        <div className="bg-gray-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl">
                            <FaPlus />
                        </div>
                        <span className="text-[#1E1E1E] font-[400] jost-font-uppercase text-lg"> Add New Address</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAddresses;
