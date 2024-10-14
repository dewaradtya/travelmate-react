import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const promotions = [
  { image: "/promo.jpg" },
  { image: "/promo1.jpg" },
  { image: "/promo2.jpg" },
  { image: "/promo3.jpg" },
];

const Promo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % promotions.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + promotions.length) % promotions.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          Exciting Promotions
        </h2>

        <div className="flex overflow-hidden">
          {promotions
            .slice(currentIndex, currentIndex + 1)
            .map((promo, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden w-full"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-screen object-cover"
                  />
                </div>
              </motion.div>
            ))}
        </div>

        <div className="flex justify-center mt-8">
          {promotions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full mx-1 sm:mx-2 ${
                index === currentIndex ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <div className="flex justify-between mt-4">
          <button
            onClick={prev}
            className="p-2 bg-black text-white rounded-full"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="p-2 bg-black text-white rounded-full"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Promo;
