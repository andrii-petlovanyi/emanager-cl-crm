import { Box, Skeleton, SkeletonCircle } from '@chakra-ui/react';

const OfferLoader = () => {
  return (
    <>
      <Box
        position="relative"
        maxW={{ base: '420px', lg: '320px' }}
        mx={{ base: 'auto', md: '0' }}
        width="100%"
        boxShadow="cardShadow"
        bg="sectionBG"
        display="flex"
        borderRadius="10px"
        height="142px"
      >
        <Box
          position="absolute"
          top="20px"
          left="20px"
          display="flex"
          gap="15px"
          alignItems="center"
        >
          <SkeletonCircle size="12" startColor="gray.600" endColor="gray.800" />
          <Box display="flex" flexDirection="column" gap="10px">
            <Skeleton
              height="15px"
              width="120px"
              borderRadius="10px"
              startColor="gray.600"
              endColor="gray.800"
            />
            <Skeleton
              height="15px"
              width="60px"
              borderRadius="10px"
              startColor="gray.600"
              endColor="gray.800"
            />
          </Box>
        </Box>
        <Box position="absolute" bottom="20px" left="50%">
          <Skeleton
            width="120px"
            height="35px"
            borderRadius="10px"
            transform="translateX(-50%)"
            startColor="gray.600"
            endColor="gray.800"
          />
        </Box>
        <Box
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
            width="40px"
            height="20px"
            startColor="gray.600"
            endColor="gray.800"
          />
        </Box>
      </Box>
    </>
  );
};

export default OfferLoader;
