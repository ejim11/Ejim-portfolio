import classes from "./Header.module.scss";
import { HashLink as Link } from "react-router-hash-link";
import AboutSection from "../Main/AboutSection/AboutSection";
import MediaLinks from "../UI/MediaLinks/MediaLinks";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const displayMenuHandler = () => {
    setMenuVisible((prevState) => !prevState);
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
        <ul>
          <li>
            <Link to={"#about"} component={<AboutSection />}>
              About
            </Link>
          </li>
          <li>
            <Link to={"#technologies"}>Technologies</Link>
          </li>
          <li>
            <Link to={"#projects"}>Projects</Link>
          </li>
        </ul>
      </nav>
      <div className={classes["media-links"]}>
        <MediaLinks />
      </div>
    </header>
  );
};

export default Header;
