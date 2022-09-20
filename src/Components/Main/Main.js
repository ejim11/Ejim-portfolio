// import { Routes, Route } from "react-router-dom";
import AboutSection from "./AboutSection/AboutSection";
import Introduction from "./Introduction/Introduction";
import Projects from "./Projects/Projects";
import Technologies from "./Technologies/Technologies";
import classes from "./Main.module.scss";

const Main = () => {
  return (
    <main>
      {/* greeting section */}
      <Introduction />
      <div className={classes["inner-box"]}>
        {/* about me section */}
        <AboutSection />
        {/*Tech stack*/}
        <Technologies />
      </div>
      {/* Projects */}
      <Projects />
    </main>
  );
};

export default Main;
