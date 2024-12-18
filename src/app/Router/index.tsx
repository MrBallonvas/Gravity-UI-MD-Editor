import Wrapper from "features/components/Wrapper";
import About from "pages/About";
import Editor from "pages/Editor";
import Index from "pages/Index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/editor"
          element={
            <Wrapper>
              <Editor />
            </Wrapper>
          }
        />
        <Route
          path="/"
          element={
            <Wrapper>
              <Index />
            </Wrapper>
          }
        />
        <Route
          path="/about"
          element={
            <Wrapper>
              <About />
            </Wrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
