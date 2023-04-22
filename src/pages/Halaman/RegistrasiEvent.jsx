import React, { useState, useEffect } from "react";
import { Footer, Navbar } from "../../Components";
import { useNavigate } from "react-router";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

const RegistrasiEvent = () => {
  const [user, setUser] = useState(null);
  const [data, setData] = useState();
  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const {
  //     nama,
  //     alamat,
  //     kelurahan,
  //     kecamatan,
  //     kode,
  //     nik,
  //     gender,
  //     tempat,
  //     nomor,
  //     golongan,
  //     berat,
  //   } = e.target.elements;

  //   setData({
  //     nama: nama.value,
  //     alamat: alamat.value,
  //     kelurahan: kelurahan.value,
  //     kecamatan: kecamatan.value,
  //     kode: kode.value,
  //     nik: nik.value,
  //     gender: gender.value,
  //     tempat: tempat.value,
  //     nomor: nomor.value,
  //     golongan: golongan.value,
  //     berat: berat.value,
  //   });

  //   // Mengirim data ke Firestore
  //   const db = getFirestore();
  //   await setDoc(doc(collection(db, "users", user.uid, "data")), data);

  //   alert(
  //     "Selamat anda berhasil registrasi, Selanjutnya silahkan tunjukan tiket ke penyelenggara"
  //   );
  //   navigate("/tiket");
  // };

  function handleNavigate() {
    alert(
      "Selamat anda berhasil registrasi, Selanjutnya silahkan tunjukan tiket ke penyelenggara"
    );
    navigate("/tiket");
    return;
  }

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <>
      <Navbar position={"fixed"} />
      <div className="min-h-screen py-[120px] xl:px-0 bg-white dark:bg-accent">
        <div className="mx-auto px-4 xl:px-0 max-w-sm md:max-w-md xl:max-w-3xl">
          <form className="py-10 px-4 bg-primary dark:bg-secondary rounded-xl ">
            <h1 className="text-white text-2xl font-bold text-center pb-5">
              Form Registrasi
            </h1>
            <div className="mb-6">
              <label
                for="nama"
                className="block mb-2 text-sm font-medium text-white "
              >
                Nama lengkap
              </label>
              <input
                disabled={true}
                type="text"
                id="nama"
                className="input input-bordered w-full rounded-lg "
                placeholder="ACCOUNTNAME"
                required
              />
            </div>
            <div className="w-full h-full flex flex-col">
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    for="alamat"
                    className="block mb-2 text-sm font-medium text-white "
                  >
                    Alamat
                  </label>
                  <input
                    disabled={true}
                    type="text"
                    id="alamat"
                    className="input input-bordered w-full rounded-lg "
                    placeholder="Isi sesuai KTP anda"
                    required
                  />
                </div>
                <div>
                  <label
                    for="kelurahan"
                    className="block mb-2 text-sm font-medium text-white "
                  >
                    Kelurahan
                  </label>
                  <input
                    disabled={true}
                    type="text"
                    id="kelurahan"
                    className="input input-bordered w-full rounded-lg "
                    placeholder="Isi sesuai KTP anda"
                    required
                  />
                </div>
                <div>
                  <label
                    for="kecamatan"
                    className="block mb-2 text-sm font-medium text-white "
                  >
                    Kecamatan
                  </label>
                  <input
                    disabled={true}
                    type="text"
                    id="kecamatan"
                    className="input input-bordered w-full rounded-lg  "
                    placeholder="Isi sesuai KTP anda"
                    required
                  />
                </div>
                <div>
                  <label
                    for="kode"
                    className="block mb-2 text-sm font-medium text-white "
                  >
                    Kode Pos
                  </label>
                  <input
                    disabled={true}
                    type="text"
                    id="kode"
                    className="input input-bordered w-full rounded-lg  "
                    placeholder="Isi sesuai alamat KTP anda"
                    required
                  />
                </div>
                <div>
                  <label
                    for="nik"
                    className="block mb-2 text-sm font-medium text-white "
                  >
                    NIK
                  </label>
                  <input
                    disabled={true}
                    type="text"
                    id="nik"
                    className="input input-bordered w-full rounded-lg  "
                    placeholder="Isi sesuai KTP anda"
                    required
                  />
                </div>
                <div>
                  <label
                    for="gender"
                    className="block mb-2 text-sm font-medium text-white "
                  >
                    Jenis Kelamin
                  </label>
                  <select className="select w-full rounded-lg placeholder-gray-600">
                    <option disabled selected>
                      Pilih Jenis Kelamin Anda
                    </option>
                    <option disabled selected>
                      Pria
                    </option>
                    <option disabled selected>
                      Wanita
                    </option>
                    <option disabled selected>
                      Tidak Diketahui
                    </option>
                  </select>
                </div>
                <div>
                  <label
                    for="tempat"
                    className="block mb-2 text-sm font-medium text-white "
                  >
                    Tempat Lahir
                  </label>
                  <input
                    disabled={true}
                    type="text"
                    id="tempat"
                    className="input input-bordered w-full rounded-lg  "
                    placeholder="Isi sesuai KTP anda"
                    required
                  />
                </div>
                <div>
                  <label
                    for="tanggal"
                    className="block mb-2 text-sm font-medium text-white "
                  >
                    Tanggal Lahir
                  </label>
                  <input
                    disabled={true}
                    type="date"
                    id="tanggal"
                    className="input input-bordered w-full rounded-lg  "
                    placeholder="Isi nomor handphone anda"
                    required
                  />
                </div>
                <div>
                  <label
                    for="nomor"
                    className="block mb-2 text-sm font-medium text-white "
                  >
                    Nomor Handphone
                  </label>
                  <input
                    disabled={true}
                    type="number"
                    id="nomor"
                    className="input input-bordered w-full rounded-lg  "
                    placeholder="Isi nomor handphone anda"
                    required
                  />
                </div>
                <div>
                  <label
                    for="golongan"
                    className="block mb-2 text-sm font-medium text-white "
                  >
                    Golongan darah
                  </label>
                  <select className="select w-full rounded-lg placeholder-gray-600">
                    <option disabled selected>
                      Pilih Golongan Darah Anda
                    </option>
                    <option disabled selected>
                      A
                    </option>
                    <option disabled selected>
                      B
                    </option>
                    <option disabled selected>
                      AB
                    </option>
                    <option disabled selected>
                      O
                    </option>
                  </select>
                </div>
              </div>
              <div className="mb-5">
                <label
                  for="berat"
                  className="block mb-2 text-sm font-medium text-white "
                >
                  Berat badan
                </label>
                <input
                  disabled={true}
                  type="number"
                  id="berat"
                  className="input input-bordered w-full rounded-lg  "
                  placeholder="Isi berat badan anda"
                  required
                />
              </div>
              <div className="flex flex-col gap-4">
                <button
                  onClick={handleNavigate}
                  type="submit"
                  className="text-primary bg-white hover:bg-black dark:text-black dark:hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegistrasiEvent;
