import React from "react";
import CardSkills from "./Helper/CardSkills";

const Skills = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-[#0b0c13]">
      <div className="grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items-center">
        <div className="col-span-3">
          <p className="heading__mini">My Skills</p>
          <h1 className="heading__primary">
            Let&apos;s Explor Popular{" "}
            <span className="text-yellow-400">Skills</span> & Experience
          </h1>
          <p className="text-[15px] text-white mb-[1.5rem] opacity-70 mt-[]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nobis
            repellendus qui totam amet temporibus impedit quaerat ex, expedita
            culpa necessitatibus? Consequatur repellendus quo minus?
          </p>
          <button className="relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-red-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
            <span className="relative z-10">Learn more</span>
          </button>
        </div>
        <div className="col-span-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] items-center">
            {[
              {
                title: "React",
                image: "/images/react.svg",
                percent: "80%",
              },
              {
                title: "Typescript",
                image: "/images/ts.svg",
                percent: "80%",
              },
              {
                title: "JavaScript",
                image: "/images/js.svg",
                percent: "80%",
              },
              {
                title: "HTML",
                image: "/images/html.svg",
                percent: "80%",
              },
              {
                title: "CSS",
                image: "/images/css.svg",
                percent: "80%",
              },
              {
                title: "Node JS",
                image: "/images/node.svg",
                percent: "77%",
              },
              {
                title: "MongoDB",
                image: "/images/mongo.svg",
                percent: "65%",
              },
              {
                title: "Python",
                image: "/images/python.svg",
                percent: "55%",
              },
            ].map((item, index) => (
              <div key={index}>
                <CardSkills
                  title={item.title}
                  image={item.image}
                  percent={item.percent}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
