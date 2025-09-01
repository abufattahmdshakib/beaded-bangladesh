import React, { useState, useContext, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { AuthContext } from "../../pages/Auth/AuthProvider";

const DeliveryInfo = () => {
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
        <h2 className="text-2xl font-semibold">Personal Info</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600 mb-1">Name</label>
            <input
              type="text"
              value={name}
              readOnly
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 cursor-not-allowed"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600 mb-1">Phone No.</label>
            <input
              type="text"
              value={phone}
              readOnly
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 cursor-not-allowed"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600 mb-1">Payment Info</label>
          <p>Cash on Delivery is available right now</p>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600 mb-1">Notes</label>
          <input
            type="text"
            placeholder="Notes"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      {/* Section Two - Delivery Address */}
      <div className="flex-1 space-y-6 min-w-[300px]">
        <h2 className="text-2xl font-semibold">Delivery Address</h2>

        {/* Address Type Selector */}
        <div className="flex flex-col md:flex-row md:items-end gap-4">
          <div className="flex-1 relative">
            <label className="text-sm font-medium text-gray-600 mb-1">Address Type</label>
            <select
              value={addressType}
              onChange={(e) => setAddressType(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select Address Type</option>
              <option value="home">Home</option>
              <option value="work">Work</option>
            </select>
          </div>
          <button
            onClick={() => setShowAddForm(true)}
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
          >
            ADD NEW ADDRESS
          </button>
        </div>

        {/* Address Details / Edit */}
        <div className="space-y-3">
          <h3
            className="flex justify-end items-center gap-2 text-gray-700 font-medium text-lg cursor-pointer"
            onClick={() => setShowAddForm(!showAddForm)}
          >
            <FaEdit className="text-blue-500" />
            <span>Edit</span>
          </h3>

          {showAddForm ? (
            <div className="space-y-2">
              <input type="text" placeholder="Division" className="w-full border border-gray-300 rounded-md px-3 py-2" />
              <input type="text" placeholder="District" className="w-full border border-gray-300 rounded-md px-3 py-2" />
              <input type="text" placeholder="Area" className="w-full border border-gray-300 rounded-md px-3 py-2" />
              <input type="text" placeholder="ZIP Code" className="w-full border border-gray-300 rounded-md px-3 py-2" />
              <input type="text" placeholder="Full Address" className="w-full border border-gray-300 rounded-md px-3 py-2" />
              <button onClick={() => setShowAddForm(false)} className="px-4 py-2 text-green-600 hover:underline">
                Save
              </button>
            </div>
          ) : addressType ? (
            <div className="space-y-1 text-gray-700">
              <p>Division: {addresses[addressType].division}</p>
              <p>District: {addresses[addressType].district}</p>
              <p>Area: {addresses[addressType].area}</p>
              <p>ZIP Code: {addresses[addressType].zipCode}</p>
              <p>Full Address: {addresses[addressType].fullAddress}</p>
            </div>
          ) : (
            <p className="text-gray-500">Please select an address type above.</p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 w-full sm:w-auto">
            CONTINUE SHOPPING
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 w-full sm:w-auto">
            REVIEW ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;
