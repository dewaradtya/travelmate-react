import React, { useState } from 'react';
import { FaArrowRight, FaClock, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import blogs from '../Blog/BlogData';

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/blog/${blog.id}`);
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-semibold bg-blue-100 text-blue-800 rounded-full px-3 py-1">
            {blog.category}
          </span>
          <div className="flex items-center text-gray-500">
            <FaClock className="w-4 h-4 mr-1" />
            <span className="text-sm">{blog.date}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{blog.title}</h3>
        <p className="text-gray-600 mb-4">{blog.excerpt}</p>
        <button
          onClick={handleReadMore}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          Read More
          <FaArrowRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );
};

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleReadMore = (blog) => {
    setSelectedBlog(blog);
  };

  const handleCloseModal = () => {
    setSelectedBlog(null);
  };

  const limitedBlogs = blogs.slice(0, 3);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-left text-gray-800 mb-4">Latest Blog Posts</h2>
        <p className="text-left text-gray-600 mb-12 max-w-2xl">
          Discover travel tips, hidden gems, and inspiring stories from around the world.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {limitedBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} onReadMore={handleReadMore} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-200"
          >
            View All Posts
          </Link>
        </div>
      </div>
      {selectedBlog && <Modal blog={selectedBlog} onClose={handleCloseModal} />}
    </section>
  );
};

export default Blog;