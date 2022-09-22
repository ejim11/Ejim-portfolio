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
          I'm a young lad currently advancing my knowledge in web development
          and design.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: "30" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeIn", delay: 0.5 }}
          viewport={{ once: true }}
        >
          As I've grown as a developer, I've worked alongside senior designers
          and developers who have helped raise my standards for what's expected
          of any application.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: "30" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeIn", delay: 0.8 }}
          viewport={{ once: true }}
        >
          THrough these experiences, I've had the opportunity to create
          memorable products that are not only enjoyable to use but are written
          in code that's maintainable and easy to understand.
        </motion.p>
      </Card>
    </section>
  );
};

export default AboutSection;
