import { format } from "date-fns";
import React from "react";

const Header = () => {
  return (
    <div className="text-center">
      <h1 className="unifrakturcook-bold text-5xl mt-5 opacity-50">
        The Hide News Online
      </h1>
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p className="text-[10px]  text-accent mt-3">
        {format(new Date(), "EEEE, MMMM d, yyyy")}
      </p>
      <p>Changes</p>
    </div>
  );
};

export default Header;
