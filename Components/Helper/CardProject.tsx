import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  tech: Tech[];
  image: string;
}
interface Tech {
  name: string;
  colorBg: string;
}
const CardProject = ({ title, tech, image }: Props) => {
  return (
    <div className="grid w-[80%] mx-auto pt-[5rem] grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div className="p-4 rouded-xl relative cursor-pointer hover:-rotate-6 transform transition-all duration-200 bg-gray-800 shadow-md">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="object-contain rounded-xl mx-auto shadow-md"
        />
      </div>
      <div>
        <h1 className="text-[25px] text-white">{title}</h1>
        <p className="text-white opacity-65 text-[15px] mt-[1rem]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
          accusantium placeat voluptatibus temporibus ab sunt voluptas
          repudiandae necessitatibus, libero rerum. Inventore ad modi non,
          nostrum voluptatibus aperiam animi eum recusandae!
        </p>
        <div className="mt-[1.3rem] grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-[2rem]">
          {tech.map((item, index) => (
            <h1
              key={index}
              className={
                item.colorBg + " px-6 py-3 text-white rounded-lg text-center "
              }
            >
              {item.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardProject;
