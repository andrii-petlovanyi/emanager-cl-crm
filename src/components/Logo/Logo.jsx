/* eslint-disable no-unused-vars */
import { Text } from '@chakra-ui/react';

const Logo = ({ ...res }) => {
  return (
    <Text
      position={{ lg: 'fixed' }}
      top={{ lg: '20px' }}
      left={{ lg: '20px' }}
      display={{ base: 'none', lg: 'flex' }}
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
