import React from "react";
import SlideReview from "./Helper/SlideReview";

const Reviews = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900">
      <div className="text-center">
        <p className="heading__mini">Client reviews</p>
        <h1 className="heading__primary">
          I&apos;ve <span className="text-yellow-400">+40</span> Client Feedback
        </h1>
      </div>
      <div className="w-[80%] pt-[3rem] md:pt-[5rem] mx-auto">
        <SlideReview />
      </div>
    </div>
  );
};

export default Reviews;
