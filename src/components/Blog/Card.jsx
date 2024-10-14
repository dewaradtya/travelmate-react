import React, { useState } from "react";
import { FaArrowRight, FaClock, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const blogs = [
  {
    id: 1,
    title: "10 Tips for a Perfect Vacation",
    excerpt:
      "Planning your next trip? Check out these 10 essential tips for a stress-free vacation!",
    content:
      "Bali has more than just beaches. Uncover its hidden gems in this exclusive guide. We'll take you off the beaten path to explore secret waterfalls, ancient temples, and local villages that most tourists never see. Discover the rich culture and stunning natural beauty that make Bali truly special. From mouthwatering local cuisine to breathtaking landscapes, prepare to fall in love with the Island of the Gods.",
    image: "/sea.jpeg",
    date: "October 5, 2024",
    category: "Travel Tips",
  },
  {
    id: 2,
    title: "Discover the Hidden Gems of Bali",
    excerpt:
      "Bali has more than just beaches. Uncover its hidden gems in this exclusive guide.",
    content:
      "Bali has more than just beaches. Uncover its hidden gems in this exclusive guide. We'll take you off the beaten path to explore secret waterfalls, ancient temples, and local villages that most tourists never see. Discover the rich culture and stunning natural beauty that make Bali truly special. From mouthwatering local cuisine to breathtaking landscapes, prepare to fall in love with the Island of the Gods.",

    image: "/bali1.jpeg",
    date: "September 30, 2024",
    category: "Destinations",
  },
  {
    id: 3,
    title: "How to Travel on a Budget",
    excerpt:
      "Save money and maximize your travel experiences with our budget-friendly tips.",
    content:
      "Bali has more than just beaches. Uncover its hidden gems in this exclusive guide. We'll take you off the beaten path to explore secret waterfalls, ancient temples, and local villages that most tourists never see. Discover the rich culture and stunning natural beauty that make Bali truly special. From mouthwatering local cuisine to breathtaking landscapes, prepare to fall in love with the Island of the Gods.",
    image: "/mon.jpeg",
    date: "September 20, 2024",
    category: "Budget Travel",
  },
  {
    id: 4,
    title: "How to Travel on a Budget",
    excerpt:
      "Save money and maximize your travel experiences with our budget-friendly tips.",
    content:
      "Bali has more than just beaches. Uncover its hidden gems in this exclusive guide. We'll take you off the beaten path to explore secret waterfalls, ancient temples, and local villages that most tourists never see. Discover the rich culture and stunning natural beauty that make Bali truly special. From mouthwatering local cuisine to breathtaking landscapes, prepare to fall in love with the Island of the Gods.",

    image: "/mon.jpeg",
    date: "September 20, 2024",
    category: "Budget Travel",
  },
  {
    id: 5,
    title: "How to Travel on a Budget",
    excerpt:
      "Save money and maximize your travel experiences with our budget-friendly tips.",
    content:
      "Bali has more than just beaches. Uncover its hidden gems in this exclusive guide. We'll take you off the beaten path to explore secret waterfalls, ancient temples, and local villages that most tourists never see. Discover the rich culture and stunning natural beauty that make Bali truly special. From mouthwatering local cuisine to breathtaking landscapes, prepare to fall in love with the Island of the Gods.",
    image: "/mon.jpeg",
    date: "September 20, 2024",
    category: "Budget Travel",
  },
  {
    id: 6,
    title: "How to Travel on a Budget",
    excerpt:
      "Save money and maximize your travel experiences with our budget-friendly tips.",
    content:
      "Bali has more than just beaches. Uncover its hidden gems in this exclusive guide. We'll take you off the beaten path to explore secret waterfalls, ancient temples, and local villages that most tourists never see. Discover the rich culture and stunning natural beauty that make Bali truly special. From mouthwatering local cuisine to breathtaking landscapes, prepare to fall in love with the Island of the Gods.",
    image: "/mon.jpeg",
    date: "September 20, 2024",
    category: "Budget Travel",
  },
  {
    id: 7,
    title: "How to Travel on a Budget",
    excerpt:
      "Save money and maximize your travel experiences with our budget-friendly tips.",
    content:
      "Bali has more than just beaches. Uncover its hidden gems in this exclusive guide. We'll take you off the beaten path to explore secret waterfalls, ancient temples, and local villages that most tourists never see. Discover the rich culture and stunning natural beauty that make Bali truly special. From mouthwatering local cuisine to breathtaking landscapes, prepare to fall in love with the Island of the Gods.",
    image: "/mon.jpeg",
    date: "September 20, 2024",
    category: "Budget Travel",
  },
];

const BlogCard = ({ blog, index, onReadMore }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-xl overflow-hidden shadow-lg"
  >
    <img
      src={blog.image}
      alt={blog.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
          className="text-xs font-semibold bg-blue-100 text-blue-800 rounded-full px-3 py-1"
        >
          {blog.category}
        </motion.span>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
          className="flex items-center text-gray-500"
        >
          <FaClock className="w-4 h-4 mr-1" />
          <span className="text-sm">{blog.date}</span>
        </motion.div>
      </div>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
        className="text-xl font-bold mb-2 text-gray-800"
      >
        {blog.title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
        className="text-gray-600 mb-4"
      >
        {blog.excerpt}
      </motion.p>
      <button
        onClick={() => onReadMore(blog)}
        className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
      >
        Read More
        <FaArrowRight className="w-4 h-4 ml-1" />
      </button>
    </div>
  </motion.div>
);

const Modal = ({ blog, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">{blog.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <FaTimes className="w-6 h-6" />
          </button>
        </div>
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <p className="text-gray-600 mb-4">{blog.content}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{blog.category}</span>
          <span>{blog.date}</span>
        </div>
      </div>
    </div>
  </div>
);

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleReadMore = (blog) => {
    setSelectedBlog(blog);
  };

  const handleCloseModal = () => {
    setSelectedBlog(null);
  };
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-left text-gray-800 mb-4"
        >
          Blog Posts
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-left text-gray-600 mb-12 max-w-2xl"
        >
          Discover travel tips, hidden gems, and inspiring stories from around
          the world.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogs.map((blog, index) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              index={index}
              onReadMore={handleReadMore}
            />
          ))}
        </motion.div>
      </div>
      {selectedBlog && <Modal blog={selectedBlog} onClose={handleCloseModal} />}
    </section>
  );
};

export default Blogs;
