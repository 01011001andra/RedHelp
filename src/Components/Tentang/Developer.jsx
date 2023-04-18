import React from "react";

const Developer = ({
  img,
  nama,
  ig,
  panggilan,
  deskripsi,
  follower,
  following,
}) => {
  return (
    <div class="card w-96 mx-auto bg-white  shadow-xl hover:shadow">
      <img
        class="w-32 mx-auto rounded-full -mt-20 border-8 border-white"
        src={img}
        alt=""
      />
      <div class="text-center mt-2 text-3xl font-medium">{nama}</div>
      <div class="text-center mt-2 font-light text-sm">{ig}</div>
      <div class="text-center font-normal text-lg">{panggilan}</div>
      <div class="px-6 text-center mt-2 font-light text-sm">
        <p>{deskripsi}</p>
      </div>
      <hr class="mt-8" />
      <div class="flex p-4">
        <div class="w-1/2 text-center">
          <span class="font-bold">{follower}</span> Followers
        </div>
        <div class="w-0 border border-gray-300"></div>
        <div class="w-1/2 text-center">
          <span class="font-bold">{following}</span> Following
        </div>
      </div>
    </div>
  );
};

export default Developer;
