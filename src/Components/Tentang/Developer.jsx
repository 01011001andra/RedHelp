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
      animateOnce={true}
      animateIn="animate__zoomIn"
      className="card mx-auto bg-white shadow-xl xl:px-2 hover:shadow w-full"
    >
      <img
        class="w-32 mx-auto rounded-full -mt-20 border-8 border-white"
        src={img}
        alt=""
      />
      <Link
        to={link}
        target={"_blank"}
        class="text-center mt-2 text-xl xl:text-3xl font-medium hover:text-primary"
      >
        {nama}
      </Link>
      <div class="text-center mt-2 font-light text-sm">{ig}</div>
      <div class="text-center font-normal text-lg">{panggilan}</div>
      <div class="mt-2 font-light text-sm w-full">
        <p className="w-full text-center px-4">{deskripsi}</p>
      </div>
      <hr class="mt-8" />
      <div class="flex p-4">
        <div class="w-1/2 text-center">
          <span class="font-bold text-sm md:text-base">{follower}</span>{" "}
          Followers
        </div>
        <div class="w-0 border border-gray-300"></div>
        <div class="w-1/2 text-center">
          <span class="font-bold text-sm md:text-base">{following}</span>{" "}
          Following
        </div>
      </div>
    </AnimationOnScroll>
  );
};

export default Developer;
