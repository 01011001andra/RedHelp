import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Footer } from "../../Components";
import { auth } from "../../firebaseConfig";

const Stock = () => {
  const navigate = useNavigate("");
  const [display, setDisplay] = useState(null);

  // JIKA LOGIN
  const DisplayTrue = () => {
    return (
      <div className="w-full h-full items-center justify-center flex flex-col gap-10 max-w-xs xl:max-w-6xl mx-auto">
        <p className="text-center">
          Kamu Tampaknya Belum <span className="font-bold">Login</span>,
          Silahkan login untuk mendapatkan notifikasi dari kami. <br /> "Asyhadu
          Alla Ilaha Illallah Wa Asyhadu Anna Muhammadar Rasulullah"
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
  }, []);

  return (
    <div>
      <Navbar />
      <div className="w-full h-screen flex">
        {!display ? (
          <DisplayTrue />
        ) : (
          <div>
            <p>NOTIFIKASI</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Stock;
