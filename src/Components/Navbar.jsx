import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/Io";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

const Navbar = ({ position }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [logOutButton, setLogOutButton] = useState(null);
  const navMenu = ["Beranda", "Berita", "Tentang", "Jadwal", "Stock Darah"];
  const navLinks = ["/", "/berita", "/tentang", "/jadwal", "/stock"];
  const [bgNav, setBgNav] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
      setBgNav(true);
    } else {
      setBgNav(false);
    }
  });

  function handleLogout() {
    signOut(auth)
      .then((res) => {
        localStorage.clear();
        navigate("/login");
      })
      .catch((err) => {
        console.info(err);
      });
  }

  useEffect(() => {
    onAuthStateChanged(auth, (result) => {
      if (result) {
        setLogOutButton(true);
        return;
      }
    });
  }, []);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  return (
    <>
      <div
        className={`w-full h-28 flex items-center ${position} top-0 left-0 z-[1000] transition-all duration-500  ${
          bgNav ? "bg-slate-100/40" : "bg-white"
        }`}
      >
        <nav className="w-full hidden xl:max-w-6xl mx-auto xl:flex justify-between items-center px-6 xl:px-0 ">
          <div className="flex gap-[85px]">
            <img src="../Logo.png" alt="logo" className="w-52 select-none" />
            <ul className="flex gap-[10px] md:gap-[20px] xl:gap-[50px] items-center">
              {navMenu.map((item, index) => {
                return (
                  <NavLink
                    key={index}
                    className={({ isActive }) =>
                      isActive
                        ? "cursor-pointer font-thin hover:font-bold py-2 text-primary"
                        : "cursor-pointer font-thin hover:border-b py-2 hover:border-primary transition-all duration-300"
                    }
                    to={navLinks[index]}
                    spy={true}
                    smooth={true}
                  >
                    {item}
                  </NavLink>
                );
              })}
            </ul>
          </div>
          <div className="flex gap-[15px]">
            {!logOutButton ? (
              <>
                <button
                  className="px-5 py-2 rounded-md border border-black hover:bg-black hover:text-white"
                  onClick={() => navigate("/login")}
                >
                  Masuk
                </button>
                <button
                  className="font-bold px-5 py-2 rounded-md bg-primary text-white hover:bg-black hover:text-white "
                  onClick={() => navigate("/register")}
                >
                  Daftar
                </button>
              </>
            ) : (
              <div className="flex items-center gap-6">
                <Link
                  to={"/profil"}
                  className="avatar hover:ring hover:ring-primary flex items-center rounded-full"
                >
                  <div className="w-12 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </Link>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="font-bold px-5 py-2 rounded-md bg-primary text-white hover:bg-black hover:text-white transition-all duration-300"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </nav>
        <nav className="w-full h-full xl:hidden">
          <div className="w-full h-full max-w-7xl flex items-center justify-between px-3 md:px-6">
            <img src="../Logo.png" alt="logo" className="w-40" />
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
        className={`w-3/4 sm:w-2/5 md:w-2/5 h-screen xl:hidden bg-white ${position} top-0 left-0  z-[2000] py-8  transform transition-all duration-700 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-full flex flex-col max-w-sm mx-auto px-3 gap-10 ">
          <div className="w-full flex justify-between items-center">
            <img src="../Logo.png" alt="logo" className="w-52 select-none" />
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
                <NavLink
                  key={index}
                  // className="cursor-pointer font-thin text-xl hover:font-bold border-y py-4"
                  className={({ isActive }) =>
                    isActive
                      ? "cursor-pointer font-thin text-xl hover:font-bold border-y py-4 text-primary"
                      : "cursor-pointer font-thin text-xl hover:font-bold border-y py-4"
                  }
                  to={navLinks[index]}
                  spy={true}
                  smooth={true}
                  onClick={() => {
                    return setOpen(!open);
                  }}
                >
                  {item}
                </NavLink>
              );
            })}
          </ul>
          <div className="flex gap-[15px] justify-between">
            {!logOutButton ? (
              <>
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
              </>
            ) : (
              <div className="flex items-center gap-6 w-full">
                <Link
                  to={"/profil"}
                  className="avatar hover:ring hover:ring-primary flex items-center rounded-full"
                >
                  <div className="w-12 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </Link>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="font-bold px-5 py-2 rounded-md bg-primary text-white w-full"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
