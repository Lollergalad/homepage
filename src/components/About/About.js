import classNames from "classnames";

import profilePicture from "./profile_picture.png";

import classes from "./About.module.scss";

const About = () => {
  return (
    <section className={classes.about}>
      <div className={classes.picture}>
        <img src={profilePicture} alt="profile_picture" />
      </div>
      <div
        className={classNames(classes.description, classes.shortDescription)}
      >
        <div>
          I'm a Hungarian Web Developer living/working in Budapest, Hungary.
        </div>
        <br />
        <div>
          I studied the University of Miskolc, where I learned Software
          Engineering and earned my bachelor's (2014) and master's (2016)
          degree.
        </div>
        <br />
        <div>
          I worked in Miskolc at first, where I started to learn the basics of
          web development. Later I moved to Budapest after. I love Budapest,
          there are so many opportunities, places to visit.
        </div>
      </div>
    </section>
  );
};

export default About;
