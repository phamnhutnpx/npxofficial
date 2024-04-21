import { Bars3CenterLeftIcon } from "@heroicons/react/16/solid";
import React, { useEffect, useState } from "react";

interface Props {
  openNav: () => void;
}
const Nav = ({ openNav }: Props) => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setSticky(true);
      }
      if (window.scrollY <= 90) {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handler);
  }, []);

  const navStickyStyle = sticky ? "bg-[#212428] shadow-gray-900 shadow-sm" : "";
  return (
    <div
      className={
        navStickyStyle + " fixed w-full z-[1000] transition-all duration-300 "
      }
    >
      <div className="flex items-center justify-between h-[12vh] w-[80%] mx-auto">
        <div className="font-logo text-white text-[18px]">
          <span className="text-[30px] md:text-[40px] text-yellow-400">
            NPX
          </span>
          Official
        </div>
        <ul className="md:flex items-center space-x-10 hidden">
          <li>
            <a href="" className="nav__link">
              Home
            </a>
          </li>
          <li>
            <a href="" className="nav__link">
              About
            </a>
          </li>
          <li>
            <a href="" className="nav__link">
              Services
            </a>
          </li>
          <li>
            <a href="" className="nav__link">
              Blog
            </a>
          </li>
          <li>
            <a href="" className="nav__link">
              Contact
            </a>
          </li>
        </ul>
        <Bars3CenterLeftIcon
          className="w-[2.3rem] h-[2.3rem] text-white rotate-180 sm:hidden"
          onClick={openNav}
        />
      </div>
    </div>
  );
};

export default Nav;
