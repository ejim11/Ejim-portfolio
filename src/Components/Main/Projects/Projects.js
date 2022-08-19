import classes from "./Projects.module.scss";
import Card from "../../UI/card/Card";
import ProjectItems from "./ProjecItem/ProjectItems";

const Projects = () => {
  return (
    <section id="projects">
      <Card heading={"Projects"} container={classes["projects-container"]}>
        <ProjectItems />
      </Card>
    </section>
  );
};

export default Projects;
