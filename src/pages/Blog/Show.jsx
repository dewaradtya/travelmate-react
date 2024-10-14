import React from "react";
import { Link, useParams } from "react-router-dom";
import blogs from "../../components/Blog/BlogData";
import { FaCalendar, FaTag } from "react-icons/fa";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) return <div className="text-center text-2xl mt-20">Blog not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <article className="overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-96 object-cover"
        />
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">{blog.title}</h1>
          <div className="flex items-center text-sm text-gray-600 mb-6">
            <span className="flex items-center mr-4">
              <FaCalendar className="w-4 h-4 mr-1" />
              {blog.date}
            </span>
            <span className="flex items-center">
              <FaTag className="w-4 h-4 mr-1" />
              {blog.category}
            </span>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>{blog.content}</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogDetail;