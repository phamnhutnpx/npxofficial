import { SparklesIcon, StarIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  user: string;
  role: string;
}
const CardReview = ({ image, user, role }: Props) => {
  return (
    <div className="m-2 hover:bg-gray-700 transition-all duration-300 rounded-lg">
      <div className="border-2 p-4 border-gray-700 rounded-lg">
        <Image
          src={image}
          alt={user}
          width={70}
          height={70}
          className="rounded-full mx-auto mt-[2rem]"
        />
        <div>
          <SparklesIcon className="w-[6rem] h-[6rem] text-white opacity-15 fixed" />
        </div>
        <p className="text-[15px] text-white opacity-65 mt-[3rem] text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          aperiam, obcaecati ipsam tempore commodi recusandae, in qui voluptate
          neque ea nulla at maxime placeat labore distinctio molestias? Tenetur,
          autem incidunt.
        </p>
        <div className="flex items-center justify-center space-x-1 mt-[.4rem]">
          <StarIcon className="w-[1.4rem] h-[1.4rem] text-yellow-400" />
          <StarIcon className="w-[1.4rem] h-[1.4rem] text-yellow-400" />
          <StarIcon className="w-[1.4rem] h-[1.4rem] text-yellow-400" />
          <StarIcon className="w-[1.4rem] h-[1.4rem] text-yellow-400" />
          <StarIcon className="w-[1.4rem] h-[1.4rem] text-yellow-400" />
        </div>
        <div>
          <SparklesIcon className="w-[6rem] h-[6rem] right-0 text-white opacity-15 fixed" />
        </div>
        <h1 className="text-[20px] text-center text-white mt-[2rem] font-medium">
          {user}
        </h1>
        <p className="text-[18px] text-yellow-400 text-center mb-[3rem]">
          {role}
        </p>
      </div>
    </div>
  );
};

export default CardReview;
