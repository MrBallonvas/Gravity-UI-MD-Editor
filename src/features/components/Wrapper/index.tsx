import { Container } from "@gravity-ui/uikit";
import Header from "../Header";

const Wrapper = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};

export default Wrapper;
