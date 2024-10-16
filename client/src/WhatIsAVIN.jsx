import React from "react";
import car from "./assets/WhereVIN.png";

const WhatIsAVIN = () => {
  return (
    <div className="flex justify-center mt-16 px-8 py-8">
      <div className="max-w-screen-xl flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2">
          <h2 className="text-2xl">What is a VIN?</h2>
          <h6 className="my-3">
            VIN stands for Vehicle Identification Number. It is your vehicle's
            serial number. Every vehicle has a unique VIN. The National Highway
            Traffic Safety Administration (NHTSA) maintains a database of
            vehicle information using the VIN as the identifier. If you enter
            your VIN above, you will see your vehicle specifications.
          </h6>
        </div>

        <div className="bg-slate-400 rounded px-4 py-4 max-w-[700px]">
          <h2 className="text-black text-2xl">Where do I find my VIN?</h2>
          <img className="img-fluid my-4" src={car} alt="Where is my VIN" />
          <h6>
            You might also find your VIN by logging in to your auto insurance
            provider's website and searching for your ID card.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default WhatIsAVIN;
