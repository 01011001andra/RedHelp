import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";

const BerandaCrousel = () => {
  return (
    <Splide aria-label="My Favorite Images">
      <SplideSlide>
        <img src="Blood.png" alt="Image 1" />
      </SplideSlide>
      <SplideSlide>
        <img src="Il.png" alt="Image 2" />
      </SplideSlide>
    </Splide>
  );
};

export default BerandaCrousel;
