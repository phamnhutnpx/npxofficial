import React from "react";
import CardPrice from "./Helper/CardPrice";

const Price = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black">
      <div className="text-center">
        <p className="heading__mini">Populor Services</p>
        <h1 className="heading__primary">
          Best <span>Price</span> For Your Project
        </h1>
      </div>
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 items-center pt-[4rem] md:pt-[7rem]">
        <CardPrice plane="Basic" price="10$" save="20%" bg="bg-blue-900" />
        <CardPrice plane="Popular" price="20$" save="35%" bg="bg-green-900" />
        <CardPrice plane="Premium" price="30$" save="45%" bg="bg-red-900" />
      </div>
    </div>
  );
};

export default Price;
