import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/HEader";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";

const RootLayout = () => {
  return (
    <div>
      <header>
        <Header />
        <section className="w-10/12 mx-auto mt-10">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-10/12 mx-auto mt-10">
          <Navbar></Navbar>
        </nav>
      </header>
      <main>
        <section className="left_sec"></section>
        <main>
          <Outlet></Outlet>
        </main>
        <section className="right_sec  "></section>
      </main>
    </div>
  );
};

export default RootLayout;
