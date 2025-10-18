import React from "react";
import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router";

const NewsCategory = () => {
  const { id } = useParams();
  const { data } = useLoaderData();
  //   console.log(data);

  useEffect(() => {
    const filteredData = data.filter(
      (eachData) => eachData.category_id === parseInt(id)
    );
    console.log(filteredData);
  }, [data, id]);

  return (
    <div>
      <h1>This is navbaR</h1>
    </div>
  );
};

export default NewsCategory;
