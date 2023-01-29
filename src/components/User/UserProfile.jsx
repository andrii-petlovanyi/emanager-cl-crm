import {
  Box,
  Divider,
  Heading,
  IconButton,
  Tooltip,
  useMediaQuery,
} from '@chakra-ui/react';
import { useState } from 'react';
import { MdClose, MdOutlineSettings } from 'react-icons/md';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import UserNote from './UserNote';
import UserSettings from './UserSettings';

const UserProfile = ({ ...rest }) => {
  const username = useSelector(authSelectors.userName);

  //ATTENTION: if need short username - use this
  // const shortUsername =
  //   username?.length > 15
  //     ? username.split(' ')[0] + ' ' + username.split(' ')[1][0]
  //     : username;

  const [openSetting, setOpenSetting] = useState(false);
  const [isLargerThan992] = useMediaQuery('(min-width: 992px)');

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

        <Tooltip
          isDisabled={!isLargerThan992}
          hasArrow
          label="User Settings"
          bg="gray.300"
          color="black"
        >
          <IconButton
            position="absolute"
            top="0"
            right="0"
            variant="customIB"
            fontSize="20px"
            color={openSetting ? 'secondaryTextColor' : 'primaryTextColor'}
            aria-label="User setting button"
            icon={openSetting ? <MdClose /> : <MdOutlineSettings />}
            size="md"
            onClick={() => setOpenSetting(prev => !prev)}
          />
        </Tooltip>
        <Divider my="15px" />
        {openSetting ? <UserSettings /> : <UserNote />}
      </Box>
    </>
  );
};

export default UserProfile;
