import { Box, Heading, Text } from '@chakra-ui/react';

const UserProfile = ({ ...rest }) => {
  return (
    <>
      <Box
        pos="fixed"
        display={{ base: 'block', lg: 'none' }}
        right={{ base: '20px' }}
        left={{ lg: '20px' }}
        top="80px"
        w={{ base: '230px', lg: '230px' }}
        transition="1s ease"
        p="20px 25px"
        bg="sectionBG"
        color="secondaryTextColor"
        borderRadius="20px"
        textAlign="center"
        {...rest}
      >
        <Heading fontSize="18px">Hello, Adrii</Heading>
        <Text>Admin</Text>
      </Box>
    </>
  );
};

export default UserProfile;
