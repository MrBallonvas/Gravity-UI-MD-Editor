import { Button, Flex, Icon, Text } from "@gravity-ui/uikit";
import { Moon, Sun, Printer, FloppyDisk } from "@gravity-ui/icons";
import { useContext } from "react";
import Context from "app/Context";

const Header = () => {
  const { theme, toggleTheme } = useContext(Context);
  return (
    <Flex
      spacing={{ p: 3 }}
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      style={{
        backgroundColor: "var(--g-color-text-hint)",
      }}
    >
      <Text variant="header-1">Gravity UI MD-Editor</Text>
      <Flex gap='1'>
      <Button view="action" onClick={() => {}}>
          <Icon data={FloppyDisk} />
        </Button>
        <Button view="action" onClick={() => {}}>
          <Icon data={Printer} />
        </Button>
        <Button view="action" onClick={toggleTheme}>
          <Icon data={theme === "light" ? Moon : Sun} />
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
