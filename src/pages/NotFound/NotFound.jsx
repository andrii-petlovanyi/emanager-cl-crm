import { Box, Heading, Text } from '@chakra-ui/react';

export default function NotFound() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="3xl"
        bgGradient="linear(to-r, blue.400, blue.600)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="24px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={'gray.500'} fontSize="18px" mb={6}>
        The page you&apos;re looking for does not seem to exist
      </Text>
    </Box>
  );
}
