import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Helm, ProfilCard } from "../../Components";

const Profil = () => {
  const [user, setUser] = useState(null);

  // COMPONENT DID MOUNT NGAMBIL DATA USER
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  return (
    <>
      <Helm title="Profil" />
      <Navbar position="fixed" />
      <div className="w-full h-full bg-white dark:bg-accent">
        <div className="min-h-screen py-[120px] xl:px-0">
          <div className="hero-content mx-auto flex flex-col">
            <div className="w-full border border-gray-400 shadow-xl rounded-lg flex items-center gap-6 py-3 px-6">
              {/* Avatar */}
              <div className="avatar">
                <div className="w-28  rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </div>
              <div className="w-full h-full flex flex-col justify-center gap-2">
                <span className="font-bold text-lg">{user?.displayName}</span>
                <Link to={"/profil/detail"} className="underline text-primary">
                  Lihat Detail
                </Link>
              </div>
            </div>
            {/* BARIS 2 */}
            <ProfilCard
              title1={"Email"}
              text1={user?.email}
              title2={"Hadiah"}
              text2={
                <Link className="underline text-primary">Penukaran Point</Link>
              }
            />
            {/* BARIS 3 */}
            <ProfilCard
              title1={"Nomor Hp"}
              text1={"Tidak Lengkap"}
              title2={"Tempat, Tanggal Lahir"}
              text2={"Tidak Lengkap"}
            />
            {/* BARIS 4 */}
            <ProfilCard
              title1={"Golongan Darah"}
              text1={"Tidak Lengkap"}
              title2={"Total Donor"}
              text2={"Tidak Lengkap"}
            />
            {/* BARIS 5 */}
            <ProfilCard
              title1={"Donor Terakhir"}
              text1={"Tidak Lengkap"}
              title2={"Donor Terakhir"}
              text2={"Tidak Lengkap"}
            />
            {/* BARIS 6 */}
            <div className="w-full border border-gray-400 shadow-xl rounded-lg flex flex-col gap-5 py-3 px-4">
              <h1 className="text-lg md:text-xl text-black font-bold">
                History Donor Darah
              </h1>
              <p className="font-bold text-sm text-slate-500">
                Tambahkan histori donor darah anda untuk mendapatkan reminder
                donor darah selanjutnya.
              </p>
              <div>
                <input
                  type="file"
                  className="file-input w-full file-input-error max-w-xs rounded-lg "
                />
              </div>
            </div>
            {/* BARIS 7 */}
            <div className="w-full border border-gray-400 shadow-xl rounded-lg flex flex-col gap-5 py-4 px-4">
              <h1 className="text-lg md:text-xl text-black font-bold">
                Lihat History Aktivitas
              </h1>
              <p className="font-bold text-sm text-slate-500">
                Anda dapat melihat aktivitas donor darah sebelumnya, event donor
                darah yang diikuti, dan sebagainya.
              </p>
              <Link to={"#"} className="font-extrabold text-primary">
                LIHAT LEBIH LANJUT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profil;
