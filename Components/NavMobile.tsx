import { XMarkIcon } from "@heroicons/react/16/solid";
import React from "react";
interface Props {
  closeNav: () => void;
  openNav: boolean;
}
const NavMobile = ({ closeNav, openNav }: Props) => {
  const navOpenStyle = openNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div className="md:hidden">
      <div
        onClick={closeNav}
        className={`${navOpenStyle} fixed top-0 transform transition-all duration-500 z-[2000] left-0 right-0 bottom-0 w-[100vw] h-[100vh]`}
      ></div>
      <ul
        className={`${navOpenStyle} text-white fixed flex items-center justify-center flex-col h-full transform transition-all duration-300 delay-300 w-[60%] bg-red-600 space-y-14 z-[2006]`}
      >
        <li>
          <a className="nav__link text-[25px] sm:text-[30px]" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="nav__link text-[25px] sm:text-[30px]" href="#">
            About
          </a>
        </li>
        <li>
          <a className="nav__link text-[25px] sm:text-[30px]" href="#">
            Services
          </a>
        </li>
        <li>
          <a className="nav__link text-[25px] sm:text-[30px]" href="#">
            Blog
          </a>
        </li>
        <li>
          <a className="nav__link text-[25px] sm:text-[30px]" href="#">
            Contact
          </a>
        </li>
        <XMarkIcon
          className="absolute top-[-1.4rem] right-[1.4rem] w-[2.2rem] h-[2.2rem] text-white"
          onClick={closeNav}
        />
      </ul>
    </div>
  );
};

export default NavMobile;
