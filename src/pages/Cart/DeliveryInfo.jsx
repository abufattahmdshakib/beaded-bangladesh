import React, { useState, useContext, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { AuthContext } from "../../pages/Auth/AuthProvider";
import { Link } from "react-router-dom";

const DeliveryInfo = ({ setStep }) => {

  const { user } = useContext(AuthContext);
  const [addressType, setAddressType] = useState(""); // default empty
  const [showAddForm, setShowAddForm] = useState(false);

  const addresses = {
    home: {
      division: "Dhaka",
      district: "Dhaka",
      area: "Gulshan",
      zipCode: "1401",
      fullAddress: "House-54, Road-8, Nikatan, Gulshan Dhaka",
    },
    work: {
      division: "Dhaka",
      district: "Dhaka",
      area: "Banani",
      zipCode: "1213",
      fullAddress: "House-23, Road-12, Banani, Dhaka",
    },
  };

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhone(user.phoneNumber || "");
    }
  }, [user]);

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-4 min-h-[600px] overflow-x-hidden">
      {/* Section One - Personal Info */}
      <div className="flex-1 space-y-6 min-w-[300px]">
        <h2 className="jost-font-capitalize text-[#1E1E1E] text-[28px] font-semibold">Personal Info</h2>
        <div className="space-y-4">
          {/* First Row */}
          <div className="grid bg-gray-200 p-5 grid-cols-2 gap-4">
            <div>
              <p className="jost-font-uppercase text-sm font-medium text-gray-600">Name</p>
              <p className="jost-font-capitalize text-gray-800">{name || "N/A"}</p>
            </div>
            <div>
              <p className="jost-font-uppercase text-sm font-medium text-gray-600">Phone No.</p>
              <p className="jost-font-capitalize text-gray-800">{phone || "N/A"}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="jost-font-capitalize text-[#1E1E1E] text-[28px] font-medium  mb-1">Payment Info</label>
          <p className="jost-font-capitalize text-gray-500">Cash on Delivery is available right now</p>
        </div>

        <div className="flex flex-col">
          <label className="jost-font-capitalize text-[22px] font-medium text-[#1E1E1E] mb-1">Notes</label>
          <input
            type="text"
            placeholder="Notes"
            className="w-full jost-font-capitalize border border-gray-300 px-3 py-2 
             focus:outline-none focus:ring-2 focus:ring-[#00B5A5] 
             placeholder-gray-400"
          />
        </div>
      </div>

      {/* Section Two - Delivery Address */}
      <div className="flex-1 space-y-6 min-w-[300px]">
        <h2 className="text-[28px] text-[#1E1E1E] jost-font-capitalize font-[500]">Delivery Address</h2>

        {/* Address Type Selector */}
        <div className="flex flex-col md:flex-row md:items-end gap-4">
          <div className="flex-1 relative">
            <label className="jost-font-capitalize text-sm font-medium text-gray-600 mb-1">Address Type</label>
            <select
              value={addressType}
              onChange={(e) => setAddressType(e.target.value)}
              className="w-full  text-[#1E1E1E] jost-font-capitalize px-3 py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00B5A5]"
            >
              <option value="">Select Address Type</option>
              <option value="home">Home</option>
              <option value="work">Work</option>
            </select>
          </div>
          <button
            onClick={() => setShowAddForm(true)}
            className="jost-font-uppercase px-6 text-[#1E1E1E] hover:bg-gray-200 font-[500] py-2 border-[1.5px] rounded-full w-full sm:w-auto"
          >
            ADD NEW ADDRESS
          </button>
        </div>

        {/* Address Details / Edit */}
        <div className="space-y-3">
          <h3
            className="jost-font-capitalize flex justify-end items-center gap-2 text-gray-700 font-medium text-lg cursor-pointer"
            onClick={() => setShowAddForm(!showAddForm)}
          >
            <span>Edit</span>
            <FaEdit className="text-black" />
          </h3>

          {showAddForm ? (
            <div className="space-y-2 jost-font-capitalize">
              <input type="text" placeholder="Division" className="w-full border border-gray-300  px-3 py-2" />
              <input type="text" placeholder="District" className="w-full border border-gray-300  px-3 py-2" />
              <input type="text" placeholder="Area" className="w-full border border-gray-300 px-3 py-2" />
              <input type="text" placeholder="ZIP Code" className="w-full border border-gray-300 px-3 py-2" />
              <input type="text" placeholder="Full Address" className="w-full border border-gray-300 px-3 py-2" />
              <button onClick={() => setShowAddForm(false)} className="px-4 py-2 text-[#00B5A5] hover:underline">
                Save
              </button>
            </div>
          ) : addressType ? (
            <div className="space-y-4 bg-gray-200 p-5 text-gray-700">
              {/* First Row */}
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <p className="jost-font-uppercase text-sm font-medium text-gray-600">Division</p>
                  <p className="jost-font-capitalize text-[#1E1E1E]">{addresses[addressType].division}</p>
                </div>
                <div>
                  <p className="jost-font-uppercase text-sm font-medium text-gray-600">District</p>
                  <p className="jost-font-capitalize text-[#1E1E1E]">{addresses[addressType].district}</p>
                </div>
                <div className="col-span-1 md:col-span-1">
                  <p className="jost-font-uppercase text-sm font-medium text-gray-600">Full Address</p>
                  <p className="jost-font-capitalize text-[#1E1E1E]">{addresses[addressType].fullAddress}</p>
                </div>
              </div>
              {/* Second Row */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="jost-font-uppercase text-sm font-medium text-gray-600">Area</p>
                  <p className="jost-font-capitalize text-[#1E1E1E]">{addresses[addressType].area}</p>
                </div>
                <div>
                  <p className="jost-font-uppercase text-sm font-medium text-gray-600">ZIP Code</p>
                  <p className="jost-font-capitalize text-[#1E1E1E]">{addresses[addressType].zipCode}</p>
                </div>
              </div>
            </div>
          ) : (
            <p className="jost-font-uppercase text-gray-500">Please select an address type above.</p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col justify-end sm:flex-row gap-4">
          <Link
            to="/ViewShop"
            className="jost-font-uppercase px-6 text-[#1E1E1E] hover:bg-gray-200 font-[500] py-2 border-[1.5px] rounded-full w-full sm:w-auto"
          >
            CONTINUE SHOPPING
          </Link>
          <button onClick={() => setStep(2)} className="jost-font-uppercase px-6 py-2 border bg-[#00B5A5] hover:bg-[#287d77] font-[500] rounded-full text-[#FFFFFF] w-full sm:w-auto">
            REVIEW ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;
