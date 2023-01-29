import { Box, Flex, Text } from '@chakra-ui/react';
import ChangeEmail from './ChangeEmail';
import ChangePass from './ChangePass';

const UserSettings = () => {
  return (
    <Box pos="relative">
      <Text mb="10px" textAlign="center">
        Your settings
      </Text>
      <Flex gap="10px" flexDirection="column">
        <ChangePass />
        <ChangeEmail />
      </Flex>
    </Box>
  );
};

export default UserSettings;
