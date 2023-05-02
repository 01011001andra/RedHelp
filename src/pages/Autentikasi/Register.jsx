import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { Navbar } from "../../Components";

const Register = () => {
  const navigate = useNavigate();

  function handleGoogleRegister() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.user));
        navigate("/");
      })
      .catch((err) => {
        return err;
      });
  }

  return (
    <div className="min-h-screen flex">
      <Navbar position="fixed hidden" />

      <div className="flex w-full lg:w-1/2 justify-center items-center bg-white dark:bg-accent space-y-8">
        <div className="flex flex-col justify-center w-full px-3 md:px-32 lg:px-24">
          <img src="./Logo.png" alt="Logo" className="w-64 mx-auto mb-3" />
          <form className="bg-white dark:bg-secondary rounded-md shadow-2xl py-8 px-6">
            <h1 className="text-gray-800 font-bold text-2xl mb-3">
              Daftar Akun
            </h1>
            <div className="flex w-full gap-3">
              <div className="flex items-center border-2 mb-5 py-3 px-3 rounded-md w-1/2">
                <svg width="24" viewBox="0 0 24 24" fill="#9ca3af">
                  <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
                </svg>
                <input
                  disabled={true}
                  id="depan"
                  className=" pl-2 w-full outline-none border-none"
                  type="depan"
                  name="depan"
                  placeholder="Nama Depan"
                />
              </div>
              <div className="flex items-center border-2 mb-5 py-3 px-3 rounded-md w-1/2">
                <svg width="24" viewBox="0 0 24 24" fill="#9ca3af">
                  <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
                </svg>
                <input
                  disabled={true}
                  id="belakang"
                  className=" pl-2 w-full outline-none border-none"
                  type="belakang"
                  name="belakang"
                  placeholder="Nama Belakang"
                />
              </div>
            </div>
            <div className="flex items-center border-2 mb-5 py-3 px-3 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                disabled={true}
                id="email"
                className=" pl-2 w-full outline-none border-none"
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="flex items-center border-2 mb-5 py-3 px-3 rounded-md ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                disabled={true}
                className="pl-2 w-full outline-none border-none"
                type="password"
                name="password"
                id="password"
                placeholder="Kata Sandi"
              />
            </div>
            <div className="flex items-center border-2 mb-5 py-3 px-3 rounded-md ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                disabled={true}
                className="pl-2 w-full outline-none border-none"
                type="password"
                name="password"
                id="password"
                placeholder="Konfirmasi Kata Sandi"
              />
            </div>
            <div className="text-xs flex gap-1 justify-end">
              Saya sudah setuju dengan{" "}
              <Link
                to="/syarat.pdf"
                target="_blank"
                download
                className="text-primary hover:text-black"
              >
                Syarat dan Ketentuan.
              </Link>
            </div>
            <button
              disabled
              // onClick={() => navigate("/")}
              type="button"
              className="block w-full bg-primary mt-3 py-3 rounded-md hover:bg-red-500 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
            >
              Daftar
            </button>
            <button
              onClick={handleGoogleRegister}
              type="button"
              className="flex justify-center text-sm  items-center gap-2 w-full bg-[#D9d9d9] dark:bg-accent mt-3 py-3 rounded-md hover:bg-gray-400 hover:-translate-y-1 transition-all duration-500 text-black font-semibold mb-2 px-4"
            >
              <img src="./Google.png" alt="google" /> Daftar Dengan Akun Google
            </button>
            <div className="flex justify-end mt-4">
              <Link
                to={"/login"}
                className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
              >
                Sudah Memiliki Akun? Login!
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div
        className="hidden lg:flex w-full lg:w-1/2
        justify-center items-center bg-primary dark:bg-secondary"
      >
        <div
          className=" 
                bg-black 
                opacity-20 
                inset-0 
                z-0"
        ></div>
        <div className="w-full flex-col items-center justify-center">
          <img
            src="./LoginAuth.gif"
            alt="Login"
            className="w-96 h-96 mx-auto dark:hidden"
          />
          <img
            className="dark:flex hidden w-96 h-96 mx-auto"
            src="./Blooddark.gif"
            alt="image"
            loading="lazy"
            width=""
            height=""
          />
          <p className="text-center text-white text-[32px] font-bold">
            Ayo donor darah lebih mudah <br />
            dengan RedHelp
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
