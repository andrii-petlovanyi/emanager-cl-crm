import {
  Box,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import Footer from 'components/Footer/Footer';
import Logo from 'components/Logo/Logo';
import Navbar from 'components/Navbar/Navbar';
import SidebarContent from 'components/Sidebar/SidebarContent';
import UserProfile from 'components/Sidebar/UserProfile';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';
import { useGetUserQuery } from 'redux/auth/authApiSlice';
import '@fontsource/montserrat';

const Layout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuth = useSelector(authSelectors.isAuth);
  const { isLoading } = useGetUserQuery();
  return (
    <Box
      minH="100vh"
      maxW={isAuth ? '1280px' : '100%'}
      mx="auto"
      position="relative"
    >
      <Box position="absolute" width="100%">
        <Logo />
        {isAuth && !isLoading && (
          <>
            <UserProfile
              display={{ base: 'none', lg: 'block' }}
              onClose={onClose}
            />
            <SidebarContent
              onClose={onClose}
              display={{ base: 'none', lg: 'flex' }}
              flexDirection="column"
              gridGap="8px"
            />
            <Drawer
              autoFocus={false}
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              returnFocusOnClose={true}
              onOverlayClick={onClose}
            >
              <DrawerContent
                display={{ lg: 'none' }}
                style={{ bottom: 'none', backgroundColor: 'none' }}
              >
                <UserProfile />
                <SidebarContent onClose={onClose} />
              </DrawerContent>
            </Drawer>
            <Navbar onOpen={onOpen} />
          </>
        )}
        {!isAuth && !isLoading && (
          <Box
            position="absolute"
            maxW="200px"
            top="50%"
            left="35px"
            transform="translate(0, -50%)"
          >
            <Text fontSize="34px" fontFamily={'Montserrat'}>
              managing your assistant bot in a few clicks
            </Text>
          </Box>
        )}
        <Box
          ml={isAuth ? { base: 0, lg: '250px' } : { base: 0, lg: '300px' }}
          px={isAuth ? '20px' : '0'}
        >
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
