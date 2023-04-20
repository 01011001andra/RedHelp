import React from "react";

const ProfilCard = ({ title1, text1, title2, text2 }) => {
  return (
    <div className="flex gap-5 w-full h-full">
      <div className="w-1/2 font-thin h-28 border border-gray-400  shadow-xl rounded-lg flex flex-col justify-center gap-3 py-3 px-4">
        <h1 className="text-sm md:text-xl text-black font-bold">{title1}</h1>
        <span className="font-bold text-xs md:text-lg text-slate-500">
          {text1}
        </span>
      </div>
      <div className="w-1/2 font-thin h-28 border border-gray-400  shadow-xl rounded-lg flex flex-col justify-center gap-3 py-3 px-4">
        <h1 className="text-sm md:text-xl text-black font-bold">{title2}</h1>
        <span className="font-bold text-xs md:text-lg text-slate-500">
          {text2}
        </span>
      </div>
    </div>
  );
};

export default ProfilCard;
