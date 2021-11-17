import { Box } from '@chakra-ui/react';

import { ShellLayout } from 'components/layout';
import SomeImage from 'components/SomeImage';
import SomeText from 'components/SomeText';

const Shell = () => {
  return (
    <ShellLayout>
      <Box mb={8} w="full">
        <SomeText />
        <SomeImage />
      </Box>
    </ShellLayout>
  );
};

export default Shell;
