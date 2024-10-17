import React from "react";
import { motion } from "framer-motion";

const Service = () => {
  const services = [
    {
      title: "Travel Planning",
      description: "Personalized travel itineraries to fit your needs.",
      icon: "🌍",
    },
    {
      title: "Hotel Booking",
      description: "Exclusive deals on hotels worldwide.",
      icon: "🏨",
    },
    {
      title: "Flight Reservations",
      description: "Best prices for your flight bookings.",
      icon: "✈️",
    },
    {
      title: "Guided Tours",
      description: "Experience guided tours in your chosen destinations.",
      icon: "🗺️",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-left"
        >
          Services
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="text-5xl mb-4"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Service;