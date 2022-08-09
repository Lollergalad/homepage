import { createContext, useState } from "react";
import PropTypes from "prop-types";
import LANGUAGES from "./constants/languages";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState(LANGUAGES.EN);

  return (
    <AppContext.Provider
      value={{ isDarkMode, language, setIsDarkMode, setLanguage }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node,
};

export { AppContext, AppProvider };
