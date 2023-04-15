import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const BerandaCrousel = () => {
  return (
    <div className="w-full flex flex-col xl:flex-row justify-between hero-content">
      <div className="w-full ">
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
      >
        <SplideSlide>
          <AnimationOnScroll duration={2} animateIn="animate__fadeInDown">
            <div className="flex items-center justify-center gap-3">
              <p className="flex flex-col gap-4">
                <span className="text-3xl">Apakah donor darah aman?</span>
                Orang yang berdonor darah adalah orang yang sehat. Kemudian
                darah yang didonorkan akan melalui uji saring untuk memastikan
                darah yang siap ditransfusi adalah darah yang sehat dan aman.
              </p>
              <img
                src="BloodBag.png"
                alt="Yandra Muslim"
                className="mx-auto w-64"
              />
            </div>
          </AnimationOnScroll>
        </SplideSlide>
        <SplideSlide>
          <AnimationOnScroll duration={2} animateIn="animate__fadeInDown">
            <div className="flex items-center justify-center gap-3">
              <p className="flex flex-col gap-4">
                <span className="text-3xl">Kenapa harus donor darah?</span>
                Karena kita mempunyai kebutuhan tahunan untuk pasien di rumah
                sakit. Jumlahnya sekitar 5 juta kantong setiap tahun. Prosedur
                yang dijalankan oleh PMI dalam pengelolaan darah adalah untuk
                menghasilkan darah yang aman bagi pasien yang harus
                diselamatkan.
              </p>
              <img src="salaman.jpg" alt="Image 2" className="mx-auto w-64" />
            </div>
          </AnimationOnScroll>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default BerandaCrousel;
