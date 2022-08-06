import { Navigate, Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import Info from "./components/Info/Info";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";
import ProtectedRoute from "./ProtectedRoute";
//import { AuthContext } from "./Authentication";

const App = () => {
  // const location = useLocation();

  // const { refreshToken } = useContext(AuthContext);

  // const parseJwt = (token) => {
  //   try {
  //     return JSON.parse(atob(token.split(".")[1]));
  //   } catch (e) {
  //     return null;
  //   }
  // };

  // const checkTokenExpiration = useCallback(() => {
  //   const userData = JSON.parse(localStorage.getItem("user"));
  //   if (userData) {
  //     const decodedJwt = parseJwt(userData.accessToken);
  //     if (decodedJwt.exp * 1000 < Date.now()) {
  //       refreshToken();
  //     }
  //   }
  // }, [refreshToken]);

  // useEffect(() => {
  //   console.log({ location });
  //   checkTokenExpiration();
  // }, [checkTokenExpiration, location]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Home />} />
        <Route path="info" element={<Info />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
