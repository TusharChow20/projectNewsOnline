import React from "react";
import Header from "../Components/HEader";
import Right from "../Components/Home/Right";
import NewsDetailsCart from "./NewsDetailsCart";
import { useLoaderData, useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../Components/Navbar";

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
      <header className="w-11/12 mx-auto py-2">
        <Navbar></Navbar>
      </header>
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <div className="mt-6">
            <NewsDetailsCart news={news}></NewsDetailsCart>
          </div>
        </div>
        <div className="col-span-3 mt-3">
          <Right></Right>
        </div>
      </div>
      <h1>This is news details</h1>
    </div>
  );
};

export default NewsDetails;
