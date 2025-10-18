import React from "react";

const FindUs = () => {
  return (
    <div className="w-full ">
      <h1 className="font-semibold text-xl mb-2">Find Us On</h1>

      <div className="join join-vertical w-full flex flex-col">
        {/* Facebook Button */}
        <button className="btn join-item flex items-center gap-2 justify-start w-full">
          <div className="bg-gray-50 rounded-full p-1">
            <svg
              aria-label="Facebook logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="16"
              height="16"
            >
              <path
                fill="blue"
                d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"
              ></path>
            </svg>
          </div>
          Facebook
        </button>

        {/* X (Twitter) Button */}
        <button className="btn join-item flex items-center gap-2 justify-start w-full">
          <div className="bg-gray-50 rounded-full p-1">
            <svg
              aria-label="X logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 271"
              width="16"
              height="16"
            >
              <path
                fill="black"
                d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"
              />
            </svg>
          </div>
          Twitter
        </button>

        {/* LinkedIn Button */}
        <button className="btn join-item flex items-center gap-2 justify-start w-full">
          <div className="bg-[#0A66C2] rounded-full p-1">
            <svg
              aria-label="LinkedIn logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="16"
              height="16"
            >
              <path
                fill="white"
                d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z"
                fillRule="evenodd"
              />
            </svg>
          </div>
          LinkedIn
        </button>
      </div>
    </div>
  );
};

export default FindUs;
