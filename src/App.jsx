import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NavigationBar from "./section/nav/NavigationBar";
import Hero from "./section/HeroSection.jsx/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavigationBar></NavigationBar>
      <Hero></Hero>
    </>
  );
}

export default App;
