import classes from "./Header.module.scss";
import { HashLink as Link } from "react-router-hash-link";
import AboutSection from "../Main/AboutSection/AboutSection";
import MediaLinks from "../UI/MediaLinks/MediaLinks";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const displayMenuHandler = () => {
    setMenuVisible((prevState) => !prevState);
  };

  const list = {
    hide: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        // when: "beforeChildren",
        staggerChildren: 0.6,
      },
    },
  };

  const item = {
    hide: { opacity: 0, y: "-100%" },
    show: { opacity: 1, y: 0 },
  };

  return (
    <header className={classes.header}>
      <HiOutlineMenuAlt2
        onClick={displayMenuHandler}
        className={classes["menu-icon"]}
      />
      <h1 className={classes["header__title"]}>EJIM</h1>
      <nav
        onClick={displayMenuHandler}
        className={menuVisible ? classes["display-menu"] : classes["hide-menu"]}
      >
        <FaTimes className={classes["close-icon"]} />
        <motion.ul variants={list} initial={"hide"} animate={"show"}>
          <motion.li
            variants={item}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <Link to={"#about"} component={<AboutSection />}>
              About
            </Link>
          </motion.li>
          <motion.li
            variants={item}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <Link to={"#technologies"}>Technologies</Link>
          </motion.li>
          <motion.li
            variants={item}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <Link to={"#projects"}>Projects</Link>
          </motion.li>
        </motion.ul>
      </nav>
      <div className={classes["media-links"]}>
        <MediaLinks />
      </div>
    </header>
  );
};

export default Header;
