import React from "react";
import { Footer, Navbar } from "../../Components";

const ProfilDetail = () => {
  return (
    <>
      <Navbar position={"fixed"} />
      <div className="min-h-screen py-[120px] xl:px-0 bg-white dark:bg-accent">
        <div className="mx-auto px-4 xl:px-0 max-w-sm md:max-w-md xl:max-w-3xl">
          <form className="py-10 px-4 bg-primary rounded-xl dark:bg-secondary">
            <h1 className="text-white text-2xl font-bold text-center pb-5">
              DATA PROFIL
            </h1>
            <div className="mb-6">
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-white "
              >
                Email address
              </label>
              <input
                disabled={true}
                type="email"
                id="email"
                className="input input-bordered w-full rounded-lg "
                placeholder="john.doe@company.com"
                required
              />
            </div>
            <div className="w-full h-full flex flex-col">
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    for="first_name"
                    className="block mb-2 text-sm font-medium text-white "
                  >
                    First name
                  </label>
                  <input
                    disabled={true}
                    type="text"
                    id="first_name"
                    className="input input-bordered w-full rounded-lg "
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label
                    for="last_name"
                    className="block mb-2 text-sm font-medium text-white "
                  >
                    Last name
                  </label>
                  <input
                    disabled={true}
                    type="text"
                    id="last_name"
                    className="input input-bordered w-full rounded-lg "
                    placeholder="Doe"
                    required
                  />
                </div>
                <div>
                  <label
                    for="Nomor"
                    className="block mb-2 text-sm font-medium text-white "
                  >
                    Nomor
                  </label>
                  <input
                    disabled={true}
                    type="text"
                    id="Nomor"
                    className="input input-bordered w-full rounded-lg  "
                    placeholder="089519113444"
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
                    placeholder=""
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
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
              <div className="flex flex-col gap-4">
                <button
                  type="submit"
                  className="text-primary bg-white dark:bg-accent hover:dark:bg-slate-700 hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  Edit
                </button>
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  Simpan
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

export default ProfilDetail;
