import { Box, Skeleton } from '@chakra-ui/react';

const StatLoader = () => {
  return (
    <>
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
        gap="30px"
      >
        <Box>
          <Skeleton
            width="70px"
            height="70px"
            borderRadius="50%"
            startColor="gray.600"
            endColor="gray.800"
          />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="15px"
        >
          <Skeleton
            height="25px"
            width="150px"
            borderRadius="10px"
            startColor="gray.600"
            endColor="gray.800"
          />
          <Skeleton
            height="25px"
            width="70px"
            borderRadius="10px"
            startColor="gray.600"
            endColor="gray.800"
          />
        </Box>
      </Box>
    </>
  );
};

export default StatLoader;
