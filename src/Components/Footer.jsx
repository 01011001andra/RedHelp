import React from "react";
import { TfiClose } from "react-icons/tfi";
import { GrInstagram } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  const style = { color: "white" };
  return (
    <footer className="footer p-10 bg-primary ">
      <div>
        <img src="./Logo-white.PNG" alt="Logo" className="w-32 select-none" />
        <TfiClose size={30} className="mx-auto" />
        <img src="./Il.png" alt="Logo" className="w-32 select-none" />
      </div>
      <div className="text-white">
        <span className="font-bold text-white">
          https://redhelp-65f27.web.app
        </span>
        <Link
          className="flex items-center gap-2"
          to={"https://www.instagram.com/infinitelearning_id/"}
          target="_blank"
        >
          <GrInstagram /> Instagram
        </Link>
        <Link
          className="flex items-center gap-2 "
          to={"https://twitter.com/MuslimYandra"}
          target="_blank"
        >
          <BsTwitter />
          Twitter
        </Link>
        <Link className="flex items-center gap-2">
          <MdOutlineEmail /> Email
        </Link>
      </div>
      <div>
        <span className="font-bold text-white">Komunitas</span>
        <p className="text-white"> Peduli Sesama Indonesia</p>
        <p className="text-white"> Sahabat Donor</p>
        <p className="text-white"> Blood For Life</p>
      </div>
      <div>
        <span className="font-bold text-white">Perusahaan</span>
        <Link to={"/tentang"} className="text-white">
          {" "}
          Tentang Kami
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
