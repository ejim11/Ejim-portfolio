import classes from "./AboutSection.module.scss";
import Card from "../../UI/card/Card";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className={classes["about-sec"]}>
      <Card
        heading={"About Me"}
        className={classes.about}
        container={classes.container}
      >
        <motion.p
          initial={{ opacity: 0, y: "30" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          viewport={{ once: true }}
        >
          I build things, beautiful things! I'm very passionate about software
          development and it's real world applications. I'm detail oriented and
          can create rich web applications with complex user interfaces.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: "30" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeIn", delay: 0.5 }}
          viewport={{ once: true }}
        >
          I have over 2 year of experience with front-end development. I'm
          competent in libraries and framework such as React Js, Redux and Next
          Js, as well as Firebase which is used for back-end development.
        </motion.p>
      </Card>
    </section>
  );
};

export default AboutSection;
