import React from "react";
import { TfiClose } from "react-icons/tfi";
import { GrInstagram } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-primary dark:bg-secondary">
      <div className="max-w-6xl flex-col gap-10 lg:flex-row footer mx-auto justify-between">
        <div>
          <img
            src="../Logo-white.PNG"
            alt="Logo"
            className="w-32 select-none"
          />
        </div>
        <div className="text-white">
          <span className="font-bold text-white">redhelp.my.id</span>
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
          <Link to={"#"} className="flex items-center gap-2">
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
        <div>
          <span className="font-bold text-white">Made with ❤️</span>
          <div className="flex flex-wrap gap-2">
            <img src="./html.png" alt="html" className="w-8" />
            <img
              src="./tailwindcss.png"
              alt="tailwindcss"
              className="w-8 h-6 my-auto"
            />
            <img src="./js.png" alt="js" className="w-8" />
            <img src="./react.png" alt="react" className="w-8" />
            <img src="./redux-icon.png" alt="redux" className="w-8" />
          </div>
          <div className="flex flex-wrap gap-2">
            <img src="./daisyui.png" alt="daisyui" className="w-20" />
            <img
              src="./firebase.png"
              alt="firebase"
              className="w-24 dark:bg-white"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
