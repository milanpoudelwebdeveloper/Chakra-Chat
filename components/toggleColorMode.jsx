import { Button, useColorMode } from "@chakra-ui/react";
import React from "react";

const toggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return <Button></Button>;
};

export default toggleColorMode;
