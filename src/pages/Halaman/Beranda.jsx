import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BerandaBerita,
  BerandaCarousel,
  BerandaPertanyaan,
  Footer,
  Helm,
  Navbar,
} from "../../Components";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import VoicesTTS from "speechsynthesisutterance";
import { animateScroll as scroll } from "react-scroll";

const Beranda = () => {
  const [user, setUser] = useState(null);
  let [mulai, setMulai] = useState(0);
  const navigate = useNavigate();
  const [value, setValue] = useState(
    `Selamat datang, kami hadir untuk membantu berkolaborasi dan mendukung program Palang Merah Indonesia atau PMI, Jika kamu membutuhkan bantuan bisa menghubungi nomor Whatsapp 0895611861777`
  );

  function handleMulai() {
    const intervalId = setInterval(() => {
      setMulai((prevMulai) => {
        if (prevMulai >= 100) {
          clearInterval(intervalId);
          return 0;
        }
        return prevMulai + 1;
      });
    }, 10);

    return () => clearInterval(intervalId);
  }

  const VoicesTTSS = VoicesTTS.init({
    lang: "id-ID",
    volume: 1.0,
    rate: 1.0,
  });

  const triggerSpeak = () => {
    VoicesTTS.speak(value);
    return;
  };

  // COMPONENT DID MOUNT TRIGGER TOMBOL ESC
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        triggerSpeak();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // COMPONENT DID MOUNT NGAMBIL DATA USER
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    scroll.scrollToTop({
      duration: 1000, // durasi animasi scroll (ms)
      delay: 0, // jeda sebelum animasi dimulai (ms)
      smooth: "easeInOutQuint", // jenis easing pada animasi scroll
    });
  }, []);

  useEffect(() => {
    if (mulai > 90) {
      scroll.scrollMore(1000);
    }
  }, [mulai]);
  return (
    <>
      <Helm title="Beranda" />
      <Navbar position="fixed" />
      <div
        className="hero min-h-screen bg-primary py-24 pt-32 2xl:pt-0
       2xl:py-0"
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-full h-full relative">
            {/* <h1 className="top-0 left-4 absolute text-warning border border-black bg-primary p-3 rounded-xl font-bold text-sm transition-all animate-pulse">
              
            </h1> */}
            <div className="chat chat-start md:chat-end absolute left-1/2 md:right-1/2 md:left-0 transition-all animate-bounce duration-1000">
              <div
                onClick={triggerSpeak}
                className="chat-bubble bg-primary border text-xs sm:text-sm shadow-2xl text-warning select-none"
              >
                KLIK GAMBAR INI ATAU TEKAN TOMBOL <br /> "ESC" UNTUK BANTUAN
                (Accesibility)
              </div>
            </div>
            <img src="./Blood.png" onClick={triggerSpeak} />
          </div>
          <div>
            <TypeAnimation
              sequence={["RedHelp", 2000, "We Help Everyone", 4000]}
              cursor={true}
              repeat={Infinity}
              className="text-3xl font-bold text-white"
            />
            <p className="py-6 text-white text-lg">
              Selamat datang{" "}
              <span className="font-bold text-white text-xl">
                {user?.displayName}
              </span>
              , kami hadir untuk membantu berkolaborasi dan mendukung program
              Palang Merah Indonesia (PMI) untuk menyelesaikan permasalahan
              kekurangan darah di Indonesia.
            </p>
            <Link
              className="btn btn-secondary bg-white text-primary rounded-md"
              spy={true}
              smooth={true}
              onClick={handleMulai}
            >
              Ayo Mulai
            </Link>
            <div
              className="radial-progress ml-10 text-white transition-all duration-1000"
              style={{ "--value": `${mulai}` }}
            >
              {mulai}%
            </div>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-white" id="carousel" name="wtf">
        <BerandaCarousel />
      </div>
      <div className="hero min-h-screen bg-white">
        <BerandaBerita />
      </div>
      <div className="hero min-h-screen bg-white">
        <BerandaPertanyaan />
      </div>
      <Footer />
    </>
  );
};

export default Beranda;
