import { ThemeProvider } from "@gravity-ui/uikit";
import Router from "./Router";
import "./styles/index.css";
import "@gravity-ui/uikit/styles/fonts.css";
import "@gravity-ui/uikit/styles/styles.css";
import Context from "./Context";
import { useState } from "react";

const App = () => {
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "light");
  }
  const [theme, setTheme] = useState<"light" | "dark">(
    (localStorage.getItem("theme") as "light" | "dark") || "light"
  );

  function toggleTheme() {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  }

  return (
    <Context.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === "light" ? "light" : "dark"}>
        <Router />
      </ThemeProvider>
    </Context.Provider>
  );
};

export default App;
