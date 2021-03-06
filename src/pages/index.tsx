import { Box } from '@chakra-ui/react';

import { PromoLayout } from 'components/layout';
import SomeImage from 'components/SomeImage';
import SomeText from 'components/SomeText';

const Home = () => {
  return (
    <PromoLayout>
      <Box mb={8} w="full">
        <SomeText />
        <SomeImage />
      </Box>
    </PromoLayout>
  );
};

export default Home;
