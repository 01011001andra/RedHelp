import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const BerandaBerita = () => {
  const beritaContent = [
    {
      image: "Blood.png",
      title: "Manusia Ini Kekurangan Darah",
      text: "Cepat Tolong bantu manusia ini membutuhkan darah yang sangat banyak karena baru saja terjadi kecelakaan",
    },
    {
      image: "Blood.png",
      title: "Manusia Ini Kekurangan Darah",
      text: "Cepat Tolong bantu manusia ini membutuhkan darah yang sangat banyak karena baru saja terjadi kecelakaan",
    },
    {
      image: "Blood.png",
      title: "Manusia Ini Kekurangan Darah",
      text: "Cepat Tolong bantu manusia ini membutuhkan darah yang sangat banyak karena baru saja terjadi kecelakaan",
    },
    {
      image: "Blood.png",
      title: "Manusia Ini Kekurangan Darah",
      text: "Cepat Tolong bantu manusia ini membutuhkan darah yang sangat banyak karena baru saja terjadi kecelakaan",
    },
    {
      image: "Blood.png",
      title: "Manusia Ini Kekurangan Darah",
      text: "Cepat Tolong bantu manusia ini membutuhkan darah yang sangat banyak karena baru saja terjadi kecelakaan",
    },
    {
      image: "Blood.png",
      title: "Manusia Ini Kekurangan Darah",
      text: "Cepat Tolong bantu manusia ini membutuhkan darah yang sangat banyak karena baru saja terjadi kecelakaan",
    },
  ];
  return (
    <div className="hero-content flex flex-col">
      <h1 className="text-black text-4xl font-bold">Berita Terkini</h1>
      <div className="w-full flex flex-wrap hero-content">
        {beritaContent.map((item, index) => {
          return (
            <AnimationOnScroll
              duration={2}
              animateIn="animate__bounceIn"
              key={index}
            >
              <div className="card card-compact w-72 shadow-xl md:w-96">
                <figure>
                  <img src={item.image} alt={item.title} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <p>{item.text}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Baca Lebih</button>
                  </div>
                </div>
              </div>
            </AnimationOnScroll>
          );
        })}
      </div>
    </div>
  );
};

export default BerandaBerita;
