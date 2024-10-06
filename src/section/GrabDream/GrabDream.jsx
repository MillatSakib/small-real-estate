import React from "react";
import HouseComponent from "../../components/HouseComponent";
import GrabDreamCard from "./GrabDreamCard";
import realEstate1 from "../../assets/real-estate02.jpg";
import realEstate2 from "../../assets/real-estate03.jpg";
import realEstate3 from "../../assets/real-estate04.jpg";
import realEstate4 from "../../assets/real-estate05.jpg";
import realEstate5 from "../../assets/real-estate06.jpg";
import realEstate0 from "../../assets/real-estate01.jpg";

const GrabDream = () => {
  const cardData = [
    {
      id: 1,
      title: "Modern Design villa",
      imgSrc: realEstate0,
      price: 3000,
      bedroom: 3,
      bathroom: 2,
    },
    {
      id: 2,
      title: "Snigdha villa",
      imgSrc: realEstate1,
      price: 3100,
      bedroom: 2,
      bathroom: 2,
    },
    {
      id: 3,
      title: "Manager Manson",
      imgSrc: realEstate2,
      price: 2500,
      bedroom: 3,
      bathroom: 1,
    },
    {
      id: 4,
      title: "Forazi villa",
      imgSrc: realEstate3,
      price: 4000,
      bedroom: 5,
      bathroom: 3,
    },
    {
      id: 5,
      title: "Talukdar villa",
      imgSrc: realEstate4,
      price: 3700,
      bedroom: 4,
      bathroom: 2,
    },
    {
      id: 6,
      title: "House Garden villa",
      imgSrc: realEstate5,
      price: 2000,
      bedroom: 2,
      bathroom: 1,
    },
  ];
  return (
    <>
      <section>
        <div className="container">
          <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
            <span className="mb-2 block text-lg font-semibold text-primary">
              Properties
            </span>
            <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
              Grab your Dream Property
            </h2>
            <p className="text-base text-body-color dark:text-dark-6">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardData.map((data) => (
              <GrabDreamCard key={data.id} data={data}></GrabDreamCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GrabDream;
