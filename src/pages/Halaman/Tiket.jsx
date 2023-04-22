import { getFirestore, doc, getDoc } from "firebase/firestore";
import React from "react";
import { Footer, Navbar } from "../../Components";
import Iframe from "react-iframe";

const Tiket = () => {
  const [userData, setUserData] = React.useState(null);
  const [user, setUser] = React.useState(null);
  // const currentUserUid = user?.uid; // UID pengguna yang sedang login

  React.useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  // React.useEffect(() => {
  //   async function fetchUserData() {
  //     const db = getFirestore();
  //     const userDocRef = doc(db, "users", currentUserUid, "data",); // "users" adalah nama koleksi di Firestore
  //     console.info(userDocRef);
  //     const userDoc = await getDoc(userDocRef);
  //     if (userDoc.exists()) {
  //       setUserData(userDoc.data());
  //       console.info(userDoc.data());
  //     } else {
  //       console.log("User not found");
  //     }
  //   }
  //   fetchUserData();
  // }, [currentUserUid]);
  return (
    <>
      <Navbar position={"fixed"} />
      <div className="min-h-screen py-[120px] xl:px-0 bg-white dark:bg-accent">
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
                  <label for="nama" className="block mb-2 text-sm font-bold">
                    Nama Lengkap
                  </label>
                  {user?.displayName}
                </div>
                <div>
                  <label for="alamat" className="block mb-2 text-sm font-bold ">
                    Alamat
                  </label>
                  xxxxxxxxxxxxxxxxxxxxxx
                </div>
                <div>
                  <label for="nomor" className="block mb-2 text-sm font-bold ">
                    Nomor Handphone
                  </label>
                  xxxxxxxxxxxxxxxxxx
                </div>
                <div>
                  <label for="nik" className="block mb-2 text-sm font-bold">
                    NIK
                  </label>
                  xxxxxxxxxxxxxx
                </div>
                <div>
                  <label for="gender" className="block mb-2 text-sm font-bold ">
                    Jenis Kelamin
                  </label>
                  xxxxxx
                </div>
                <div>
                  <label for="tempat" className="block mb-2 text-sm font-bold">
                    Tempat, Tanggal Lahir
                  </label>
                  xxxxxxxxxxxxxxxxxxx
                </div>
                <div>
                  <label
                    for="golongan"
                    className="block mb-2 text-sm font-bold "
                  >
                    Golongan Darah
                  </label>
                  x
                </div>
                <div>
                  <label for="berat" className="block mb-2 text-sm font-bold ">
                    Berat Badan
                  </label>
                  xx
                </div>
                <div>
                  <label for="alamat" className="block mb-2 text-sm font-bold">
                    Alamat Donor darah
                  </label>
                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                </div>
                <div>
                  <label for="alamat" className="block mb-2 text-sm font-bold">
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
