import classNames from "classnames";

import classes from "./Home.module.scss";
import useTypeHook from "../../hooks/useTypeHook";
import TYPE_PHASES from "../../constants/typePhase";

// import logo from "./logo.svg";

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
      {/* <div className={classes.imageContainer}>
        <img src={logo} alt="avatar" />
      </div> */}
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
    </section>
  );
};

export default Home;

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
