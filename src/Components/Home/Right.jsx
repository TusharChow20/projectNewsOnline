

import React from "react";
import Social from "./Social";
import FindUs from "./FindUs";
import QZone from "./QZone";

const Right = () => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-4">
        <Social />
      </div>
      <div className="bg-white rounded-lg shadow-sm p-4">
        <FindUs />
      </div>
      <div className="bg-white rounded-lg shadow-sm p-4">
        <QZone />
      </div>
    </div>
  );
};

export default Right;
