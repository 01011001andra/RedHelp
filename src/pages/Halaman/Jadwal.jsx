import React from "react";
import { Navbar, Footer, Helm } from "../../Components";

const Jadwal = () => {
  return (
    <div className="bg-[#D9D9D9] mt-28">
      <Helm title="Jadwal" />
      <Navbar position="fixed" />
      <h1>Jadwal</h1>
      <div className="min-h-screen"></div>
      <Footer />
    </div>
  );
};

export default Jadwal;
