import React, { useState } from "react";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const promotions = [
  {
    title: "Summer Getaway",
    description: "Enjoy 30% off on all summer packages!",
    image: "/promo.jpg",
    link: "#",
  },
  {
    title: "Weekend Special",
    description: "Book a weekend trip and get a free meal!",
    image: "/promo1.jpg",
    link: "#",
  },
  {
    title: "Family Package",
    description: "Plan a family trip and save 25%!",
    image: "/promo2.jpg",
    link: "#",
  },
  {
    title: "Honeymoon Deals",
    description: "Exclusive deals for honeymooners!",
    image: "/promo3.jpg",
    link: "#",
  },
];

const Promo = () => {
  const [startIndex, setStartIndex] = useState(0);

  const next = () => {
    if (startIndex < promotions.length - 1) {
      setStartIndex(startIndex + 1);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          Exciting Promotions
        </h2>

        <div className="flex overflow-hidden">
          {promotions.slice(startIndex, startIndex + 1).map((promo, index) => (
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
