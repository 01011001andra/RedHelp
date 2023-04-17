import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BerandaBerita,
  BerandaCrousel,
  BerandaPertanyaan,
  Footer,
  Navbar,
} from "../../Components";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import VoicesTTS from "speechsynthesisutterance";

const Beranda = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [value, setValue] = useState(
    `Selamat datang, kami hadir untuk membantu berkolaborasi dan mendukung program Palang Merah Indonesia atau PMI, Jika kamu membutuhkan bantuan bisa menghubungi nomor Whatsapp 0895611861777`
  );
  const VoicesTTSS = VoicesTTS.init({
    lang: "id-ID",
    volume: 1.0,
    rate: 1.0,
  });

  const triggerSpeak = () => {
    VoicesTTS.speak(value);
    return;
  };

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

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  return (
    <>
      <Navbar />
      <div className="hero min-h-screen bg-primary py-24 2xl:py-0">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="./Blood.png" onClick={triggerSpeak} />

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
              to="carousel"
              spy={true}
              smooth={true}
            >
              Ayo Mulai
            </Link>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-white" id="carousel">
        <BerandaCrousel />
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
