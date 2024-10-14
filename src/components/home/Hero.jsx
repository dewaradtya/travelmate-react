import React from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url('/banner.jpeg')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/50"></div>

      <div className="relative container mx-auto h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white z-10"
        >
          <h1 className="text-6xl font-extrabold tracking-tight leading-tight mb-4">
            Discover the World <br /> with{" "}
            <span className="text-blue-500">TravelMate</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-lg mx-auto">
            Explore breathtaking destinations and enjoy exclusive deals on your
            next adventure.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
