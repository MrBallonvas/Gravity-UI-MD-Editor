import { createContext } from "react";

interface IContext {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

const Context = createContext<IContext>({
  theme: "light",
  toggleTheme: () => {},
});

export default Context;
