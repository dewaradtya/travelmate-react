import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHotel, FaBus, FaUtensils, FaCheck, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Choose = () => {
  const [activeTab, setActiveTab] = useState(0);

  const whyChooseUs = [
    {
      title: "Expert Team",
      items: [
        "Experienced travel professionals",
        "24/7 customer support",
        "Local guides with in-depth knowledge"
      ]
    },
    {
      title: "Unique Experiences",
      items: [
        "Off-the-beaten-path destinations",
        "Immersive cultural activities",
        "Personalized itineraries"
      ]
    },
    {
      title: "Value for Money",
      items: [
        "Competitive pricing",
        "Exclusive deals and discounts",
        "Transparent pricing with no hidden fees"
      ]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-left mb-10 text-blue-800">Why Choose Us</h3>

          <div className="flex justify-start">
            {whyChooseUs.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 text-lg font-medium rounded-md border ${
                  activeTab === index ? 'bg-blue-800 text-white' : 'border-gray-200 text-blue-800'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          <div className="bg-white border p-6 rounded-xl shadow-lg">
            <ul className="space-y-4">
              {whyChooseUs[activeTab].items.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 text-gray-700"
                >
                  <FaCheck className="flex-shrink-0 text-green-500" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
