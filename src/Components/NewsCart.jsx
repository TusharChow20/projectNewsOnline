import React from "react";
import { BiBookmark } from "react-icons/bi";
import { FaStar, FaRegEye, FaShareAlt } from "react-icons/fa";

const NewsCart = ({ eachNews }) => {
  const { title, author, image_url, details, rating, total_view, tags } =
    eachNews;

  return (
    <div className="max-w-full p-3 mx-auto bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="text-gray-800 font-semibold">{author?.name}</h3>
            <p className="text-sm text-gray-500">
              {new Date(author?.published_date).toISOString().split("T")[0]}
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <BiBookmark className="text-gray-500 hover:text-gray-700 cursor-pointer"></BiBookmark>
          <FaShareAlt className="text-gray-500 hover:text-gray-700 cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h2 className="px-4 font-bold text-lg text-gray-900">{title}</h2>

      {/* Image */}
      <div className="mt-3">
        <img
          src={image_url}
          alt="news"
          className="w-full h-130 p-10 rounded-2xl object-cover"
        />
      </div>

      {/* Description */}
      <div className="px-4 py-3 text-gray-600 text-sm leading-relaxed">
        {details.slice(0, 160)}...
        <span className="text-orange-600 font-medium cursor-pointer hover:underline">
          Read More
        </span>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 pb-4 text-gray-600">
        {/* Rating */}
        <div className="flex items-center space-x-1 text-orange-500">
          {Array.from({ length: Math.round(rating?.number) }).map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-700 font-semibold ml-1">
            {rating?.number}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center space-x-1">
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCart;
