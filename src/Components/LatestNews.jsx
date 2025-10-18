import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-4 bg-base-200 p-2">
      <p className="bg-primary text-white px-4 py-2">Latest</p>
      <div className="font-semibold flex-1">
        <Marquee pauseOnHover={true} speed={40}>
          <span className="mx-8">
            Match Highlights: Germany vs Spain — as it happened! Match
            Highlights: Germany vs Spain as...
          </span>
          <span className="mx-8">
            Match Highlights: Germany vs Spain — as it happened! Match
            Highlights: Germany vs Spain as...
          </span>
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
