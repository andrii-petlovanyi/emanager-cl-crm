/* eslint-disable react/prop-types */
import { FiMenu, FiBell } from 'react-icons/fi';
import { logOut } from 'redux/auth/authSlice';

import { Flex, IconButton, Box } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import LogOutPopover from './LogOutPopover';
import Logo from 'components/Logo/Logo';

const MobileNav = ({ onOpen, ...rest }) => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <Flex
      ml={{ base: 0, lg: 60 }}
      px={{ base: 4, lg: 4 }}
      height="20"
      alignItems="center"
      justifyContent={{ base: 'space-between', lg: 'flex-end' }}
      {...rest}
    >
      <Logo
        display={{ base: 'flex', lg: 'none' }}
        position={{ base: 'relative' }}
      />
      <Box display="flex" gridGap={{ base: '0', lg: '5px' }}>
        <IconButton
          variant="customIB"
          aria-label="Notification"
          icon={<FiBell />}
        />
        <LogOutPopover handleLogOut={handleLogOut} />
        <IconButton
          variant="customIB"
          display={{ base: 'flex', lg: 'none' }}
          onClick={onOpen}
          aria-label="Open sidebar"
          icon={<FiMenu />}
        />
      </Box>
    </Flex>
  );
};

export default MobileNav;
