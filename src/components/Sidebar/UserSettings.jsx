import { Box } from '@chakra-ui/react';

const UserSettings = ({ ...rest }) => {
  return (
    <Box
      pos="fixed"
      display={{ base: 'block', lg: 'none' }}
      mr={{ base: '20px' }}
      ml={{ base: 'auto', lg: '20px' }}
      mt={{ base: '300px', lg: '370px' }}
      w="230px"
      p="20px 5px"
      transition="1s ease"
      bg="sectionBG"
      borderRadius="10px"
      {...rest}
    >
      UserSettings
    </Box>
  );
};

export default UserSettings;
