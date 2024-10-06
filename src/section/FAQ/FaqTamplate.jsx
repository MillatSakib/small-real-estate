import React from "react";
import FaqSVG from "../../components/FaqSVG";

const FaqTamplate = ({ data }) => {
  return (
    <>
      <div className="w-full px-4 lg:w-1/2">
        <div className="mb-12 flex lg:mb-[70px]">
          <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
            <FaqSVG />
          </div>
          <div className="w-full">
            <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              {data.title}
            </h3>
            <p className="text-base text-body-color dark:text-dark-6">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqTamplate;
