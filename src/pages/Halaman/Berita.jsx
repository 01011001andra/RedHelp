import React from "react";
import { Footer, Navbar } from "../../Components";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Berita = () => {
  const newsData = [
    {
      id: 1,
      image: "./Berita1.png",
      title: "PMI Ungkap Kekhawatiran Merosotnya Stok Darah di Bulan Puasa",
      content:
        "Ketua Bidang Kerja Sama dan Kemitraan PMI DKI Jakarta Arya Sandhiyudha mengungkap kegelisahannya akan stok darah menjelang bulan puasa.Saat bulan puasa, masyarakat cenderung enggan melakukan donor darah dan hal tersebut akan berpengaruh pada stok darah yang tersedia[...]",
    },
    {
      id: 2,
      image: "./Berita1.png",
      title: "PMI Ungkap Kekhawatiran Merosotnya Stok Darah di Bulan Puasa",
      content:
        "Ketua Bidang Kerja Sama dan Kemitraan PMI DKI Jakarta Arya Sandhiyudha mengungkap kegelisahannya akan stok darah menjelang bulan puasa.Saat bulan puasa, masyarakat cenderung enggan melakukan donor darah dan hal tersebut akan berpengaruh pada stok darah yang tersedia[...]",
    },
    {
      id: 3,
      image: "./Berita1.png",
      title: "PMI Ungkap Kekhawatiran Merosotnya Stok Darah di Bulan Puasa",
      content:
        "Ketua Bidang Kerja Sama dan Kemitraan PMI DKI Jakarta Arya Sandhiyudha mengungkap kegelisahannya akan stok darah menjelang bulan puasa.Saat bulan puasa, masyarakat cenderung enggan melakukan donor darah dan hal tersebut akan berpengaruh pada stok darah yang tersedia[...]",
    },
    {
      id: 4,
      image: "./Berita1.png",
      title: "PMI Ungkap Kekhawatiran Merosotnya Stok Darah di Bulan Puasa",
      content:
        "Ketua Bidang Kerja Sama dan Kemitraan PMI DKI Jakarta Arya Sandhiyudha mengungkap kegelisahannya akan stok darah menjelang bulan puasa.Saat bulan puasa, masyarakat cenderung enggan melakukan donor darah dan hal tersebut akan berpengaruh pada stok darah yang tersedia[...]",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="hero min-h-screen bg-white">
        <Splide
          aria-label="My Favorite Images"
          options={{ type: "loop", padding: "10rem" }}
        >
          <SplideSlide>
            <h1>Donor darah PMI</h1>
            <img src="./Berita1.png" alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
            <img src="Berita1.png" alt="Image 2" />
          </SplideSlide>
          <SplideSlide>
            <img src="Berita1.png" alt="Image 2" />
          </SplideSlide>
          <SplideSlide>
            <img src="Berita1.png" alt="Image 2" />
          </SplideSlide>
        </Splide>
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
