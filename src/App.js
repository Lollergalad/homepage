import { memo } from "react";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Work from "./components/Work/Work";

const App = () => {
  return (
    <>
      <Home />
      <About />
      <Work />
    </>
  );
};

export default memo(App);
