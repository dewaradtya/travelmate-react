import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    feedback:
      "My experience with TravelMate was fantastic! Everything was well-organized and the team was very helpful throughout my trip.",
    avatar: "/client.jpeg",
    designation: "Travel Blogger",
    rating: 5,
  },
  {
    name: "Jane Smith",
    feedback:
      "I had an amazing vacation, thanks to TravelMate. The deals were unbeatable and the service top-notch!",
    avatar: "/client2.jpeg",
    designation: "Photographer",
    rating: 5,
  },
  {
    name: "Michael Johnson",
    feedback:
      "Booking my trip with TravelMate was quick and easy. The team helped me find the best destinations for my family vacation.",
    avatar: "/client3.jpeg",
    designation: "Family Traveler",
    rating: 4,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -100) {
      nextTestimonial();
    } else if (info.offset.x > 100) {
      prevTestimonial();
    }
  };

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          What Our Clients Say?
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            className="bg-white p-8 shadow-xl rounded-lg"
          >
            <div className="flex flex-col md:flex-row items-center mb-6">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mb-4 md:mb-0 md:mr-6 object-cover"
              />
              <div className="text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {testimonials[currentIndex].designation}
                </p>
                <div className="flex justify-center md:justify-start mt-2">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-sm sm:text-lg italic leading-relaxed">
              "{testimonials[currentIndex].feedback}"
            </p>
          </motion.div>

          <button
            onClick={prevTestimonial}
            className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 sm:-translate-x-12 bg-white p-2 sm:p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
          >
            <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 sm:translate-x-12 bg-white p-2 sm:p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
          >
            <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full mx-1 sm:mx-2 ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
