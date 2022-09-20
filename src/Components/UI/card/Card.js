import classes from "./Card.module.scss";
import { motion } from "framer-motion";

const Card = (props) => {
  return (
    <div className={`${classes["card"]} ${props.className}`}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeIn", delay: 0.1 }}
        className={classes["card-color-box"]}
        viewport={{ once: true }}
      ></motion.div>
      <motion.h2
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeIn", delay: 0.1 }}
        viewport={{ once: true }}
      >
        {props.heading}
      </motion.h2>
      <div className={props.container}>{props.children}</div>
    </div>
  );
};

export default Card;
