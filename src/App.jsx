import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NavigationBar from "./section/nav/NavigationBar";
import Hero from "./section/HeroSection.jsx/Hero";
import MainFeatures from "./section/MainFeature/MainFeatures";
import GrabDream from "./section/GrabDream/GrabDream";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavigationBar></NavigationBar>
      <Hero></Hero>
      <MainFeatures></MainFeatures>
      <GrabDream></GrabDream>
    </>
  );
}

export default App;
