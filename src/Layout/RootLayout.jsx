import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/HEader";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import Left from "../Components/Home/Left";
import Right from "../Components/Home/Right";

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
      <main className="w-11/12 mx-auto mt-10 grid grid-cols-12">
        <aside className="col-span-3 sticky h-fit top-3">
          <Left></Left>
        </aside>
        <main className="col-span-6">
          <Outlet></Outlet>
        </main>

        <aside className="col-span-3 self-start sticky h-fit top-0">
          <Right></Right>
        </aside>
      </main>
    </div>
  );
};

export default RootLayout;
