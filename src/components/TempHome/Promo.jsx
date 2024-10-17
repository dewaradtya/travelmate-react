import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaExclamation,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import promotions from "../Promo/Data";

const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const Promo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth < 640;
  const validPromotions = promotions.filter((promo) => promo.image);

  const promotionChunks = isMobile
    ? chunkArray(validPromotions, 1)
    : chunkArray(validPromotions, 2);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % promotionChunks.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + promotionChunks.length) % promotionChunks.length
    );
  };

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, promotionChunks.length]);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center sm:text-left mb-4 px-2">
            Especially For You!
          </h2>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `${-currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {promotionChunks.map((chunk, index) => (
              <motion.div
                key={index}
                className="flex w-full flex-shrink-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {chunk.map((promo, i) => (
                  <div key={i} className="w-full sm:w-1/2 px-2">
                    <Link to={`/promo/${promo.id}`}>
                      <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                        <img
                          src={promo.image}
                          alt={promo.title}
                          className="w-full h-80 object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40" />
                        <div className="absolute top-0 left-0 right-0 p-4">
                          <div className="flex justify-between items-center">
                            <FaExclamation className="text-white p-2 text-3xl bg-orange-300 rounded-full" />
                            <p className="ml-4 rounded-full backdrop-blur-lg p-2 bg-black bg-opacity-20 text-white text-xs">
                              Only on 10 Oct - 10 Nov 2024
                            </p>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-white text-xl font-semibold">
                            {promo.title}
                          </h3>
                          <p className="text-white text-6xl mb-6 font-semibold">
                            {promo.disc}%
                          </p>
                          <p className="text-white text-sm">
                            *With terms and condition
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </motion.div>
            ))}
          </motion.div>

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 transition-opacity p-2 rounded-lg text-gray-800"
            aria-label="Previous promotion"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 transition-opacity p-2 rounded-lg text-gray-800"
            aria-label="Next promotion"
          >
            <FaChevronRight size={20} />
          </button>
        </div>

        <div className="flex justify-center mt-6">
          {promotionChunks
            .slice(
              Math.max(0, currentIndex - 2),
              Math.min(promotionChunks.length, currentIndex + 2)
            )
            .map((_, index) => {
              const actualIndex = Math.max(0, currentIndex - 2) + index;

              return (
                <button
                  key={actualIndex}
                  onClick={() => setCurrentIndex(actualIndex)}
                  className={`w-2 h-2 mx-1 rounded-full transition-colors ${
                    actualIndex === currentIndex ? "bg-gray-800" : "bg-gray-300"
                  }`}
                  aria-label={`Go to promotion ${actualIndex + 1}`}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Promo;
