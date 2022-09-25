import ButtonLink from "../../../UI/Button/ButtonLink";
import classes from "./ProjectItems.module.scss";
import countriesImg from "../../../../Asset/countries.jpg";
import spaceImg from "../../../../Asset/space.jpg";
import urlShorternerImg from "../../../../Asset/urlShorterner.jpg";
import todoImg from "../../../../Asset/todo.jpg";
import { motion } from "framer-motion";

const ProjectsData = [
  {
    id: "1",
    img: countriesImg,
    title: "Where in the world?",
    text: " A simple web-app with a beautiful layout that displays information about countries in the world. It displays a list of countries with details about them. They can be filtered according to different regions, searched for and clicked on to display more information on the country.",
    techs: ["Next", "Scss", "Context-Api"],
    visit: "https://rest-countries-app-ten.vercel.app/",
    source: "https://github.com/ejim11/countries-app",
  },
  {
    id: "2",
    img: todoImg,
    title: "Todo App",
    text: "A simple todo app with drag and drop features, light and dark modes built with react js and scss. It seperates your todos into active and completed states and has editing features for active todos. This todo app can be used for simple tasks like going to store, home chores and so much more. ",
    techs: ["React", "Scss", "Context-Api"],
    visit: "https://todo-app-c7a15.web.app/",
    source: "https://github.com/ejim11/Todo-app",
  },
  {
    id: "3",
    img: urlShorternerImg,
    title: "Url Shortening App",
    text: "A url-shortening-app built with react Js that makes using of shortened links easier than ever. It stores the shortened link in your browser for easy access anytime.",
    techs: ["React", "Scss", "Redux-Toolkit"],
    visit: "https://shortenedlinks-b1cdf.web.app/",
    source: "https://github.com/ejim11/url-shortening-app",
  },
  {
    id: "4",
    img: spaceImg,
    title: "Space Tourism",
    text: "A space blog web app that sheds more light on space exploration and certain planetary bodies in our solar system. It displays crews and destination for space tourism",
    techs: ["React", "Scss", "Redux-Toolkit"],
    visit: "https://space-tourism-app.web.app/Home",
    source: "https://github.com/ejim11/space-tourism-website",
  },
];

const ProjectItems = () => {
  const projectsList = ProjectsData.map((item) => (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      key={item.id}
      className={classes["project-item"]}
    >
      <div>
        <img src={item.img} alt={item.title} />
      </div>
      <h3>{item.title}</h3>
      <p className={classes["project-item-text"]}>{item.text}</p>
      <p className={classes["project-item-st"]}>STACK</p>
      <div className={classes["project-item-stack-box"]}>
        {item.techs.map((tech, i) => (
          <p key={i}>{tech}</p>
        ))}
      </div>
      <div className={classes["project-item-btns"]}>
        <ButtonLink to={item.visit}>Visit</ButtonLink>
        <ButtonLink to={item.source}>Source</ButtonLink>
      </div>
    </motion.div>
  ));

  return <>{projectsList}</>;
};

export default ProjectItems;
