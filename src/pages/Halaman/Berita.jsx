import React, { useState, useEffect } from "react";
import { Footer, Navbar } from "../../Components";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Berita = () => {
  const [perPage, setPerPage] = useState(2);

  const newsData = [
    {
      id: 1,
      date: "16 April 2023",
      image: "./Berita1.png",
      title: "PMI Ungkap Kekhawatiran Merosotnya Stok Darah di Bulan Puasa",
      content:
        "Ketua Bidang Kerja Sama dan Kemitraan PMI DKI Jakarta Arya Sandhiyudha mengungkap kegelisahannya akan stok darah menjelang bulan puasa.Saat bulan puasa, masyarakat cenderung enggan melakukan donor darah dan hal tersebut akan berpengaruh pada stok darah yang tersedia[...]",
    },
    {
      id: 2,
      date: "16 April 2023",
      image: "./Berita1.png",
      title: "PMI Ungkap Kekhawatiran Merosotnya Stok Darah di Bulan Puasa",
      content:
        "Ketua Bidang Kerja Sama dan Kemitraan PMI DKI Jakarta Arya Sandhiyudha mengungkap kegelisahannya akan stok darah menjelang bulan puasa.Saat bulan puasa, masyarakat cenderung enggan melakukan donor darah dan hal tersebut akan berpengaruh pada stok darah yang tersedia[...]",
    },
    {
      id: 3,
      date: "16 April 2023",
      image: "./Berita1.png",
      title: "PMI Ungkap Kekhawatiran Merosotnya Stok Darah di Bulan Puasa",
      content:
        "Ketua Bidang Kerja Sama dan Kemitraan PMI DKI Jakarta Arya Sandhiyudha mengungkap kegelisahannya akan stok darah menjelang bulan puasa.Saat bulan puasa, masyarakat cenderung enggan melakukan donor darah dan hal tersebut akan berpengaruh pada stok darah yang tersedia[...]",
    },
    {
      id: 4,
      date: "16 April 2023",
      image: "./Berita1.png",
      title: "PMI Ungkap Kekhawatiran Merosotnya Stok Darah di Bulan Puasa",
      content:
        "Ketua Bidang Kerja Sama dan Kemitraan PMI DKI Jakarta Arya Sandhiyudha mengungkap kegelisahannya akan stok darah menjelang bulan puasa.Saat bulan puasa, masyarakat cenderung enggan melakukan donor darah dan hal tersebut akan berpengaruh pada stok darah yang tersedia[...]",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setPerPage(1);
      } else {
        setPerPage(2);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar />
      <div className="hero min-h-screen bg-white">
        <div className="hero-content w-full flex flex-col pt-10">
          <h1 className="text-black text-4xl font-bold ">Berita Terkini</h1>
          <Splide
            aria-label="My Favorite Images"
            options={{
              rewind: true,
              perPage: perPage,
            }}
            className="w-full max-w-xs md:max-w-xl xl:max-w-none"
          >
            {newsData.map((item) => {
              return (
                <SplideSlide className="mr-6" key={item.id}>
                  <div className="flex justify-center flex-col gap-3 items-center">
                    <h1 className="text-primary text-2xl font-bold">
                      {item.title}
                    </h1>
                    <img src={item.image} alt={item.title} />
                    <small>{item.date}</small>
                    <p>{item.content}</p>
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </div>
      <div className="hero min-h-screen bg-white w-full flex flex-col gap-8">
        <div className="hero-content w-full flex justify-start">
          <h1 className="text-black text-4xl font-bold ">Artikel Lainnya</h1>
        </div>
        <div className="hero-content w-full">
          <div className="card w-auto h-auto bg-white shadow-xl flex flex-col gap-8">
            {newsData.map((item) => {
              return (
                <div className="card-body shadow-xl rounded-lg" key={item.id}>
                  <div className="flex gap-8">
                    <img
                      className="hidden md:flex"
                      src={item.image}
                      alt={item.title}
                      style={{ width: "350px" }}
                    />
                    <p>
                      <span className="card-title text-primary text-3xl">
                        {item.title}
                      </span>
                      <br />
                      {item.content}
                    </p>
                    <div className="card-actions justify-end"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Berita;
