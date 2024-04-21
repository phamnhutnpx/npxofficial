import React from "react";
import CardService from "./Helper/CardService";

const Services = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-[#0b0c13]">
      <div className="text-center">
        <p className="heading__mini">Popular Services</p>
        <h1 className="heading__primary">
          My Special <span className="text-yellow-400">Services</span> For You
        </h1>
      </div>
      <div className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
        {[
          {
            title: "React Website",
            num: "01",
          },
          {
            title: "Next JS Website",
            num: "02",
          },
          {
            title: "MERN Stack Website",
            num: "03",
          },
        ].map((item, index) => (
          <div key={index}>
            <CardService title={item.title} num={item.num} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
