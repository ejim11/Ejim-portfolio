import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes["footer-container"]}>
        <div className={classes["footer-container-hr"]}></div>
        <div className={classes["footer-container-name"]}>EJIM FAVOUR</div>
        <div className={classes["footer-container-hr"]}></div>
      </div>
      <p>Innovating one project at a time</p>

      <p className={classes["footer-copyright"]}>
        Copyright © 2022 | All rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
