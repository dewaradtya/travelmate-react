import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaRegPaperPlane } from "react-icons/fa";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email) {
      setMessage("Thank you for subscribing!");
      setEmail("");
    } else {
      setMessage("Please enter a valid email address.");
    }
  };

  return (
    <div className="bg-blue-900 py-12 px-4 text-center">
      <h2 className="text-3xl font-bold text-white mb-2">
        Subscribe to Our Newsletter
      </h2>
      <p className="text-white text-lg mb-8">
        Get the latest news, updates, and offers delivered directly to your
        inbox.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col xs:flex-row items-center justify-center max-w-lg mx-auto"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-lg mb-4 xs:mb-0 xs:mr-4 flex-grow"
          required
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          <FaRegPaperPlane size={22} />
        </motion.button>
      </form>

      {message && <p className="text-white mt-4">{message}</p>}
    </div>
  );
};

export default Newsletter;
