import React from "react";
import HouseComponent from "../../components/HouseComponent";
import GrabDreamCard from "./GrabDreamCard";

const GrabDream = () => {
  const cardData = [
    {
      id: 1,
      title: "Modern Design villa",
      imgSrc:
        "https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
      price: 3000,
      bedroom: 3,
      bathroom: 2,
    },
    {
      id: 2,
      title: "Modern Design villa",
      imgSrc:
        "https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
      price: 3000,
      bedroom: 3,
      bathroom: 2,
    },
    {
      id: 3,
      title: "Modern Design villa",
      imgSrc:
        "https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
      price: 3000,
      bedroom: 3,
      bathroom: 2,
    },
    {
      id: 4,
      title: "Modern Design villa",
      imgSrc:
        "https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
      price: 3000,
      bedroom: 3,
      bathroom: 2,
    },
    {
      id: 5,
      title: "Modern Design villa",
      imgSrc:
        "https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
      price: 3000,
      bedroom: 3,
      bathroom: 2,
    },
    {
      id: 6,
      title: "Modern Design villa",
      imgSrc:
        "https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
      price: 3000,
      bedroom: 3,
      bathroom: 2,
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
