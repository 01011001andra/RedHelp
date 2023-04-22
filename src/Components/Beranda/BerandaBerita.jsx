import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { Link } from "react-router-dom";

const BerandaBerita = () => {
  const beritaContent = [
    {
      image: "BeritaBeranda1.png",
      title: "Bolehkah Donor Darah Saat Puasa?",
      text: "Bulan ramadan menjadi bulan yang paling meresahkan bagi Palang Merah Indonesia.",
    },
    {
      image: "BeritaBeranda2.jpg",
      title: "Stok Darah PMI Jakarta Menipis",
      text: "Palang Merah Indonesia Menyatakan Persediaan Darah di Ibu Kota Jakarta Menipis, Hanya Bisa Memenuhi Kebutuhan Hingga 10 Hari Mendatang",
    },
    {
      image: "BeritaBeranda3.png",
      title: "Walikota Ajak Donor Darah",
      text: "PMI Kota Bandung optimis bisa mencapai target 400 kantong darah dalam kegiatan Hari Donor Darah Sedunia, pada Selasa, 14 Juni 2022.",
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
              <div className="card card-compact w-72 shadow-xl md:w-96 hover:-translate-y-4 dark:bg-secondary transition-all duration-500">
                <figure>
                  <img src={item.image} alt={item.title} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </div>
            </AnimationOnScroll>
          );
        })}
      </div>
      <Link
        to={"/berita"}
        className="btn btn-wide bg-primary rounded-lg text-white border-none"
      >
        Lebih Lengkap
      </Link>
    </div>
  );
};

export default BerandaBerita;
