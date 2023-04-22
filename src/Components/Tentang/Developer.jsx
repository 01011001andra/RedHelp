import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";

const Developer = ({
  img,
  nama,
  ig,
  link,
  panggilan,
  deskripsi,
  follower,
  following,
}) => {
  return (
    <AnimationOnScroll
      duration={1}
      animateIn="animate__zoomIn"
      className="card mx-auto bg-white dark:bg-accent shadow-xl xl:px-2 hover:shadow w-full"
    >
      <img
        className="w-32 mx-auto rounded-full -mt-20 border-8 border-white"
        src={img}
        alt=""
      />
      <h1 className="text-center mt-2 text-xl xl:text-3xl font-medium ">
        {nama}
      </h1>
      <Link
        to={link}
        target={"_blank"}
        className="text-center mt-2 font-light text-sm hover:text-primary underline"
      >
        {ig}
      </Link>
      <div className="text-center font-normal text-lg">{panggilan}</div>
      <div className="mt-2 font-light text-sm w-full">
        <p className="w-full text-center px-4">{deskripsi}</p>
      </div>
      <hr className="mt-8" />
      <div className="flex p-4">
        <div className="w-1/2 text-center">
          <span className="font-bold text-sm md:text-base">{follower}</span>{" "}
          Followers
        </div>
        <div className="w-0 border border-gray-300"></div>
        <div className="w-1/2 text-center">
          <span className="font-bold text-sm md:text-base">{following}</span>{" "}
          Following
        </div>
      </div>
    </AnimationOnScroll>
  );
};

export default Developer;
