import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-4 bg-base-200 p-2">
      <p className="bg-primary text-white px-4 py-2">Latest</p>
      <p className="font-semibold">
        <Marquee pauseOnHover={true} speed={40}>
          <p>
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
          <p>
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
        </Marquee>
      </p>
    </div>
  );
};

export default LatestNews;
