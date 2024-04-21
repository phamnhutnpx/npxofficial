import { CheckIcon } from "@heroicons/react/16/solid";
import React from "react";

const AboutMe = () => {
  return (
    <div className="mt-[-3.5rem] bg-black pb-[3rem]">
      <div className="w-[80%] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[2rem]">
        <div>
          <p className="heading__mini">About me</p>
          <h1 className="heading__primary">
            Professional <span className="text-yellow-400">Website</span> for
            your bussiness
          </h1>
          <p className="text-[15px] mt-[1.3rem] text-white opacity-75">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            voluptates rem quo suscipit ratione magni dicta a, hic facilis ipsam
            minima sequi maiores facere vero voluptatem error tempora animi.
            Doloribus?
          </p>
          <div className="mt-[2rem] space-y-3">
            <div className="flex items-center space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-[18px] text-white">Frontend Development</p>
            </div>
            <div className="flex items-center space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-[18px] text-white">Backend Development</p>
            </div>
            <div className="flex items-center space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-[18px] text-white">Fullstack Development</p>
            </div>
          </div>
        </div>
        <div className="lg:ml-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-[2rem]">
            <div className="p-6 text-center bg-yellow-400">
              <p className="text-[50px] text-black font-bold">+1</p>
              <p className="text-[20px] text-black font-semibold">
                Years experience
              </p>
            </div>
            <div className="p-6 text-center bg-yellow-400">
              <p className="text-[50px] text-black font-bold">+200</p>
              <p className="text-[20px] text-black font-semibold">
                Happy Client
              </p>
            </div>
            <div className="p-6 text-center bg-yellow-400">
              <p className="text-[50px] text-black font-bold">+300</p>
              <p className="text-[20px] text-black font-semibold">
                Project Done
              </p>
            </div>
            <div className="p-6 text-center bg-yellow-400">
              <p className="text-[50px] text-black font-bold">+3</p>
              <p className="text-[20px] text-black font-semibold">Award Win</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
