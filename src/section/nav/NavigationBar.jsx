import React from "react";
import lwsImage from "../../assets/lws.svg";
import Button from "../../components/Button";

const NavigationBar = () => {
  return (
    <>
      <div className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent">
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="flex w-full items-center justify-between px-4 py-3">
              <a
                href="index.html"
                className="navbar-logo block w-60 max-w-full px-4"
              >
                <img src={lwsImage} alt="logo" className="header-logo h-12" />
              </a>

              <ul className="hidden lg:flex">
                <li className="group relative">
                  <a
                    href="#home"
                    className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
                  >
                    Home
                  </a>
                </li>
                <li className="group relative">
                  <a
                    href="#about"
                    className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                  >
                    About
                  </a>
                </li>
                <li className="group relative">
                  <a
                    href="#pricing"
                    className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                  >
                    Pricing
                  </a>
                </li>
                <li className="group relative">
                  <a
                    href="blog-grids.html"
                    className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                  >
                    Blog
                  </a>
                </li>
              </ul>

              <div className="flex items-center justify-center">
                <Button
                  buttonContent="Sign In"
                  buttonLink="signin.html"
                  buttonState="0"
                />
                <Button
                  buttonContent="Sign Up"
                  buttonLink="signup.html"
                  buttonState="2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
