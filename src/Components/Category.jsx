import React from "react";
import { use } from "react";
import { NavLink } from "react-router";
const categoryData = fetch("/categories.json").then((res) => res.json());
const Category = () => {
  const categories = use(categoryData);
  //   const id = ?
  return (
    <div>
      <p className="font-semibold">All Category ({categories.length}) </p>
      <div className="flex flex-col space-y-3 p-4 ">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className={
              "btn bg-white shadow-sm p-3 text-start hover:bg-base-200"
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
