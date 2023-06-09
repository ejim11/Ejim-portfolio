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
          transition={{ duration: 0.3, ease: "easeIn" }}
          className={classes["intro-text-greeting"]}
        >
          Hello, I am
        </motion.p>
        <p className={classes["intro-text-name"]}>EJIM</p>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
        >
          Front-End Engineer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: "30" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          className={classes["intro-text-text"]}
        >
          I build things, beautiful things! I'm very passionate about software
          development and it's real world applications. I'm detail oriented and
          can create rich web applications with complex user interfaces.
        </motion.p>
        <motion.a href="mailto:favourejim56@gmail.com" target="blank" initial={{ opacity: 0, y: "30" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          className={classes["contact-me"]}>Contact Me</motion.a>
      </div>
      <SvgAnimation />
    </section>
  );
};

export default Introduction;
