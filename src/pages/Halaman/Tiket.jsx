import React from "react";
import { Footer, Navbar } from "../../Components";
import Iframe from "react-iframe";

const Tiket = () => {
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  return (
    <>
      <Navbar position={"fixed"} />
      <div className="min-h-screen py-[120px] xl:px-0 bg-white">
        <div className="mx-auto px-4 xl:px-0 max-w-sm md:max-w-md xl:max-w-3xl">
          <div className="flex flex-col items-center gap-5">
            <h1 className="text-primary font-bold text-2xl">
              Selamat Anda telah terdaftar di Event Donor Darah!!!
            </h1>
            <img
              src={user?.photoURL}
              alt={user?.displayName}
              className="mx-auto"
            />
            <div className="flex flex-col  gap-3 items-center">
              <small>Nomor Antrian : 5</small>
              <small>Tanggal: 19 April 20223</small>
            </div>
          </div>
          <form className="py-10 px-4 rounded-xl ">
            <h1 className="text-2xl font-bold text-center pb-5">
              Informasi Pendaftaran
            </h1>
            <div className="w-full h-full flex flex-col">
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label for="nama" className="block mb-2 text-sm font-medium ">
                    Nama Lengkap
                  </label>
                  Kanaya Putri Sari
                </div>
                <div>
                  <label
                    for="alamat"
                    className="block mb-2 text-sm font-medium "
                  >
                    Alamat
                  </label>
                  Perumahan crownhill estate f.62, Batam
                </div>
                <div>
                  <label
                    for="nomor"
                    className="block mb-2 text-sm font-medium "
                  >
                    Nomor Handphone
                  </label>
                  0887322873481
                </div>
                <div>
                  <label for="nik" className="block mb-2 text-sm font-medium ">
                    NIK
                  </label>
                  3322617219310002
                </div>
                <div>
                  <label
                    for="gender"
                    className="block mb-2 text-sm font-medium "
                  >
                    Jenis Kelamin
                  </label>
                  Perempuan
                </div>
                <div>
                  <label
                    for="tempat"
                    className="block mb-2 text-sm font-medium "
                  >
                    Tempat, Tanggal Lahir
                  </label>
                  Batam, 17 September 2002
                </div>
                <div>
                  <label
                    for="golongan"
                    className="block mb-2 text-sm font-medium "
                  >
                    Golongan Darah
                  </label>
                  A
                </div>
                <div>
                  <label
                    for="berat"
                    className="block mb-2 text-sm font-medium "
                  >
                    Berat Badan
                  </label>
                  52
                </div>
                <div>
                  <label
                    for="alamat"
                    className="block mb-2 text-sm font-medium "
                  >
                    Alamat Donor darah
                  </label>
                  Jl. Cemp., Tlk. Tering, Kec. Batam Kota, Kota Batam, Kepulauan
                  Riau 29444
                </div>
                <div>
                  <label
                    for="alamat"
                    className="block mb-2 text-sm font-medium "
                  >
                    Lokasi donor darah
                  </label>

                  <div className=" bg-white w-full ">
                    <Iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0581329912193!2d104.04981017383362!3d1.118480162278226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d9891f753dc0a5%3A0x1d50b7bed2099728!2sJl.%20Cemp.%2C%20Tlk.%20Tering%2C%20Kec.%20Batam%20Kota%2C%20Kota%20Batam%2C%20Kepulauan%20Riau!5e0!3m2!1sen!2sid!4v1681883819796!5m2!1sen!2sid"
                      className="rounded-xl w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Tiket;
