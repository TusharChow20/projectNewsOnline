import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../../public/loading.json"; // adjust the path if needed

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <Lottie
        animationData={loadingAnimation}
        loop={true}
        className="w-100 h-100"
      />
    </div>
  );
};

export default Loading;
