import { Box } from "@chakra-ui/react";

import SomeImage from "components/SomeImage";
import SomeText from "components/SomeText";

const Home = () => {
  return (
    <Box mb={8} w="full">
      <SomeText />
      <SomeImage />
    </Box>
  );
};

export default Home;
