import classNames from "classnames";

import useTypeHook from "../../hooks/useTypeHook";
import TYPE_PHASES from "../../constants/typePhase";

import classes from "./Home.module.scss";

// ref: https://jigarsable.netlify.app/#experience

const dynamicWords = [
  "Backend Developer",
  "Frontend Developer",
  "Web Designer",
];

const Home = () => {
  const { dynamicWord, phase, selectedWord } = useTypeHook(dynamicWords);

  return (
    <section className={classes.home}>
      <div className={classes.welcomeText}>
        <div className={classes.static}>Welcome,</div>
        <div className={classes.static}>I'm Norbert Urbán</div>
        <div className={classes.static}>
          <span className={classes.static}>I Am a </span>
          <span
            className={classNames(classes.dynamic, {
              [classes.endCursor]: phase !== TYPE_PHASES.DELETING,
              [classes.blinking]: phase === TYPE_PHASES.PAUSING,
            })}
            aria-label={selectedWord}
          >
            {dynamicWord}
          </span>
        </div>
      </div>
      <div className={classes.circles}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
          <circle cx="170" cy="170" r="160" stroke="#00c0f5" />
          <circle cx="170" cy="170" r="135" stroke="#465060" />
          <circle cx="170" cy="170" r="110" stroke="#00c0f5" />
          <circle cx="170" cy="170" r="85" stroke="#465060" />
        </svg>
      </div>
    </section>
  );
};

export default Home;
