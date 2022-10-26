import { Box } from "@chakra-ui/react";
import React from "react";
import ToggleColorMode from "../components/toggleColorMode";

const Home = () => {
  return (
    <Box position="relative">
      <ToggleColorMode />
    </Box>
  );
};

export default Home;
