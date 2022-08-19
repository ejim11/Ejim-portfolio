// import { Routes, Route } from "react-router-dom";
import AboutSection from "./AboutSection/AboutSection";
import Introduction from "./Introduction/Introduction";
import Projects from "./Projects/Projects";
import Technologies from "./Technologies/Technologies";

const Main = () => {
  return (
    <main>
      {/* greeting section */}
      <Introduction />
      {/* about me section */}
      <AboutSection />
      {/*Tech stack*/}
      <Technologies />
      {/* Projects */}
      <Projects />
    </main>
  );
};

export default Main;
