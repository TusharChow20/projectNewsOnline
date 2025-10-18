// import React from "react";
// import Category from "../Category";
// import { Suspense } from "react";

// const Left = () => {
//   return (
//     <div>
//       <Suspense
//         fallback={<span className="loading loading-ring loading-xl"></span>}
//       >
//         <Category></Category>
//       </Suspense>
//     </div>
//   );
// };

// export default Left;

import React from "react";
import Category from "../Category";
import { Suspense } from "react";

const Left = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <Suspense
        fallback={
          <div className="flex justify-center items-center py-8">
            <span className="loading loading-ring loading-lg"></span>
          </div>
        }
      >
        <Category />
      </Suspense>
    </div>
  );
};

export default Left;
