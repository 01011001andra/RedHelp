import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/Io";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const navMenu = ["Beranda", "Jadwal", "Tentang", "Berita", "Notifikasi"];
  const navLink = ["/", "/jadwal", "/tentang", "/berita", "/notifikasi"];
  const [bgNav, setBgNav] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
      setBgNav(true);
    } else {
      setBgNav(false);
    }
  });
  return (
    <>
      <div
        className={`w-full h-28 flex items-center sticky top-0 left-0 transition-all duration-500 ${
          bgNav ? "bg-slate-100/40" : "bg-white"
        }`}
      >
        <nav className="w-full hidden xl:max-w-6xl mx-auto sm:flex justify-between items-center px-6 xl:px-0">
          <div className="flex gap-[85px]">
            <img src="./Logo.png" alt="logo" className="w-52" />
            <ul className="flex gap-[50px] items-center">
              {navMenu.map((item, index) => {
                return (
                  <Link
                    key={index}
                    className="cursor-pointer font-thin hover:font-bold"
                    to={navLink[index]}
                    spy={true}
                    smooth={true}
                  >
                    {item}
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="flex gap-[15px]">
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
        </nav>
        <nav className="w-full h-full sm:hidden">
          <div className="w-full h-full max-w-xl flex items-center justify-between px-3 md:px-6">
            <img src="./Logo.png" alt="logo" className="w-40" />

            <div
              className="cursor-pointer"
              onClick={() => {
                return setOpen(!open);
              }}
            >
              {!open && <GiHamburgerMenu size={30} color="white" />}
            </div>
          </div>
        </nav>
      </div>
      <div
        className={`w-3/4 h-screen sm:hidden bg-white top-0 left-0 fixed py-8 transform transition-all duration-700 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-full flex flex-col max-w-sm mx-auto px-3 gap-10 ">
          <div className="w-full flex justify-between items-center">
            <img src="./Logo.png" alt="logo" className="w-52" />
            <div
              className="cursor-pointer"
              onClick={() => {
                return setOpen(!open);
              }}
            >
              <IoMdClose size={35} />
            </div>
          </div>
          <ul className="flex flex-col">
            {navMenu.map((item, index) => {
              return (
                <Link
                  key={index}
                  className="cursor-pointer font-thin text-xl hover:font-bold border-y py-4"
                  to={navLink[index]}
                  spy={true}
                  smooth={true}
                  onClick={() => {
                    return setOpen(!open);
                  }}
                >
                  {item}
                </Link>
              );
            })}
          </ul>
          <div className="flex gap-[15px] justify-between">
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
      </div>
    </>
  );
};

export default Navbar;
