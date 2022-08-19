import Card from "../../UI/card/Card";
import classes from "./Technologies.module.scss";
import { FaDatabase } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

const Technologies = () => {
  return (
    <section id="technologies">
      <Card
        heading={"Tech Stack"}
        className={classes["tech-stack"]}
        container={classes["tech-container"]}
      >
        <p className={classes["tech-container-paragraph"]}>
          I've worked with a few technologies in the front-end and back-end
          development field. Some of the tools I'm familiar with include:
        </p>
        <div className={classes["tech-stack-box"]}>
          <div className={classes["tech-stack-box-item"]}>
            <FaReact className={classes.icon} />
            <h3>Front-End</h3>
            <p>Experience with :</p>
            <ul>
              <li>Html/Css</li>
              <li>Scss</li>
              <li>Javascript</li>
              <li>React Js</li>
              <li>Styled Components</li>
              <li>Redux/Redux-Toolkit</li>
              <li>Material UI</li>
              <li>Next Js</li>
            </ul>
          </div>
          <div className={classes["tech-stack-box-item"]}>
            <FaDatabase className={classes.icon} />
            <h3>Back-End</h3>
            <p>Experience with :</p>
            <ul>
              <li>Firebase</li>
            </ul>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default Technologies;
