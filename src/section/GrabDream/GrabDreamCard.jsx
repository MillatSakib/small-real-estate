import React from "react";
import HouseComponent from "../../components/HouseComponent";

const GrabDreamCard = ({ data }) => {
  return (
    <>
      {/* Property Item 1 */}
      <div className="p-4 bg-white rounded-lg border border-gray-600/10">
        <img src={data.imgSrc} alt="property" />

        <div className="p-6">
          <h4 className="text-2xl font-bold cursor-pointer">{data.title}</h4>
          <div className="mt-2">
            <span className="text-xl font-extrabold text-blue-600">
              ${data.price}
            </span>{" "}
            /M
          </div>
        </div>
        <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
          <div className="flex items-center">
            <HouseComponent componnetReturn="bedroom" />
            <p>
              <span className="font-bold text-gray-900">{data.bedroom}</span>{" "}
              Bedrooms
            </p>
          </div>
          <div className="flex items-center">
            <HouseComponent componnetReturn="bathroom" />
            <p>
              <span className="font-bold text-gray-900">{data.bathroom}</span>{" "}
              Bathrooms
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GrabDreamCard;
