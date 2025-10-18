import React from "react";
import Category from "../Category";
import { Suspense } from "react";

const Left = () => {
  return (
    <div>
      <Suspense
        fallback={<span className="loading loading-ring loading-xl"></span>}
      >
        <Category></Category>
      </Suspense>
    </div>
  );
};

export default Left;
