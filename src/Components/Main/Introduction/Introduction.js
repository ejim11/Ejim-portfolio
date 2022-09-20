import SvgAnimation from "../../UI/Svganimation/SvgAnimation";
import classes from "./Introduction.module.scss";
import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <section className={classes.intro}>
      <div className={classes["intro-text"]}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className={classes["intro-text-greeting"]}
        >
          Hello, I am
        </motion.p>
        <p className={classes["intro-text-name"]}>EJIM</p>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
        >
          Front-End developer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: "30" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className={classes["intro-text-text"]}
        >
          I am a Front-end developer building interactive, scalable and
          responsive Web apps using ReactJs.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: "30" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeIn", delay: 0.5 }}
          className={classes["intro-text-text"]}
        >
          I am competent in building small full-stack apps using ReactJs/NextJs
          and Firebase.
        </motion.p>
      </div>
      <SvgAnimation />
    </section>
  );
};

export default Introduction;
