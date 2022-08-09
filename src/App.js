import { memo } from "react";

import Home from "./components/Home/Home";
// import About from "./components/About/About";

const App = () => {
  return (
    <>
      <Home />
      {/* <About /> */}
    </>
  );
};

export default memo(App);
