import React from "react";

const Button = ({ buttonContent, buttonLink, buttonState }) => {
  let buttonStyle;
  if (buttonState === "0") {
    buttonStyle =
      "flex-1 loginBtn px-[22px] py-2 text-base font-medium text-white hover:opacity-70";
  } else if (buttonState === "1") {
    buttonStyle =
      "inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2 hover:text-body-color";
  } else if (buttonState === "2") {
    buttonStyle =
      "flex items-center gap-4 rounded-md bg-white/[0.12] px-6 py-[14px] text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-dark";
  } else if (buttonState === "3") {
    buttonStyle =
      "inline-flex items-center justify-center rounded-md border border-primary bg-primary px-7 py-3 text-center text-base font-medium text-white hover:border-blue-dark hover:bg-blue-dark";
  }

  return (
    <div>
      <a href={buttonLink} className={buttonStyle}>
        {buttonContent}
      </a>
    </div>
  );
};

export default Button;
