import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import classes from "./MediaLinks.module.scss";

const MediaLinks = () => {
  return (
    <>
      <a href="https://github.com/ejim11" target="blank">
        <FaGithub className={classes["icons"]} />
      </a>
      <a href="https://twitter.com/favourejim56" target="blank">
        <FaTwitter className={classes["icons"]} />
      </a>
      <a
        href="https://www.linkedin.com/in/favour-ejim-a29967238/"
        target="blank"
      >
        <FaLinkedin className={classes["icons"]} />
      </a>
    </>
  );
};

export default MediaLinks;
