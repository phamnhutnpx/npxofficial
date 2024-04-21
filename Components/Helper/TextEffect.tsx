import React from "react";
import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        "a React Developer",
        1000,
        "a Next JS Developer",
        1000,
        "a MERN Developer",
        1000,
        "a Designer",
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] text-white font-bold"
    />
  );
};

export default TextEffect;
