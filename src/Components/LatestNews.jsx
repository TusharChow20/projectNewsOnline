import React from "react";
import Marquee from "react-fast-marquee";

// const LatestNews = () => {
//   return (
//     <div className="flex items-center gap-4 bg-base-200 p-2">
//       <p className="bg-primary text-white px-4 py-2">Latest</p>
//       <div className="font-semibold flex-1">
//         <Marquee pauseOnHover={true} speed={40}>
//           <span className="mx-8">
//             Match Highlights: Germany vs Spain — as it happened! Match
//             Highlights: Germany vs Spain as...
//           </span>
//           <span className="mx-8">
//             Match Highlights: Germany vs Spain — as it happened! Match
//             Highlights: Germany vs Spain as...
//           </span>
//         </Marquee>
//       </div>
//     </div>
//   );
// };
const LatestNews = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 bg-base-200 p-3 sm:p-2 rounded-lg">
      <p className="bg-primary text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded text-sm sm:text-base font-semibold whitespace-nowrap">
        Latest
      </p>
      <div className="font-semibold flex-1 w-full text-sm sm:text-base">
        <Marquee pauseOnHover={true} speed={40}>
          <span className="mx-4 sm:mx-8">
            Match Highlights: Germany vs Spain — as it happened! Match
            Highlights: Germany vs Spain as...
          </span>
          <span className="mx-4 sm:mx-8">
            Match Highlights: Germany vs Spain — as it happened! Match
            Highlights: Germany vs Spain as...
          </span>
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
