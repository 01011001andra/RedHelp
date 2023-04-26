import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/Io";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { clickButton, resetButton } from "../Features/dark/darkMode";

const Navbar = ({ position }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [logOutButton, setLogOutButton] = useState(null);
  const navMenu = ["Beranda", "Berita", "Tentang", "Jadwal", "Stock Darah"];
  const navLinks = ["/", "/berita", "/tentang", "/jadwal", "/stock"];
  const [bgNav, setBgNav] = useState(false);

  const dark = useSelector((state) => {
    return state.darkMode.isClicked;
  });

  function handleClick() {
    if (dark) {
      dispatch(resetButton());
    } else {
      dispatch(clickButton());
    }
  }

  // DARK MODE TAILWINDCSS
  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

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
        return err;
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
          bgNav
            ? "bg-slate-100/40 dark:bg-accent/40"
            : "bg-white dark:bg-accent"
        }`}
      >
        <nav className="w-full hidden xl:max-w-6xl mx-auto xl:flex justify-between items-center px-6 xl:px-0 ">
          <div className="flex gap-[85px]">
            <img
              src="../Logo.png"
              alt="logo"
              className="w-52 select-none"
              onClick={() => navigate("/")}
            />
            <ul className="flex gap-[10px] md:gap-[20px] xl:gap-[50px] items-center">
              {navMenu.map((item, index) => {
                return (
                  <NavLink
                    key={index}
                    className={({ isActive }) =>
                      isActive
                        ? "cursor-pointer font-thin hover:font-bold py-2 text-primary dark:text-primary"
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
            {/* ICON DARK MODE */}
            <label className="swap swap-rotate">
              <input type="checkbox" />

              <svg
                className="swap-on fill-current w-10 h-10"
                onClick={handleClick}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  onClick={handleClick}
                  d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
                />
              </svg>

              <svg
                onClick={handleClick}
                className="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
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
        className={`w-3/4 sm:w-2/5 md:w-2/5 h-screen xl:hidden bg-white dark:bg-slate-900  ${position} top-0 left-0  z-[2000] py-8  transform transition-all duration-700 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-full flex flex-col max-w-sm mx-auto px-3 gap-10 ">
          <div className="w-full flex justify-between items-center">
            <img
              src="../Logo.png"
              alt="logo"
              className="w-52 select-none"
              onClick={() => navigate("/")}
            />
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
                      ? "cursor-pointer font-thin text-xl hover:font-bold border-y py-4 dark:text-primary text-primary "
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
            {/* ICON DARK MODE */}
            <label className="swap swap-rotate">
              <input type="checkbox" />

              <svg
                className="swap-on fill-current w-10 h-10"
                onClick={handleClick}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  onClick={handleClick}
                  d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
                />
              </svg>

              <svg
                onClick={handleClick}
                className="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
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
