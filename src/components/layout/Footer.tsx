import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center">
      <Text>
        {new Date().getFullYear()} -{" "}
        <Link href="https://github.com/D3kion/next-chakra" isExternal>
          D3kion
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
