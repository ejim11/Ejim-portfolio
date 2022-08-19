import classes from "./ButtonLink.module.scss";

const ButtonLink = (props) => {
  return (
    <a
      href={props.to}
      target="blank"
      className={`${classes.btn} ${props.className}`}
    >
      {props.children}
    </a>
  );
};

export default ButtonLink;
