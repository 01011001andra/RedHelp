import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const BerandaPertanyaan = () => {
  const pertanyaan = [
    {
      tabIndex: 0,
      title: "Focus me to see content",
      content: "tabIndex={0} attribute is necessary to make the div focusable",
    },
    {
      tabIndex: 1,
      title: "Focus me to see content",
      content: "tabIndex={1} attribute is necessary to make the div focusable",
    },
    {
      tabIndex: 2,
      title: "Focus me to see content",
      content: "tabIndex={2} attribute is necessary to make the div focusable",
    },
    {
      tabIndex: 3,
      title: "Focus me to see content",
      content: "tabIndex={3} attribute is necessary to make the div focusable",
    },
  ];
  return (
    <div className="hero-content flex flex-col w-full">
      <h1 className="text-primary text-2xl md:text-4xl font-bold mb-8 text-center">
        Pertanyaan yang Sering ditanyakan
      </h1>
      {pertanyaan.map((item, index) => (
        <AnimationOnScroll
          duration={1}
          animateIn="animate__flipInX"
          key={index}
          className="w-full"
        >
          <div
            key={item.tabIndex}
            tabIndex={item.tabIndex}
            className="collapse collapse-arrow border border-base-300 rounded-box w-full shadow-lg"
          >
            <div className="collapse-title text-xl font-medium">
              {item.title}
            </div>
            <div className="collapse-content">
              <p>{item.content}</p>
            </div>
          </div>
        </AnimationOnScroll>
      ))}
    </div>
  );
};

export default BerandaPertanyaan;
