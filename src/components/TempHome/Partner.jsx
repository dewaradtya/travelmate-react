import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: "Partner 1", logo: "/images.jpg" },
  { name: "Partner 2", logo: "/garuda.webp" },
  { name: "Partner 3", logo: "/images.png" },
  { name: "Partner 5", logo: "/images.jpg" },
  { name: "Partner 4", logo: "/garuda.webp" },
  { name: "Partner 6", logo: "/images.png" },
];

const Partner = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Airline Partnerships</h2>

        <motion.div
          className="flex space-x-20"
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
        >
          {partners.map((partner, index) => (
            <div key={index} className="min-w-max">
              <motion.img
                src={partner.logo}
                alt={partner.name}
                className="w-32 h-32 object-contain filter grayscale transition duration-300 ease-in-out hover:filter-none"
              />
            </div>
          ))}
        </motion.div>

        <motion.div
          className="flex space-x-20"
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
        >
          {partners.map((partner, index) => (
            <div key={index} className="min-w-max">
              <motion.img
                src={partner.logo}
                alt={partner.name}
                className="w-32 h-32 object-contain filter grayscale transition duration-300 ease-in-out hover:filter-none"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partner;
