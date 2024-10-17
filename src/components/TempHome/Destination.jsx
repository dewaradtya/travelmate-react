import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import destinations from "../Destination/DestinationData";

const Destination = () => {
  const navigate = useNavigate();

  const handleDiscoverMore = (id) => {
    navigate(`/destination/${id}`);
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-left text-white mb-16 tracking-tight">
          Explore Top Destinations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mx-2">
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-96">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold">{destination.name}</h3>
                    <p className="my-2 text-sm">{destination.description}</p>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleDiscoverMore(destination.id)}
                      className="flex items-center px-6 py-2 bg-white text-gray-900 font-semibold text-sm rounded-3xl shadow-md transition duration-300 ease-in-out transform hover:shadow-lg"
                    >
                      Discover More <FaArrowRight className="ml-2" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destination;
