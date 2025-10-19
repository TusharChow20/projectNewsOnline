import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

const NewsDetailsCart = ({ news }) => {
  // Safety checks: fallback to empty objects/arrays
  if (!news) return null;

  const {
    title = "No Title Available",
    author = {},
    details = "",
    thumbnail_url = "",
    tags = [],
    rating = {},
  } = news;

  const publishedDate = author?.published_date
    ? new Date(author.published_date).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Unknown Date";

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
      {/* Thumbnail */}
      {thumbnail_url && (
        <img src={thumbnail_url} alt={title} className="w-full  object-cover" />
      )}

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800 mb-3 leading-snug">
          {title}
        </h2>

        {/* Meta Info */}
        <p className="text-sm text-gray-500 mb-2">
          {publishedDate} |{" "}
          <span className="text-gray-600 font-medium">
            By {author?.name || "Unknown Author"}
          </span>
        </p>

        {/* Details */}
        <p className="text-gray-700 text-justify mb-4">
          {details ? `${details.slice(0, 450)}...` : "No details available."}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.length > 0 ? (
            tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600"
              >
                #{tag}
              </span>
            ))
          ) : (
            <span className="text-xs text-gray-400 italic">No tags</span>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center border-t pt-4">
          <div className="flex items-center gap-2">
            {author?.img && (
              <img
                src={author.img}
                alt={author?.name || "Author"}
                className="w-10 h-10 rounded-full object-cover border"
              />
            )}
            <div>
              <p className="text-sm font-semibold">
                {author?.name || "Unknown Author"}
              </p>
              <p className="text-xs text-gray-500 capitalize">
                {rating?.badge || "N/A"} ({rating?.number || 0}⭐)
              </p>
            </div>
          </div>

          <Link
            to={"/"}
            className="btn btn-error text-white btn-sm flex items-center gap-1"
          >
            <ArrowLeft size={16} />
            All news in this category
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCart;
