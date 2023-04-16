import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const BerandaCrousel = () => {
  const slides = [
    {
      title: "Apakah donor darah aman?",
      content:
        "Orang yang berdonor darah adalah orang yang sehat. Kemudian darah yang didonorkan akan melalui uji saring untuk memastikan darah yang siap ditransfusi adalah darah yang sehat dan aman.",
      image: "BloodBag.png",
    },
    {
      title: "Kenapa harus donor darah?",
      content:
        "Karena kita mempunyai kebutuhan tahunan untuk pasien di rumah sakit. Jumlahnya sekitar 5 juta kantong setiap tahun. Prosedur yang dijalankan oleh PMI dalam pengelolaan darah adalah untuk menghasilkan darah yang aman bagi pasien yang harus diselamatkan.",
      image: "salaman.jpg",
    },
    {
      title: "Kenapa harus donor darah?",
      content:
        "Karena kita mempunyai kebutuhan tahunan untuk pasien di rumah sakit. Jumlahnya sekitar 5 juta kantong setiap tahun. Prosedur yang dijalankan oleh PMI dalam pengelolaan darah adalah untuk menghasilkan darah yang aman bagi pasien yang harus diselamatkan.",
      image: "salaman.jpg",
    },
  ];
  return (
    <div className="w-full flex flex-col xl:flex-row justify-between hero-content">
      <div className="w-3/6">
        <AnimationOnScroll duration={2} animateIn="animate__fadeInDown">
          <p className="font-bold text-4xl text-center">
            Ayo mengenal donor darah!!
          </p>
        </AnimationOnScroll>
      </div>
      <Splide
        aria-label="My Favorite Images"
        options={{
          rewind: true,
        }}
        className="w-full max-w-xs md:max-w-none"
      >
        {slides.map((item, index) => {
          return (
            <SplideSlide key={index} className="md:px-6">
              <AnimationOnScroll duration={2} animateIn="animate__fadeInDown">
                <div className="flex items-center justify-center gap-3">
                  <p className="flex flex-col gap-4">
                    <span className="text-3xl">{item.title}</span>
                    {item.content}
                  </p>
                  <img
                    src={item.image}
                    alt="Yandra Muslim"
                    className="mx-auto w-64 hidden md:flex"
                  />
                </div>
              </AnimationOnScroll>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default BerandaCrousel;
