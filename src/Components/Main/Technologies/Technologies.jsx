import Card from "../../UI/card/Card";
import classes from "./Technologies.module.scss";
import { FaDatabase } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";

const Technologies = () => {
  return (
    <section id="technologies" className={classes["tech-sec"]}>
      <Card
        heading={"Tech Stack"}
        className={classes["tech-stack"]}
        container={classes["tech-container"]}
      >
        <motion.p
          initial={{ opacity: 0, y: "30" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          viewport={{ once: true }}
          className={classes["tech-container-paragraph"]}
        >
          Through my experience, I've gained a solid understanding of the
          computer and web development concepts, and have dedicated a lot of my
          free time to apply these concepts to real-world scenarios and
          applications.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          viewport={{ once: true }}
          className={classes["tech-stack-box"]}
        >
          <div className={classes["tech-stack-box-item"]}>
            <FaReact className={classes.icon} />
            <h3>Front-End</h3>
            <p>Experience with :</p>
            <ul>
              <li>Html/Css</li>
              <li>Scss</li>
              <li>Tailwind Css</li>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>React Js</li>
              <li>Next Js</li>
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeIn", delay: 0.1 }}
            viewport={{ once: true }}
            className={classes["tech-stack-box-item"]}
          >
            <FaDatabase className={classes.icon} />
            <h3>Back-End</h3>
            <p>Experience with :</p>
            <ul>
              <li>Firebase</li>
              <li>Solidity</li>
            </ul>
          </motion.div>
        </motion.div>
      </Card>
    </section>
  );
};

export default Technologies;
