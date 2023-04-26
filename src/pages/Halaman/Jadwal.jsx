import React, { useEffect, useState } from "react";
import { Navbar, Footer, Helm } from "../../Components";
import { MdDateRange } from "react-icons/md";
import { animateScroll as scroll } from "react-scroll";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const Jadwal = () => {
  const [display, setDisplay] = useState(null);
  const navigate = useNavigate();

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
      image: "./pmi1.png",
      title: "PMI Bintan ",
      content: "Ketua Bidang Kerja",
    },
    {
      id: 3,
      date: "16 April 2023",
      image: "./pmi1.png",
      title: "PMI Tanjung Pinang ",
      content: "Ketua Bidang Kerja ",
    },
    {
      id: 4,
      date: "16 April 2023",
      image: "./pmi1.png",
      title: "PMI Lingga ",
      content: "Ketua Bidang ",
    },
  ];

  function handleBelumLogin() {
    if (display === true) {
      navigate("/registrasievent");
      return;
    }
    alert("Harap Login Terlebih Dahulu");
    navigate("/login");
    return;
  }

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
      <Helm title="Jadwal" />
      <Navbar position="fixed" />
      <div className="hero min-h-screen bg-white dark:bg-accent w-full flex flex-col gap-8 pt-32">
        <div className="hero-content w-full flex justify-center">
          <h1 className="text-black text-4xl font-bold ">Event Donor Darah</h1>
        </div>

        <div className="hero-content w-full flex flex-col gap-8">
          {newsData.map((item) => {
            return (
              <div
                className="card w-full bg-white dark:bg-secondary shadow-md  flex flex-col gap-8"
                key={item.id}
              >
                <div className="card-body shadow-xl rounded-lg">
                  <div className="flex gap-8">
                    <img
                      className="hidden md:flex"
                      src={item.image}
                      alt={item.title}
                      style={{ width: "350px" }}
                    />
                    <div className="w-full">
                      <span className="card-title text-primary text-3xl">
                        {item.title}
                      </span>
                      <br />
                      <div className="flex items-center gap-2">
                        <MdDateRange /> {item.date}
                      </div>
                    </div>
                    <div className="justify-end mt-36">
                      <button
                        onClick={handleBelumLogin}
                        className="btn bg-primary rounded-lg text-white hover:bg-black"
                      >
                        Daftar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Jadwal;
