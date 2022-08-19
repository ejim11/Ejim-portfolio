import classes from "./Card.module.scss";

const Card = (props) => {
  return (
    <div className={`${classes["card"]} ${props.className}`}>
      <div className={classes["card-color-box"]}></div>
      <h2>{props.heading}</h2>
      <div className = {props.container}>{props.children}</div>
    </div>
  );
};

export default Card;
