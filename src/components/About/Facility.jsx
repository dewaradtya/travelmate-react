import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHotel,
  FaBus,
  FaUtensils,
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const Facility = () => {
  const [currentFacility, setCurrentFacility] = useState(0);

  const facilities = [
    {
      icon: <FaHotel size={48} />,
      title: "Luxurious Hotels",
      description:
        "Experience comfort and elegance in our carefully selected accommodations.",
      details:
        "Indulge in spacious rooms, world-class amenities, and exceptional service at our partner hotels.",
    },
    {
      icon: <FaBus size={48} />,
      title: "Seamless Transport",
      description:
        "Travel with ease using our reliable and comfortable transportation services.",
      details:
        "From airport transfers to guided tours, enjoy safe and punctual journeys throughout your trip.",
    },
    {
      icon: <FaUtensils size={48} />,
      title: "Gourmet Dining",
      description:
        "Savor exquisite local and international cuisines during your travels.",
      details:
        "Delight in a culinary journey with our carefully curated dining experiences, catering to all tastes and dietary needs.",
    },
  ];

  const nextFacility = () => {
    setCurrentFacility((prev) => (prev + 1) % facilities.length);
  };

  const prevFacility = () => {
    setCurrentFacility(
      (prev) => (prev - 1 + facilities.length) % facilities.length
    );
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -100) {
      nextFacility();
    } else if (info.offset.x > 100) {
      prevFacility();
    }
  };
  return (
    <section className="py-20 bg-blue-800">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 text-white">
          Discover Our Facilities
        </h2>
        <div className="relative mb-20">
          <motion.div
            key={currentFacility}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            className="bg-white rounded-lg shadow-2xl p-8 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6 text-blue-800">
              {facilities[currentFacility].icon}
            </div>
            <h3 className="text-3xl font-semibold text-center mb-4 text-gray-800">
              {facilities[currentFacility].title}
            </h3>
            <p className="text-xl text-center mb-6 text-gray-600">
              {facilities[currentFacility].description}
            </p>
            <p className="text-lg text-center text-gray-700">
              {facilities[currentFacility].details}
            </p>
          </motion.div>
          <button
            onClick={prevFacility}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-blue-800 p-2 xs:p-2 rounded-full shadow-lg hover:bg-gray-200 transition duration-300 hidden xs:block"
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            onClick={nextFacility}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-blue-800 p-2 xs:p-2 rounded-full shadow-lg hover:bg-gray-200 transition duration-300 hidden xs:block"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
        <div className="flex justify-center mt-8">
          {facilities.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentFacility(index)}
              className={`w-2.5 h-2.5 xs:w-3 xs:h-3 rounded-full mx-1 xs:mx-2 ${
                index === currentFacility ? "bg-blue-400" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facility;
