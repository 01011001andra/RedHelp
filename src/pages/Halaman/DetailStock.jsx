import React from "react";
import { CardStock, Footer, Navbar } from "../../Components";

const DetailStock = () => {
  return (
    <>
      <Navbar position={"fixed"} />
      <div className="w-full py-32 min-h-screen bg-white dark:bg-accent ">
        <div className="max-w-xs sm:max-w-xl md:max-w-3xl xl:max-w-6xl 2xl:max-w-7xl mx-auto flex flex-wrap gap-8 px-4 ">
          <CardStock />
          <CardStock />
          <CardStock />
          <CardStock />
          <CardStock />
          <CardStock />
          <CardStock />
          <CardStock />
          <CardStock />
          <CardStock />
          <CardStock />
          <CardStock />
          <CardStock />
          <CardStock />
        </div>
        <div className="max-w-xs sm:max-w-xl md:max-w-3xl xl:max-w-6xl 2xl:max-w-7xl mx-auto flex flex-wrap gap-8 px-4">
          {/* Card */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 xl:w-64 xl:h-64 2xl:w-72 2xl:h-72 flex justify-center items-center shadow-lg">
            <div className="w-full flex items-center justify-center px-8">
              <img src="blood1.png" alt="blood1" className="h-10 w-10" />
              <h1 className="w-full text-sm xl:text-2xl flex items-center justify-center">
                Total Donor: 5
              </h1>
            </div>
          </div>
          {/* Card */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 xl:w-64 xl:h-64 2xl:w-72 2xl:h-72 flex justify-center items-center shadow-lg">
            <div className="w-full flex items-center justify-center px-8">
              <img src="blood1.png" alt="blood1" className="h-10 w-10" />
              <h1 className="w-full text-sm xl:text-2xl flex items-center justify-center">
                Total Permintaan: 5
              </h1>
            </div>
          </div>
          {/* Card */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 xl:w-64 xl:h-64 2xl:w-72 2xl:h-72 flex justify-center items-center shadow-lg">
            <div className="w-full flex items-center justify-center px-8">
              <img src="blood1.png" alt="blood1" className="h-10 w-10" />
              <h1 className="w-full text-sm xl:text-2xl flex items-center justify-center">
                Total Darah: 5
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailStock;
