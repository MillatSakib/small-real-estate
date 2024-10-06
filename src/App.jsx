import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NavigationBar from "./section/nav/NavigationBar";
import Hero from "./section/HeroSection.jsx/Hero";
import MainFeatures from "./section/MainFeature/MainFeatures";
import GrabDream from "./section/GrabDream/GrabDream";
import About from "./section/About/About";
import Faq from "./section/FAQ/Faq";
import OurClients from "./section/OurClients/OurClients";
import Contact from "./section/Contact/Contact";
import Footer from "./section/Footer/Footer";
import GetStarted from "./section/GetStarted/GetStarted";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavigationBar></NavigationBar>
      <Hero></Hero>
      <MainFeatures></MainFeatures>
      <GrabDream></GrabDream>
      <About></About>
      <GetStarted></GetStarted>
      <Faq></Faq>
      <OurClients></OurClients>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
