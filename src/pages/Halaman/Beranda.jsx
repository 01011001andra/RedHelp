import React from "react";
import { useNavigate } from "react-router-dom";

const Beranda = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Beranda</h1>
      <button onClick={() => navigate("/Login")} className="btn btn-group">
        KLIK PERGI KE LOGIN DISINI, KARNA BARU FORM LOGIN YANG JADI
      </button>
    </div>
  );
};

export default Beranda;
