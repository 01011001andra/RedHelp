import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../Components";

const Beranda = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  return (
    <div className="bg-[#D9D9D9]">
      <Navbar />
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-7xl font-semibold">
          Selamat Datang {user?.displayName}
        </h1>
      </div>
      <div className="h-screen"></div>
    </div>
  );
};

export default Beranda;
