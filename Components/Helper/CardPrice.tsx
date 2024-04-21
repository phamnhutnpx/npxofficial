import { CheckIcon } from "@heroicons/react/16/solid";
import React from "react";

interface Props {
  bg: string;
  save: string;
  price: string;
  plane: string;
}
const CardPrice = ({ bg, save, price, plane }: Props) => {
  return (
    <div className="text-center rounded-lg bg-gray-900">
      <div className={`p-6 rounded-t-lg ${bg}`}>
        <h1 className="text-[30px] text-white ">{plane}</h1>
        <p className="text-[16px] text-[#d7d7d7]">
          Try out {plane} Plane Save{" "}
          <span className="text-yellow-400"> {save} </span>
        </p>
        <div className="flex justify-center items-end mt-[1rem] space-x-1">
          <h1 className="text-[40px] font-bold text-yellow-400">{price}</h1>
          <p className="text-white">/Hour</p>
        </div>
      </div>
      <div className="p-6">
        {[
          {
            title: "Next JS Website",
          },
          {
            title: "React JS Website",
          },
          {
            title: "MERN Stack Website",
          },
          {
            title: "Authentication",
          },
        ].map((item, index) => {
          return (
            <div key={index} className="flex items-center space-x-3 py-3">
              ✅
              <p className="text-[17px] text-white opacity-80">
                {/* <CheckIcon className="w-[1.4rem] h-[1.4rem] text-yellow-400" /> */}
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
      <button className="mt-[1.5rem] px-8 py-4 bg-blue-600 text-white block w-full hover:bg-blue-800 transition-all duration-300">
        Get Started
      </button>
    </div>
  );
};

export default CardPrice;
