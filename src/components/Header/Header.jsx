/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import { FiMenu, FiBell } from 'react-icons/fi';
import { Flex, IconButton, Box } from '@chakra-ui/react';

import { logOut } from 'redux/auth/authSlice';
import authSelectors from 'redux/auth/auth-selectors';
import { useLogOutUserMutation } from 'redux/auth/authApiSlice';
import Logo from 'components/Logo/Logo';
import Toast from 'components/Toast/Toast';
import LogOutPopover from './LogOutPopover';

const Header = ({ onOpen, ...rest }) => {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.userName);
  const [logOutUser, { isLoading }] = useLogOutUserMutation();
  const { addToast } = Toast();

  const handleLogOut = async () => {
    try {
      await logOutUser();
      dispatch(logOut());
      addToast({ message: `Good bye, ${userName}!`, type: 'success' });
    } catch (error) {
      addToast({ message: error.message, type: 'error' });
    }
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
        <LogOutPopover handleLogOut={handleLogOut} isLoading={isLoading} />
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

export default Header;
