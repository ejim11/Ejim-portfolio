import classes from "./Projects.module.scss";
import Card from "../../UI/card/Card";
import ProjectItems from "./ProjecItem/ProjectItems";

const Projects = () => {
  const text =
    "I like to stay busy and always have a project in the works. Take a look at some of the web applications I've dedicated my time to.";

  return (
    <section id="projects">
      <Card
        heading={"Projects"}
        text={text}
        container={classes["projects-container"]}
      >
        <ProjectItems />
      </Card>
    </section>
  );
};

export default Projects;
