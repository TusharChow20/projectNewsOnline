// import React from "react";
// import { use } from "react";
// import { NavLink } from "react-router";
// const categoryData = fetch("/categories.json").then((res) => res.json());
// const Category = () => {
//   const categories = use(categoryData);
//   //   const id = ?
//   return (
//     <div>
//       <p className="font-semibold">All Category ({categories.length}) </p>
//       <div className="flex flex-col space-y-3 mt-4 pr-15 ">
//         {categories.map((category) => (
//           <NavLink
//             key={category.id}
//             className={
//               "btn bg-white shadow-sm p-3  hover:bg-base-200 justify-start text-left"
//             }
//             to={`/category/${category.id}`}
//           >
//             {category.name}
//           </NavLink>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Category;

import React from "react";
import { use } from "react";
import { NavLink } from "react-router";

const categoryData = fetch("/categories.json").then((res) => res.json());

const Category = () => {
  const categories = use(categoryData);

  return (
    <div>
      <p className="font-semibold text-base sm:text-lg mb-3">
        All Categories ({categories.length})
      </p>
      <div className="flex flex-col space-y-2">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className={({ isActive }) =>
              `btn ${
                isActive ? "btn-primary" : "bg-white"
              } shadow-sm p-3 hover:bg-base-200 justify-start text-left text-sm sm:text-base`
            }
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Category;
