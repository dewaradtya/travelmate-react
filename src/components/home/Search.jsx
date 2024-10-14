import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Search = () => {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [activeTab, setActiveTab] = useState("Hotel");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Mencari destinasi:", { destination, date, category });
  };

  return (
    <div
      className="relative mx-auto z-30 w-full max-w-4xl mt-10 px-4"
      style={{ marginTop: "-100px" }}
    >
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-center sm:text-left mb-4 sm:mb-0">
            Explore Your Destination
          </h2>
          <div className="flex space-x-2">
            {["Hotel", "Flight", "Travel"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg transition ${
                  activeTab === tab ? "bg-black text-white" : "text-gray-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSearch}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4"
        >
          <div>
            <label
              htmlFor="destination"
              className="block text-sm font-medium text-gray-700"
            >
              Destination
            </label>
            <input
              id="destination"
              type="text"
              placeholder="Cari destinasi..."
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Travel Date
            </label>
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Semua Kategori</option>
              <option value="adventure">Petualangan</option>
              <option value="relaxation">Relaksasi</option>
              <option value="culture">Budaya</option>
              <option value="family">Keluarga</option>
            </select>
          </div>
        </form>

        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex text-sm space-x-2 mb-4 sm:mb-0">
            <p className="mt-2">Filter: </p>
            {["Hotel", "Flight", "Travel"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full transition border ${
                  activeTab === tab
                    ? "bg-black text-white"
                    : "border-gray-200 text-gray-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-2 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg shadow-lg transition duration-300 ease-in-out"
          >
            <span>Search</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
