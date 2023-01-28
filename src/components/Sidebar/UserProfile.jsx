/* eslint-disable react/prop-types */
import { Box, Divider, Heading, IconButton, Tooltip } from '@chakra-ui/react';
import { MdOutlineSettings } from 'react-icons/md';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import UserNote from './UserNote';

const UserProfile = ({ openSetting, setOpenSetting, ...rest }) => {
  const username = useSelector(authSelectors.userName);

  return (
    <>
      <Box
        pos="fixed"
        display={{ base: 'block', lg: 'none' }}
        mr={{ base: '20px' }}
        ml={{ lg: '20px' }}
        mt={{ base: '0', lg: '80px' }}
        w={{ base: '230px', lg: '230px' }}
        transition="1s ease"
        p="20px 25px"
        bg="sectionBG"
        color="secondaryTextColor"
        borderRadius="10px"
        textAlign="center"
        {...rest}
      >
        <Heading fontSize="18px">
          Hello, {username ? username : 'Admin'}
        </Heading>

        <Tooltip hasArrow label="User Settings" bg="gray.300" color="black">
          <IconButton
            position="absolute"
            top="0"
            right="0"
            variant="customIB"
            fontSize="20px"
            color={openSetting ? 'secondaryTextColor' : 'primaryTextColor'}
            aria-label="User setting button"
            icon={<MdOutlineSettings />}
            size="md"
            onClick={() => setOpenSetting(prev => !prev)}
          />
        </Tooltip>
        <Divider my="15px" />
        <UserNote />
      </Box>
    </>
  );
};

export default UserProfile;
