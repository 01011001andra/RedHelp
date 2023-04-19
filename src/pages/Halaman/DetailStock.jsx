import React from "react";
import { Footer, Navbar } from "../../Components";

const DetailStock = () => {
  return (
    <>
      <Navbar position={"fixed"} />
      <div className="w-full max-w-xs sm:max-w-xl md:max-w-3xl xl:max-w-6xl 2xl:max-w-7xl mx-auto pt-32 min-h-screen flex flex-wrap">
        {/* card */}
        <div className="w-32 h-32 flex flex-col justify-between items-center shadow-lg">
          <div></div>
          <div className="w-full flex gap-5 items-center justify-center">
            <h1 className="font-bold text-2xl">A+</h1>
            <img src="./blood1.png" alt="bloods" className="h-10 w-10" />
          </div>
          <small className="w-full text-start pl-5">2</small>
        </div>
        {/* card */}
        <div className="w-32 h-32 flex flex-col justify-between items-center shadow-lg">
          <div></div>
          <div className="w-full flex gap-5 items-center justify-center">
            <h1 className="font-bold text-2xl">A+</h1>
            <img src="./blood1.png" alt="bloods" className="h-10 w-10" />
          </div>
          <small className="w-full text-start pl-5">2</small>
        </div>
        {/* card */}
        <div className="w-32 h-32 flex flex-col justify-between items-center shadow-lg">
          <div></div>
          <div className="w-full flex gap-5 items-center justify-center">
            <h1 className="font-bold text-2xl">A+</h1>
            <img src="./blood1.png" alt="bloods" className="h-10 w-10" />
          </div>
          <small className="w-full text-start pl-5">2</small>
        </div>
        {/* card */}
        <div className="w-32 h-32 flex flex-col justify-between items-center shadow-lg">
          <div></div>
          <div className="w-full flex gap-5 items-center justify-center">
            <h1 className="font-bold text-2xl">A+</h1>
            <img src="./blood1.png" alt="bloods" className="h-10 w-10" />
          </div>
          <small className="w-full text-start pl-5">2</small>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailStock;
