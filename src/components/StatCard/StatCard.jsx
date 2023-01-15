import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { MdNorthEast } from 'react-icons/md';

const StatCard = () => {
  return (
    <Box
      minW="230px"
      //   maxW="260px"
      height="117px"
      bg="sectionBG"
      boxShadow="0px 10px 30px rgba(0, 0, 6, 0.15)"
      borderRadius="8px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      gridGap="24px"
    >
      <Box
        width="68px"
        borderRadius="full"
        border="3px solid"
        borderColor="green"
        height="68px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <MdNorthEast fontSize="25px" />
      </Box>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gridGap="8px"
      >
        <Text fontSize="18px">Total Posts</Text>
        <Heading fontSize="26px">680</Heading>
      </Flex>
    </Box>
  );
};

export default StatCard;
