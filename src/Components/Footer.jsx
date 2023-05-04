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
          <span className="font-bold text-white">Resource</span>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://www.w3schools.com/html/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./html.png" alt="html" className="w-8" />
            </a>
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./tailwindcss.png"
                alt="tailwindcss"
                className="w-8 h-6 my-auto"
              />
            </a>
            <a
              href="https://www.javascript.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./js.png" alt="js" className="w-8" />
            </a>
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./react.png" alt="react" className="w-8" />
            </a>
            <a
              href="https://redux-toolkit.js.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./redux-icon.png" alt="redux" className="w-8" />
            </a>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://daisyui.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./daisyui.png" alt="daisyui" className="w-20" />
            </a>
            <a
              href="https://firebase.google.com/?hl=id"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./firebase.png"
                alt="firebase"
                className="w-24 bg-white"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
