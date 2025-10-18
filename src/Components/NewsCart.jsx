import React from "react";
import { Link } from "react-router";
import { BiBookmark } from "react-icons/bi";
import { FaStar, FaRegEye, FaShareAlt } from "react-icons/fa";
// import { use } from "react";
// import { AuthContext } from "../Provider/AuthProvider";

const NewsCart = ({ eachNews }) => {
  const { title, author, image_url, details, rating, total_view, _id } =
    eachNews;

  return (
    <div className="w-full p-3 sm:p-4 mx-auto bg-white rounded-lg sm:rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 mb-4 sm:mb-6">
      {/* Header */}
      <div className="flex items-center justify-between p-2 sm:p-4">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="text-gray-800 font-semibold text-sm sm:text-base">
              {author?.name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500">
              {new Date(author?.published_date).toISOString().split("T")[0]}
            </p>
          </div>
        </div>
        <div className="flex gap-2 sm:gap-4">
          <BiBookmark className="text-lg sm:text-xl text-gray-500 hover:text-gray-700 cursor-pointer" />
          <FaShareAlt className="text-lg sm:text-xl text-gray-500 hover:text-gray-700 cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h2 className="px-2 sm:px-4 font-bold text-base sm:text-lg text-gray-900 line-clamp-2">
        {title}
      </h2>

      {/* Image */}
      <div className="mt-3 px-2 sm:px-4">
        <img
          src={image_url}
          alt="news"
          className="w-full h-48 sm:h-64 md:h-80 rounded-lg sm:rounded-2xl object-cover"
        />
      </div>

      {/* Description */}
      <div className="px-2 sm:px-4 py-3 text-gray-600 text-sm sm:text-base leading-relaxed">
        {details.slice(0, 120)}...
        <Link
          to={`/news/${_id}`}
          className="text-orange-600 font-medium cursor-pointer hover:underline ml-1"
        >
          Read More
        </Link>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-2 sm:px-4 pb-2 sm:pb-4 text-gray-600 text-sm sm:text-base">
        {/* Rating */}
        <div className="flex items-center space-x-1 text-orange-500">
          {Array.from({ length: Math.round(rating?.number) }).map((_, i) => (
            <FaStar key={i} className="text-sm sm:text-base" />
          ))}
          <span className="text-gray-700 font-semibold ml-1">
            {rating?.number}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center space-x-1">
          <FaRegEye className="text-sm sm:text-base" />
          <span className="text-sm sm:text-base">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCart;
