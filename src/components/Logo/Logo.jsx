/* eslint-disable no-unused-vars */
import { Text } from '@chakra-ui/react';
import '@fontsource/montserrat';

const Logo = ({ ...res }) => {
  return (
    <Text
      position={{ lg: 'fixed' }}
      mt={{ lg: '20px' }}
      ml={{ lg: '20px' }}
      display={{ base: 'none', lg: 'flex' }}
      fontFamily="'Montserat' san-serif"
      fontSize="26px"
      fontWeight="700"
      color="secondaryTextColor"
      {...res}
    >
      EManager
    </Text>
  );
};

export default Logo;
