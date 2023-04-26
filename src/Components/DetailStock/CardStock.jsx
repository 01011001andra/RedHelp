import React from "react";

const CardStock = () => {
  return (
    <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 xl:w-64 xl:h-64 2xl:w-72 2xl:h-72 flex flex-col justify-between items-center shadow-lg bg-white dark:bg-secondary">
      <div></div>
      <div></div>
      <div className="w-full flex gap-5 items-center justify-center ">
        <h1 className="font-bold text-sm sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl">
          A+
        </h1>
        <img src="./blood1.png" alt="bloods" className="h-10 w-10" />
      </div>
      <small className="w-full text-start pb-5 pl-5 text-sm xl:text-3xl">
        2
      </small>
    </div>
  );
};

export default CardStock;
