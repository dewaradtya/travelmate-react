import React from "react";
import { FaCompass, FaStar, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const Typography = () => {
  const features = [
    {
      icon: <FaUsers size={24} />,
      title: "Expert Team",
      description: "Our passionate team is dedicated to crafting unforgettable journeys."
    },
    {
      icon: <FaCompass size={24} />,
      title: "Diverse Destinations",
      description: "From relaxing beaches to exciting cities, we offer a world of possibilities."
    },
    {
      icon: <FaStar size={24} />,
      title: "Unforgettable Experiences",
      description: "We're committed to making every moment of your trip special and memorable."
    }
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
    <section className="py-20">
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-extrabold mb-8 text-center text-blue-800"
        >
          About Us
        </motion.h2>
        <motion.div
          variants={itemVariants}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <motion.p variants={itemVariants} className="text-lg text-gray-700 mb-6">
            We are dedicated to providing you with the best travel experiences,
            helping you explore the world's most amazing destinations. Our team
            is passionate about travel and committed to making your journey
            unforgettable.
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg text-gray-700">
            Whether you are looking for a relaxing beach getaway, an exciting city
            adventure, or a cultural exploration, we have something for everyone.
          </motion.p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 * index, type: "spring", stiffness: 200 }}
                className="text-blue-500 mb-4"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Typography;