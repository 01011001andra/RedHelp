import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const BerandaCarousel = () => {
  return (
    <div className="w-full flex flex-col xl:flex-row justify-between hero-content">
      <div className="w-3/6">
        <AnimationOnScroll
          duration={2}
          animateIn="animate__fadeInDown"
          className="w-full"
        >
          <p className="font-bold text-xl md:text-2xl text-center">
            Ayo mengenal donor darah!!
          </p>
        </AnimationOnScroll>
      </div>
      <AnimationOnScroll
        duration={2}
        animateIn="animate__fadeInDown"
        className="w-full max-w-xs md:max-w-none"
      >
        <Splide
          aria-label="My Favorite Images"
          options={{
            rewind: true,
          }}
        >
          <SplideSlide className="md:px-6">
            <div className="flex items-center justify-center gap-3">
              <p className="flex flex-col gap-4 text-sm">
                <span className="text-xl md:text-3xl">
                  Apakah donor darah aman?
                </span>
                Orang yang berdonor darah adalah orang yang sehat. Kemudian
                darah yang didonorkan akan melalui uji saring untuk memastikan
                darah yang siap ditransfusi adalah darah yang sehat dan aman.
              </p>
              <img
                src="./BloodBag.png"
                alt="RedHelp"
                className="mx-auto w-64 hidden md:flex"
              />
            </div>
          </SplideSlide>
          <SplideSlide className="md:px-6">
            <div class="flex items-center justify-center flex-row gap-3">
              <ol type="1" class="list-decimal list-inside">
                <p class="flex flex-col gap-4 text-sm">
                  <span class="text-sm md:text-xl font-bold mb-3">
                    Apa saja syarat donor darah?
                  </span>
                </p>
                <li class="text-xs sm:text-sm md:text-base text-black">
                  Berat badan minimal 45 kg.
                </li>
                <li class="text-xs sm:text-sm md:text-base text-black">
                  Tekanan darah, denyut nadi, dan kadar hemoglobin dalam batas
                  normal yang ditetapkan.
                </li>
                <li class="text-xs sm:text-sm md:text-base text-black">
                  Tidak sedang dalam keadaan sakit atau mengonsumsi obat-obatan
                  tertentu yang dapat mempengaruhi kesehatan atau kualitas
                  darah.
                </li>
                <li class="text-xs sm:text-sm md:text-base text-black">
                  Tidak sedang hamil atau menyusui.
                </li>
                <li class="text-xs sm:text-sm md:text-base text-black">
                  Tidak pernah melakukan tindakan-tindakan yang berisiko tinggi
                  terhadap penularan penyakit menular, seperti melakukan
                  hubungan seksual tidak aman, menggunakan narkoba suntik, atau
                  mengonsumsi obat-obatan terlarang.
                </li>
              </ol>
              <img
                src="./salaman.jpg"
                alt="RedHelp"
                class="w-64 hidden md:flex"
              />
            </div>
          </SplideSlide>
        </Splide>
      </AnimationOnScroll>
    </div>
  );
};

export default BerandaCarousel;
