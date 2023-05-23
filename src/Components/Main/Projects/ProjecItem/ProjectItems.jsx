import ButtonLink from "../../../UI/Button/ButtonLink";
import classes from "./ProjectItems.module.scss";
import escrowImg from "../../../../Asset/escrow.jpg";
import audiophileImg from "../../../../Asset/Screenshot_10.jpg";
import techanImg from "../../../../Asset/techan.jpg";
import todoImg from "../../../../Asset/todo.jpg";
import { motion } from "framer-motion";

const ProjectsData = [
  {
    id: "1",
    img: techanImg,
    title: "Techan Web App",
    text: "Techan is a start up company with its main product 'PAPERLX'. It's aim is to make credentials and cerificates of individuals stored on the blockchain for easy accessibilty and verification",
    techs: ["React", "Tailwind Css", "Context-api", "Firebase"],
    visit: "https://techan-a45c8.web.app/",
    source: "",
  },
  {
    id: "2",
    img: audiophileImg,
    title: "Audiophile",
    text: " An e-commerce website for audio devices like headphones, speakers and earphones. Users can register and login or buy products as visitors",
    techs: ["React", "Scss", "Reduxjs/toolkit"],
    visit: "https://audiophile-app.vercel.app/",
    source: "https://github.com/ejim11/audiophile-app",
  },
  {
    id: "3",
    img: escrowImg,
    title: "Escrow Dapp",
    text: " A simple escrow decentralized application that mediates transactions between untrusted parties",
    techs: ["React", "Tailwind Css", "Reduxjs/toolkit", "Solidity"],
    visit: "https://escrow-dapp-2vhxykfmj-ejim11.vercel.app/",
    source: "https://github.com/ejim11/escrow-dapp",
  },
  {
    id: "4",
    img: todoImg,
    title: "Todo App",
    text: "A simple and interactive todo app which enables you to track your tasks in an easy way differentiating them into active and completed tasks",
    techs: ["React", "Scss", "Context-api"],
    visit: "https://todo-app-c7a15.web.app/",
    source: "https://github.com/ejim11/Todo-app",
  },
];

const ProjectItems = () => {
  const projectsList = ProjectsData.map((item) => (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      viewport={{ once: true }}
      key={item.id}
      className={classes["project-item"]}
    >
      <div className={classes["project-item-img"]}>
        <img src={item.img} alt={item.title} />
      </div>
      <h3>{item.title}</h3>
      <p className={classes["project-item-text"]}>{item.text}</p>
      <div className={classes["project-item-stack-container"]}>
        <p className={classes["project-item-st"]}>STACK</p>
        <div className={classes["project-item-stack-box"]}>
          {item.techs.map((tech, i) => (
            <p key={i}>{tech}</p>
          ))}
        </div>
      </div>
      <div className={classes["project-item-btns"]}>
        <ButtonLink to={item.visit}>Visit</ButtonLink>
        {item.source ? (
          <ButtonLink to={item.source}>Source</ButtonLink>
        ) : (
          <p>Private Repository</p>
        )}
      </div>
    </motion.div>
  ));

  return <>{projectsList}</>;
};

export default ProjectItems;
