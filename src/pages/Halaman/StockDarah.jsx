import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Footer, Helm } from "../../Components";
import { MdDateRange } from "react-icons/md";
import { auth } from "../../firebaseConfig";
import { animateScroll as scroll } from "react-scroll";

const StockDarah = () => {
  const newsData = [
    {
      id: 1,
      image: "./BloodBank.png",
      title: "Ada Yang Membutuhkan Darah!!! ",
      content: "Ayo Tolong Dia!",
    },
    {
      id: 2,
      image: "./BloodBank.png",
      title: "Ada Yang Membutuhkan Darah!!!",
      content: "Ayo Tolong Dia!",
    },
    {
      id: 3,
      image: "./BloodBank.png",
      title: "Ada Yang Membutuhkan Darah!!!",
      content: "Ayo Tolong Dia!",
    },
  ];
  const navigate = useNavigate();
  const [display, setDisplay] = useState(null);

  // JIKA BELUM LOGIN
  const DisplayTrue = () => {
    return (
      <div className="w-full min-h-screen items-center justify-center flex flex-col gap-10 max-w-xs xl:max-w-6xl mx-auto">
        <Helm title="Stock Darah" />
        <p className="text-center">
          Kamu Tampaknya belum <span className="font-bold">Masuk</span>,
          Silahkan Masuk untuk mendapatkan informasi Stok Darah dari kami.
        </p>
        <div className="flex gap-8">
          <button
            className="px-5 py-2 rounded-md border border-black hover:bg-black hover:text-white"
            onClick={() => navigate("/login")}
          >
            Masuk
          </button>
          <button
            className="font-bold px-5 py-2 rounded-md bg-primary text-white hover:bg-black hover:text-white"
            onClick={() => navigate("/register")}
          >
            Daftar
          </button>
        </div>
      </div>
    );
  };

  useEffect(() => {
    onAuthStateChanged(auth, (result) => {
      if (result) {
        setDisplay(true);
        return;
      }
    });
    scroll.scrollToTop({
      duration: 1000, // durasi animasi scroll (ms)
      delay: 0, // jeda sebelum animasi dimulai (ms)
      smooth: "easeInOutQuint", // jenis easing pada animasi scroll
    });
  }, []);

  return (
    <>
      <Helm title="Stock Darah" />
      <Navbar position="fixed" />
      <div className=" bg-white">
        {!display ? (
          <DisplayTrue />
        ) : (
          <>
            <div className="w-full h-full flex items-center justify-center flex-col justify-col pt-32 hero-content mx-auto">
              <h1 className="text-xl xl:text-3xl font-bold text-black">
                Info Stok Darah
              </h1>
              <img src="./Grafik.png" alt="Grafik" width={250} height={250} />
              <Link
                to={"/detailstock"}
                className="text-primary hover:text-black"
              >
                Lihat Disini
              </Link>
            </div>
            <div className="hero min-h-screen bg-white w-full flex flex-col gap-8 ">
              <h1 className="text-black text-xl xl:text-3xl font-bold ">
                Informasi Kebutuhan Stok Darah
              </h1>
              <div className="hero-content w-full flex flex-col gap-8">
                {newsData.map((item) => {
                  return (
                    <div
                      className="card w-full bg-white shadow-md  flex flex-col gap-8"
                      key={item.id}
                    >
                      <div className="card-body shadow-xl rounded-lg">
                        <div className="flex gap-8">
                          <img
                            className="hidden md:flex"
                            src={item.image}
                            alt={item.title}
                            style={{ width: "150px", height: "150px" }}
                          />
                          <div className="flex flex-col gap-4 w-full h-full">
                            <span className="card-title text-primary text-lg xl:text-3xl">
                              {item.title}
                            </span>
                            <p className="flex items-center gap-2">
                              {item.content}
                            </p>

                            <div className="flex justify-end">
                              {/* The button to open modal */}
                              <label
                                htmlFor="my-modal"
                                className="btn bg-primary rounded-lg text-white hover:bg-black"
                              >
                                Lihat
                              </label>

                              {/* Put this part before </body> tag */}
                              <input
                                type="checkbox"
                                id="my-modal"
                                className="modal-toggle"
                              />
                              <div className="modal ">
                                <div className="modal-box">
                                  <h3 className="font-bold text-lg text-center">
                                    Dibutuhkan Golongan Darah AB+
                                  </h3>
                                  <img
                                    src="./BloodBank.png"
                                    alt="BloddBank"
                                    className="mx-auto"
                                  />
                                  <p className="py-4">
                                    Halo, saya Joko Subianto dari Kota Batam.
                                    Saat ini teman saya yang bernama Puan Elina
                                    Maharani sedang membutuhkan sebuah darah
                                    yang bergolongan AB+. Saat ini, teman saya
                                    saat ini sedang dirawat di RS. Awal Bros,
                                    kota Batam. Untuk teman-teman yang memiliki
                                    golongan darah AB dan sukarela untuk
                                    mendonorkan darahnya bida datang ke Rumah
                                    Sakit Awal Bros yang beralamatkan di Jalan
                                    Gajah Mada, No.Kav.1, Kec. Lubuk Baja atau
                                    dapat dihubungi Nomor ini: 0858721456881
                                  </p>
                                  <div className="modal-action">
                                    <label htmlFor="my-modal" className="btn">
                                      Close
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default StockDarah;
