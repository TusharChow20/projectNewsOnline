import React from "react";
import Header from "../Components/HEader";
import Right from "../Components/Home/Right";
import NewsDetailsCart from "./NewsDetailsCart";
import { useLoaderData, useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";

const NewsDetails = () => {
  const [news, setNews] = useState({});
  const { data } = useLoaderData();
  const { id } = useParams();
  useEffect(() => {
    const newsD = data.find((singleNews) => singleNews.id == id);
    setNews(newsD);
  }, [data, id]);
  return (
    <div className="px-15 ">
      <header>
        <Header></Header>
      </header>
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <h1 className="px-10 font-semibold text-2xl mb-13">Online News</h1>
          <NewsDetailsCart news={news}></NewsDetailsCart>
        </div>
        <div className="col-span-3">
          <Right></Right>
        </div>
      </div>
      <h1>This is news details</h1>
    </div>
  );
};

export default NewsDetails;
