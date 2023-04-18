import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Footer, Helm } from "../../Components";
import { auth } from "../../firebaseConfig";
import { animateScroll as scroll } from "react-scroll";

const StockDarah = () => {
  const navigate = useNavigate();
  const [display, setDisplay] = useState(null);

  // JIKA BELUM LOGIN
  const DisplayTrue = () => {
    return (
      <div className="w-full h-full items-center justify-center flex flex-col gap-10 max-w-xs xl:max-w-6xl mx-auto">
        <Helm title="Stock Darah" />
        <p className="text-center">
          Kamu Tampaknya Belum <span className="font-bold">Login</span>,
          Silahkan login untuk mendapatkan informasi Stok Darah dari kami.{" "}
          <br /> "Asyhadu Alla Ilaha Illallah Wa Asyhadu Anna Muhammadar
          Rasulullah"
        </p>
        <div className="flex gap-8">
          <button
            className="px-5 py-2 rounded-md border border-black"
            onClick={() => navigate("/login")}
          >
            Masuk
          </button>
          <button
            className="font-bold px-5 py-2 rounded-md bg-primary text-white"
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
      <div className="hero min-h-screen">
        {!display ? (
          <DisplayTrue />
        ) : (
          <div className="w-full h-full flex items-center justify-center flex-col justify-col ">
            <h1 className="text-xl font-bold text-black">Info Stok Darah</h1>
            <img src="./Grafik.png" alt="Grafik" className="px-4" />
            <h1>Hello Guys</h1>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default StockDarah;
