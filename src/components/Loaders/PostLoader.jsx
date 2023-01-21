/* eslint-disable no-unused-vars */

import { Box, Skeleton, SkeletonText } from '@chakra-ui/react';

/* eslint-disable react/prop-types */
const PostLoader = () => {
  return (
    <>
      <Box
        position="relative"
        maxW={{ base: '100%', md: '480px' }}
        boxShadow="lg"
        bg="sectionBG"
        display="flex"
        borderRadius="10px"
        height="150px"
      >
        <Skeleton
          flex="1"
          borderLeftRadius="10px"
          startColor="gray.600"
          endColor="gray.800"
        />
        <Box
          flex="2"
          display="flex"
          gap="30px"
          flexDirection="column"
          justifyContent="center"
        >
          <Skeleton
            mx="auto"
            borderRadius="10px"
            maxWidth="120px"
            width="100%"
            height="40px"
            startColor="gray.600"
            endColor="gray.800"
          />

          <Skeleton
            position="absolute"
            top="10px"
            right="15px"
            mx="auto"
            borderRadius="10px"
            width="10px"
            height="25px"
            startColor="gray.600"
            endColor="gray.800"
          />
          <Skeleton
            position="absolute"
            bottom="0"
            right="0"
            mx="auto"
            borderTopLeftRadius="10px"
            borderBottomRightRadius="10px"
            width="30px"
            height="20px"
            startColor="gray.600"
            endColor="gray.800"
          />
          <Box display="flex" gap="10px" justifyContent="center">
            <Skeleton
              borderRadius="5px"
              maxWidth="40px"
              width="100%"
              height="40px"
              startColor="gray.600"
              endColor="gray.800"
            />
            <Skeleton
              borderRadius="5px"
              maxWidth="40px"
              width="100%"
              height="40px"
              startColor="gray.600"
              endColor="gray.800"
            />
            <Skeleton
              borderRadius="5px"
              maxWidth="40px"
              width="100%"
              height="40px"
              startColor="gray.600"
              endColor="gray.800"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PostLoader;
