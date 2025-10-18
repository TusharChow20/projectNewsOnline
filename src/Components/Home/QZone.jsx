import React from "react";
import classImg from "../../assets/class.png";
import playgroundImg from "../../assets/playground.png";
import swimmingImg from "../../assets/swimming.png";
const QZone = () => {
  return (
    <div className="mt-3 bg-gray-100 p-4">
      <h1 className="font-semibold text-xl">Q-Zone</h1>
      <img src={classImg} alt="" />
      <img src={playgroundImg} alt="" />
      <img src={swimmingImg} alt="" />
    </div>
  );
};

export default QZone;
