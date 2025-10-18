import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router";

const NewsCategory = () => {
  const { id } = useParams();
  const { data } = useLoaderData();
  //   console.log(data);
  const [news, setNews] = useState([]);

  useEffect(() => {
    if(id === '0'){
        setNews(data)
    }
    else if (id ==='1'){
        const filteredData = data.filter(
      (eachData) => eachData.others.is_today_pick === true
    );
     setNews(filteredData);
    }
    else{
        const filteredData = data.filter(
      (eachData) => eachData.category_id === parseInt(id)
    );
    setNews(filteredData);
    }
  }, [data, id]);

  return (
    <div>
      <h1>Total News : {news.length}</h1>
    </div>
  );
};

export default NewsCategory;
