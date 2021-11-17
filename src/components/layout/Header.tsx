import { Box, Flex, Heading, Button } from '@chakra-ui/react';
import Link from 'next/link';

import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Heading as="h1" size="md">
        <Link href="/">nextarter-chakra</Link>
      </Heading>

      <Flex marginLeft="auto">
        <Box>
          <ThemeToggle />
        </Box>

        <Button marginLeft={2}>
          <Link href="/signin">Sign in</Link>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
