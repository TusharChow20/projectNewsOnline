import React from "react";
import { useParams } from "react-router";

const NewsCategory = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>This is navbaR</h1>
    </div>
  );
};

export default NewsCategory;
