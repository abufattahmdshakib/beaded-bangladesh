// src/components/Profile/Addresses/EditAddress.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "../../../src/index.css"; // keep same styles as AddNewAddress

const EditAddress = ({ initialData = {}, onSave }) => {
  const navigate = useNavigate();

  // seed with existing values or sensible defaults
  const [formData, setFormData] = useState({
    addressType: "",
    addressName: "",
    division: "",
    district: "",
    area: "",
    precedence: "",
    fullAddress: "",
    zipCode: "",
  });

  useEffect(() => {
    setFormData((prev) => ({ ...prev, ...initialData }));
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((d) => ({ ...d, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    // optional callback to persist
    if (typeof onSave === "function") onSave(formData);
    navigate(-1); // go back after save
  };

  const handleCancel = () => {
    navigate(-1); // just go back
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen my-8">
        <div className="bg-gray-100 md:p-12 p-2 w-full max-w-[92%] md:max-w-4xl">
          <h1 className="jost-font-uppercase text-[26px] text-[#1E1E1E] font-[400] text-center mb-8">
            Edit Address
          </h1>

          <form onSubmit={handleSave} className="space-y-6">
            {/* Grid inputs (same look & feel as AddNewAddress) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Address Type */}
              <div>
                <label className="block text-[#1E1E1E] text-[14px] mb-1 font-[400] jost-font-uppercase">
                  Select Address Type
                </label>
                <select
                  name="addressType"
                  value={formData.addressType}
                  onChange={handleChange}
                  className="w-full text-[#7D7D7D] jost-font-capitalize border border-[#B7B7B7] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00B5A5]"
                >
                  <option value="">Select</option>
                  <option value="Home">Home</option>
                  <option value="Work">Work</option>
                </select>
              </div>

              {/* Address Name */}
              <div>
                <label className="block text-[#1E1E1E] text-[14px] mb-1 font-[400] jost-font-uppercase">
                  Address Name (Optional)
                </label>
                <input
                  type="text"
                  name="addressName"
                  value={formData.addressName}
                  onChange={handleChange}
                  placeholder="Enter Address Name"
                  className="w-full border text-[#7D7D7D] jost-font-capitalize border-[#B7B7B7] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00B5A5]"
                />
              </div>

              {/* Division */}
              <div>
                <label className="block text-[#1E1E1E] text-[14px] mb-1 font-[400] jost-font-uppercase">
                  Select Division
                </label>
                <select
                  name="division"
                  value={formData.division}
                  onChange={handleChange}
                  className="w-full border text-[#7D7D7D] jost-font-capitalize border-[#B7B7B7] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00B5A5]"
                >
                  <option value="">Select</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chittagong">Chittagong</option>
                </select>
              </div>

              {/* District */}
              <div>
                <label className="block text-[#1E1E1E] text-[14px] mb-1 font-[400] jost-font-uppercase">
                  Select District
                </label>
                <select
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  className="w-full border text-[#7D7D7D] jost-font-capitalize border-[#B7B7B7] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00B5A5]"
                >
                  <option value="">Select</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Gazipur">Gazipur</option>
                </select>
              </div>

              {/* Area */}
              <div>
                <label className="block text-[#1E1E1E] text-[14px] mb-1 font-[400] jost-font-uppercase">
                  Select Area
                </label>
                <select
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  className="w-full border text-[#7D7D7D] jost-font-capitalize border-[#B7B7B7] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00B5A5]"
                >
                  <option value="">Select</option>
                  <option value="Gulshan">Gulshan</option>
                  <option value="Banani">Banani</option>
                </select>
              </div>

              {/* Precedence */}
              <div>
                <label className="block text-[#1E1E1E] text-[14px] mb-1 font-[400] jost-font-uppercase">
                  Precedence
                </label>
                <select
                  name="precedence"
                  value={formData.precedence}
                  onChange={handleChange}
                  className="w-full jost-font-capitalize text-[#7D7D7D] border border-[#B7B7B7] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00B5A5]"
                >
                  <option value="">Select</option>
                  <option value="Primary">Primary</option>
                  <option value="Secondary">Secondary</option>
                </select>
              </div>
            </div>

            {/* Full Address */}
            <div>
              <label className="block text-[#1E1E1E] text-[14px] mb-1 font-[400] jost-font-uppercase">
                Full Address
              </label>
              <textarea
                name="fullAddress"
                value={formData.fullAddress}
                onChange={handleChange}
                placeholder="Please enter your full address"
                rows={4}
                className="w-full jost-font-capitalize text-[#7D7D7D] border border-[#B7B7B7] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00B5A5] resize-none"
              />
            </div>

            {/* ZIP Code */}
            <div>
              <label className="block text-[#1E1E1E] text-[14px] mb-1 font-[400] jost-font-uppercase">
                ZIP Code
              </label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                placeholder="Enter ZIP"
                className="w-full border jost-font-capitalize text-[#7D7D7D] border-[#B7B7B7] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00B5A5]"
              />
            </div>

            {/* Buttons (mobile vertical, desktop: Cancel left / Save right) */}
            <div className="flex flex-col gap-4 mt-6 md:flex-row md:justify-center">
              <button
                type="button"
                onClick={handleCancel}
                className="w-full md:w-60 text-[14px] text-center rounded-4xl border-2 text-[#1E1E1E] py-[12px] jost-font-uppercase font-[500] hover:border-3 transition order-2 md:order-1"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="w-full md:w-60 text-[14px] text-center rounded-4xl bg-[#00B5A5] text-white py-[12px] jost-font-uppercase font-[400] hover:bg-[#009988] transition order-1 md:order-2"
              >
                Save Address
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditAddress;
