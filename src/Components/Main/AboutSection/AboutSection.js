import classes from "./AboutSection.module.scss";
import Card from "../../UI/card/Card";

const AboutSection = () => {
  return (
    <section id="about">
      <Card
        heading={"About Me"}
        className={classes.about}
        container={classes.container}
      >
        <p>
          I build things, beautiful things! I'm very passionate about software
          development and it's real world applications. I'm detail oriented and
          can create rich web applications with complex user interfaces.
        </p>
        <p>
          I have over 2 year of experience with front-end development. I'm
          competent in libraries and framework such as React Js, Redux and Next
          Js, as well as Firebase which is used for back-end development.
        </p>
      </Card>
    </section>
  );
};

export default AboutSection;
