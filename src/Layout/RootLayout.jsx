import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/HEader";

const RootLayout = () => {
  return (
    <div>
      <header>
        <Header />
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
