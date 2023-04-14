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

function App() {
  return (
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
  );
}

export default App;
