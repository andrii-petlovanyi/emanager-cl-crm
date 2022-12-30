import { Box } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      position="fixed"
      bottom="0"
      left="50px"
      display={{ base: 'none', lg: 'flex' }}
      //   justifyContent="center"
      //   alignItems="center"
      height="50px"
      color="secondaryTextColor"
      opacity="0.3"
    >
      &copy; {new Date().getFullYear()} | Petlovanyi A.
    </Box>
  );
};

export default Footer;
