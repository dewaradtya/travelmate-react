import React, { useState } from 'react';
import { FaInbox, FaMailBulk, FaPaperPlane, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: "", email: "", message: "" });
    alert("Your message has been sent!");
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-gray-100" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col md:flex-row">
            <motion.div
              className="bg-blue-500 text-white py-12 px-8 md:w-1/3"
              variants={itemVariants}
            >
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <p className="mb-6">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
              <div className="flex items-center mb-4">
                <FaMailBulk className="w-5 h-5 mr-2" />
                <span>info@travelmate.com</span>
              </div>
              <div className="flex items-center">
                <FaUser className="w-5 h-5 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
            </motion.div>
            <div className="py-12 px-8 md:w-2/3">
              <form onSubmit={handleSubmit}>
                <motion.div className="mb-6" variants={itemVariants}>
                  <label htmlFor="name" className="text-gray-700 font-semibold mb-2 flex items-center">
                    <FaUser className="w-5 h-5 mr-2 text-blue-500" />
                    Your Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter your name"
                  />
                </motion.div>
                <motion.div className="mb-6" variants={itemVariants}>
                  <label htmlFor="email" className="text-gray-700 font-semibold mb-2 flex items-center">
                    <FaMailBulk className="w-5 h-5 mr-2 text-blue-500" />
                    Your Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </motion.div>
                <motion.div className="mb-6" variants={itemVariants}>
                  <label htmlFor="message" className="text-gray-700 font-semibold mb-2 flex items-center">
                    <FaInbox className="w-5 h-5 mr-2 text-blue-500" />
                    Your Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter your message"
                    rows="5"
                  ></motion.textarea>
                </motion.div>
                <motion.div className="text-right" variants={itemVariants}>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 flex items-center"
                  >
                    Send Message
                    <FaPaperPlane className="w-5 h-5 ml-2" />
                  </motion.button>
                </motion.div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;