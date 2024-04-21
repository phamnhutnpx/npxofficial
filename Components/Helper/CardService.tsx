import {
  BugAntIcon,
  CodeBracketIcon,
  CommandLineIcon,
  CursorArrowRaysIcon,
  RocketLaunchIcon,
  ServerIcon,
} from "@heroicons/react/16/solid";
import React from "react";

interface Props {
  title: string;
  num: string;
}
const iconMapping = {
  "01": CommandLineIcon,
  "02": ServerIcon,
  "03": CodeBracketIcon,
  "04": CursorArrowRaysIcon,
  "05": RocketLaunchIcon,
  "06": BugAntIcon,
};
const CardService = ({ title, num }: Props) => {
  const IconComponent =
    (iconMapping as Record<string, React.ElementType>)[num] || CommandLineIcon;

  return (
    <div className="bg-black custom__service z-[100] relative transform rounded-2xl text-center p-6 shadow-md">
      <IconComponent className="w-[5rem] relative z-[1] mx-auto h-[5rem] text-yellow-400" />
      <h1 className="text-[25px] relative z-[1] text-white mt-[1rem]">
        {title}
      </h1>
      <p className="text-white text-[15px] opacity-60 mt-[0.8rem]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis in
        voluptas laboriosam rerum necessitatibus commodi eius iusto, iure
        quibusdam minus dolores quia cum ex quos sequi eaque.
      </p>
      <p className="text-white text-[1.6rem] font-bold absolute top-3 right-4">
        {num}
      </p>
    </div>
  );
};

export default CardService;
