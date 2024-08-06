// import React from "react";
import Slider from "react-slick";
import Card from "./Card"; // Import the Card component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlider = () => {
  const cardData = [
    {
      title: "No Need for Call Centers",
      body: "Eliminate the hassle of setting up traditional call centers.",
    },
    {
      title: "No SDR Army Required",
      body: "Forget about hiring a large team for cold calling; Dial247.AI",
    },
    {
      title: "Admin Task Simplification",
      body: "Reduce the need for a large administrative staff for mundane tasks like appointment scheduling, visitor confirmations.",
    },
    {
      title: "No Need for Call Centers",
      body: "Eliminate the hassle of setting up traditional call centers.",
    },
    {
      title: "No SDR Army Required",
      body: "Forget about hiring a large team for cold calling; Dial247.AI",
    },
    {
      title: "Admin Task Simplification",
      body: "Reduce the need for a large administrative staff for mundane tasks like appointment scheduling, visitor confirmations.",
    },
    // Add more card data as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div key={index} className="p-2">
            <Card title={card.title} body={card.body} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
