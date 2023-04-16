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

const Beranda = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  return (
    <>
      <Navbar />
      <div className="hero min-h-screen bg-primary">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="./Blood.png" />

          <div>
            <TypeAnimation
              sequence={["RedHelp", 2000, "We Help Everyone", 4000]}
              cursor={true}
              repeat={Infinity}
              // style={{ fontSize: "2em" }}
              className="text-5xl font-bold text-white"
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
       <BerandaPertanyaan/>
      </div>
      <Footer />
    </>
  );
};

export default Beranda;
