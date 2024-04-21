import AboutMe from "@/Components/AboutMe";
import Hero from "@/Components/Hero";
import Nav from "@/Components/Nav";
import NavMobile from "@/Components/NavMobile";
import Price from "@/Components/Price";
import Project from "@/Components/Project";
import Reviews from "@/Components/Reviews";
import Services from "@/Components/Services";
import Skills from "@/Components/Skills";
import React, { useState } from "react";

const Homepage = () => {
  const [openNav, setOpenNav] = useState(false);
  const handleOpenNav = () => setOpenNav(true);
  const handleCloseNav = () => setOpenNav(false);
  return (
    <div className="overflow-hidden">
      <NavMobile openNav={openNav} closeNav={handleCloseNav} />
      <Nav openNav={handleOpenNav} />
      <Hero />
      <AboutMe />
      <Services />
      <Skills />
      <Project />
      <Price />
      <Reviews />
    </div>
  );
};

export default Homepage;
