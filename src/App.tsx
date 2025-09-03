import { useEffect } from "react";
import About from "./Components/About/About";
import Achievements from "./Components/Achievements/Achievements";
import ContactUs from "./Components/ContactUs/ContactUs";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Process from "./Components/Process/Process";
import Reviews from "./Components/Reviews/Reviews";
import Services from "./Components/Services/Services";
import { FaArrowUp } from "react-icons/fa";

const App = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [])

  return (
    <>
      <button className="BtnToTopPage"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });

        }}
      ><FaArrowUp /></button>
      <Header />
      <Hero />
      <About />
      <Achievements />
      <Services />
      <Process />
      <Reviews />
      <ContactUs />
    </>
  );
}

export default App;