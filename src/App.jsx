import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Login, Lupa, Register } from "./pages/Autentikasi";
import {
  Beranda,
  Berita,
  Jadwal,
  Notfound,
  Notifikasi,
  Profile,
  Tentang,
} from "./pages/Halaman";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";

function App() {
  const [isLogin, setIslogin] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (result) => {
      if (result) {
        setIslogin(true);
        setLoading(false);
        return;
      }
      setIslogin(false);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen flex flex-col justify-center items-center bg-black text-white">
        Loading ...
      </div>
    );
  }

  return (
    <>
      {isLogin ? (
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/jadwal" element={<Jadwal />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/notifikasi" element={<Notifikasi />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/jadwal" element={<Jadwal />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/notifikasi" element={<Notifikasi />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/lupapassword" element={<Lupa />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      )}
    </>
  );
}

export default App;
