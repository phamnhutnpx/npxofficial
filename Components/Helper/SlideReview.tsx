import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardReview from "./CardReview";
const SlideReview = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1300, min: 764 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      responsive={responsive}
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      itemClass="item"
    >
      {[
        {
          image: "/images/user1.jpg",
          user: "User 1",
          role: "Web Developer",
        },
        {
          image: "/images/user2.jpg",
          user: "User 2",
          role: "Web Developer",
        },
        {
          image: "/images/user3.jpg",
          user: "User 3",
          role: "Web Developer",
        },
        {
          image: "/images/user4.jpg",
          user: "User 4",
          role: "Web Developer",
        },
      ].map((item, index) => (
        <CardReview
          key={index}
          image={item.image}
          user={item.user}
          role={item.role}
        />
      ))}
    </Carousel>
  );
};

export default SlideReview;
