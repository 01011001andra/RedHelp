import React from "react";
import { useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../../Components";

const Beranda = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#D9D9D9]">
      <Navbar />
      <h1>Beranda</h1>
      <button onClick={() => navigate("/Login")} className="btn btn-group">
        KLIK PERGI KE LOGIN DISINI, KARNA BARU FORM LOGIN YANG JADI
      </button>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <Footer />
    </div>
  );
};

export default Beranda;
