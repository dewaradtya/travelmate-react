import React, { useState } from "react";
import {
  FaCalendar,
  FaChevronRight,
  FaTicketAlt,
  FaUsers,
  FaPlane,
  FaClock,
  FaMapMarkerAlt,
  FaInfoCircle,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import destinations from "../components/Destination/DestinationData";

const DestinationDetail = () => {
  const { id } = useParams();
  const destination = destinations.find((dest) => dest.id === parseInt(id));

  if (!destination) {
    return <div>Destination not found!</div>;
  }

  const [ticketOption, setTicketOption] = useState("standard");
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [departureCity, setDepartureCity] = useState("");

  const handleBooking = () => {
    if (!departureCity) {
      alert("Please select a departure city!");
      return;
    }
    alert(
      `You have booked ${ticketQuantity} ${ticketOption} tickets for ${destination.name}, departing from ${departureCity}!`
    );
  };

  const destinationInfo = {
    description: `Discover the enchanting beauty of ${destination.name}, a destination that seamlessly blends natural wonders with rich cultural heritage.`,
    highlights: [
      "Visit iconic landmarks and historical sites",
      "Experience local cuisine and traditional arts",
      "Explore stunning natural landscapes",
      "Engage in exciting outdoor activities",
    ],
    duration: "7 days, 6 nights",
    departureCities: ["New York", "Los Angeles", "Chicago", "Miami"],
    includesAccommodation: true,
    includesTransportation: true,
    includesMeals: "Breakfast and dinner daily",
  };

  return (
    <div className="min-h-screen p-2">
      <div
        className="h-96 bg-center bg-cover bg-no-repeat relative"
        style={{
          backgroundImage: `url(${destination.image}), url(/default.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute bottom-0 left-0 p-8 text-white">
          <h1 className="text-5xl font-extrabold uppercase tracking-wide mb-2">
            {destination.name}
          </h1>
          <p className="text-xl max-w-2xl">{destinationInfo.description}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="bg-white border rounded-xl shadow-lg p-6">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Trip Details
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaClock className="text-blue-500 mr-3" size={20} />
                  <span className="text-lg">{destinationInfo.duration}</span>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-blue-500 mr-3" size={20} />
                  <span className="text-lg">Highlights:</span>
                </div>
                <ul className="list-disc list-inside ml-8 space-y-2">
                  {destinationInfo.highlights.map((highlight, index) => (
                    <li key={index} className="text-gray-700">
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center">
                  <FaInfoCircle className="text-blue-500 mr-3" size={20} />
                  <span className="text-lg">Includes:</span>
                </div>
                <ul className="list-disc list-inside ml-8 space-y-2">
                  {destinationInfo.includesAccommodation && (
                    <li className="text-gray-700">Accommodation</li>
                  )}
                  {destinationInfo.includesTransportation && (
                    <li className="text-gray-700">Transportation</li>
                  )}
                  {destinationInfo.includesMeals && (
                    <li className="text-gray-700">
                      {destinationInfo.includesMeals}
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="bg-white border rounded-xl shadow-lg p-6">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Book Your Adventure
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700">
                    Departure City
                  </label>
                  <div className="relative">
                    <select
                      value={departureCity}
                      onChange={(e) => setDepartureCity(e.target.value)}
                      className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select a city</option>
                      {destinationInfo.departureCities.map((city, index) => (
                        <option key={index} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                    <FaPlane
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700">
                    Ticket Type
                  </label>
                  <div className="relative">
                    <select
                      value={ticketOption}
                      onChange={(e) => setTicketOption(e.target.value)}
                      className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="standard">Standard Package</option>
                      <option value="premium">Premium Package</option>
                      <option value="luxury">Luxury Experience</option>
                    </select>
                    <FaTicketAlt
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700">
                    Number of Travelers
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={ticketQuantity}
                      onChange={(e) => setTicketQuantity(e.target.value)}
                      className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                      min="1"
                    />
                    <FaUsers
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                  </div>
                </div>

                <button
                  onClick={handleBooking}
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300 flex items-center justify-center"
                >
                  Book Now
                  <FaChevronRight className="ml-2" size={20} />
                </button>
              </div>

              <div className="mt-8 text-sm text-gray-600">
                <div className="flex items-center mb-2">
                  <FaCalendar className="mr-2" size={16} />
                  <span>Free cancellation up to 7 days before the trip</span>
                </div>
                <div className="flex items-center">
                  <FaUsers className="mr-2" size={16} />
                  <span>Small groups for a personalized experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
