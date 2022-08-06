import { Navigate, Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import Info from "./components/Info/Info";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="info" element={<Info />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
