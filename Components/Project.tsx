import React from "react";
import CardProject from "./Helper/CardProject";

const Project = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900">
      <div className="text-center">
        <p className="heading__mini">Recent Works</p>
        <h1 className="heading__primary">
          My Best <span className="text-yellow-400">Projects</span>
        </h1>
      </div>
      <CardProject
        title="E-commerce Website"
        tech={[
          {
            name: "React",
            colorBg: "bg-blue-700",
          },
          {
            name: "NextJS",
            colorBg: "bg-white-700",
          },
          {
            name: "Tailwind",
            colorBg: "bg-gray-700",
          },
          {
            name: "TypeScript",
            colorBg: "bg-orange-700",
          },
        ]}
        image="/images/p1.png"
      />
      <CardProject
        title="Portfolio Website"
        tech={[
          {
            name: "React",
            colorBg: "bg-blue-700",
          },
          {
            name: "NextJS",
            colorBg: "bg-white-700",
          },
          {
            name: "Tailwind",
            colorBg: "bg-gray-700",
          },
          {
            name: "TypeScript",
            colorBg: "bg-orange-700",
          },
        ]}
        image="/images/p2.png"
      />
    </div>
  );
};

export default Project;
