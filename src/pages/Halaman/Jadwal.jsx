import React from "react";
import { Navbar, Footer, Helm } from "../../Components";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Jadwal = () => {
  const newsData = [
    {
      id: 1,
      date: "16 April 2023",
      image: "./pmi1.png",
      title: "PMI Batam ",
      content: "Ketua Bidang Kerja Sama ",
    },
    {
      id: 2,
      date: "16 April 2023",
      image: "./pmi2.png",
      title: "PMI Bintan ",
      content: "Ketua Bidang Kerja",
    },
    {
      id: 3,
      date: "16 April 2023",
      image: "./pmi3.png",
      title: "PMI Tanjung Pinang ",
      content: "Ketua Bidang Kerja ",
    },
    {
      id: 4,
      date: "16 April 2023",
      image: "./pmi4.png",
      title: "PMI Lingga ",
      content: "Ketua Bidang ",
    },
  ];

  return (
    <div className="bg-[#D9D9D9] mt-0">
      <Helm title="Jadwal" />
      <Navbar position="fixed" />
      <div className="hero min-h-screen bg-white">
        <div className="hero-content w-full flex flex-col pt-10">
          <div className="hero-content w-full flex justify-start">
            <h1 className="text-black text-4xl font-bold ">Unit Donor Darah</h1>
          </div>
          <Splide
            aria-label="My Favorite Images"
            options={{
              rewind: true,
              perPage: 1,
            }}
            className="w-full max-w-xs md:max-w-xl xl:max-w-none"
          >
            {newsData.map((item) => {
              return (
                <SplideSlide className="mr-6" key={item.id}>
                  <div className="flex justify-center flex-col gap-3 items-center">
                    <img src={item.image} alt={item.title} />
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </div>
      <div className="hero min-h-screen bg-white w-full flex flex-col gap-8">
        <div className="hero-content w-full flex justify-start">
          <h1 className="text-black text-4xl font-bold ">Event Donor Darah</h1>
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
                    <div className="justify-end mt-36">
                      <button className="btn bg-primary rounded-lg text-white hover:bg-primary">
                        Daftar
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Jadwal;
