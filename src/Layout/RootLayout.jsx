import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../Components/HEader";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import Left from "../Components/Home/Left";
import Right from "../Components/Home/Right";
import Loading from "../Pages/Loading";

// const RootLayout = () => {
//   return (
//     <div>
//       <header>
//         <Header />
//         <section className="w-10/12 mx-auto mt-10">
//           <LatestNews></LatestNews>
//         </section>
//         <nav className="w-10/12 mx-auto mt-10">
//           <Navbar></Navbar>
//         </nav>
//       </header>
//       <main className="w-11/12 mx-auto mt-10 grid grid-cols-12">
//         <aside className="col-span-3 sticky h-fit top-3">
//           <Left></Left>
//         </aside>
//         <main className="col-span-6">
//           <Outlet></Outlet>
//         </main>

//         <aside className="col-span-3 self-start sticky h-fit top-0">
//           <Right></Right>
//         </aside>
//       </main>
//     </div>
//   );
// };
const RootLayout = () => {
  const { state } = useNavigation();
  return (
    <div className="min-h-screen bg-base-100">
      <header>
        <Header />
        <section className="w-full px-4 sm:w-11/12 md:w-10/12 mx-auto mt-6 sm:mt-8 md:mt-10">
          <LatestNews />
        </section>
        <nav className="w-full px-4 sm:w-11/12 md:w-10/12 mx-auto mt-6 sm:mt-8 md:mt-10">
          <Navbar />
        </nav>
      </header>

      <main className="w-full px-4 sm:w-11/12 mx-auto mt-6 sm:mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
        {/* Left Sidebar - Categories (Hidden on mobile, shown on large screens) */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-3 self-start h-fit max-h-[calc(100vh-2rem)] overflow-y-auto">
          <Left />
        </aside>

        {/* Main Content Area */}
        <section className="col-span-1 lg:col-span-6">
          {state == "loading" ? <Loading /> : <Outlet />}
        </section>

        {/* Right Sidebar - Social & Extras (Hidden on mobile, shown on large screens) */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-3 self-start h-fit max-h-[calc(100vh-2rem)] overflow-y-auto">
          <Right />
        </aside>
      </main>
    </div>
  );
};

export default RootLayout;
