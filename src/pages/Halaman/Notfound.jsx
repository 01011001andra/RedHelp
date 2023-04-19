import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center  bg-white">
      <img className="w-64 h-64" src="../404.gif" alt="404" />
      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl md:text-4xl lg:text-5xl text-gray-800 mt-12">
          Page Not Found
        </p>
        <p className="md:text-lg lg:text-xl text-gray-600 mt-8 text-center">
          Maaf, Halaman yang anda cari tidak dapat ditemukan
        </p>
        <Link
          to={"/"}
          className="flex items-center space-x-2 bg-[#E4011F] hover:bg-green-700 text-gray-100 px-4 py-2 mt-12 rounded transition duration-150"
          title="Return Home"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="text-white">Kembali ke Beranda</span>
        </Link>
      </div>
    </div>
  );
};

export default Notfound;
