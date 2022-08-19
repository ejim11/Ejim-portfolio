import SvgAnimation from "../../UI/Svganimation/SvgAnimation";
import classes from "./Introduction.module.scss";

const Introduction = () => {
  return (
    <section className={classes.intro}>
      <div className={classes["intro-text"]}>
        <p className={classes["intro-text-greeting"]}>Hello, I am </p>
        <p className={classes["intro-text-name"]}>EJIM</p>
        <h1>Front-End developer</h1>{" "}
        <p className={classes["intro-text-text"]}>
          I am a Front-end developer building interactive, scalable and
          responsive Web apps using ReactJs.
        </p>
        <p className={classes["intro-text-text"]}>
          I am competent in building small full-stack apps using ReactJs/NextJs
          and Firebase.
        </p>
      </div>
      <SvgAnimation />
    </section>
  );
};

export default Introduction;
