import {
  Box,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import Footer from 'components/Footer/Footer';
import Logo from 'components/Logo/Logo';
import Header from 'components/Header/Header';
import SidebarContent from 'components/Sidebar/SidebarContent';
import UserProfile from 'components/User/UserProfile';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';
import { useGetUserQuery } from 'redux/auth/authApiSlice';
import { Suspense } from 'react';

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
            <UserProfile display={{ base: 'none', lg: 'block' }} />
            <SidebarContent
              display={{ base: 'none', lg: 'flex' }}
              flexDirection="column"
              gridGap="8px"
            />
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              // returnFocusOnClose={true}
              onOverlayClick={onClose}
            >
              <DrawerContent
                display={{ lg: 'none' }}
                mr="-45px"
                style={{ bottom: 'none', backgroundColor: 'none' }}
              >
                <Box
                  position="absolute"
                  width="100%"
                  height="100vh"
                  mt="70px"
                  borderTopLeftRadius="20px"
                  backgroundColor="#ffffff02"
                  backdropFilter="blur(10px)"
                  padding="20px"
                >
                  <UserProfile />
                  <SidebarContent />
                </Box>
              </DrawerContent>
            </Drawer>
            <Header onOpen={onOpen} />
          </>
        )}
        {!isAuth && !isLoading && (
          <Box
            position="absolute"
            maxW="200px"
            top="50%"
            left="35px"
            transform="translateY(-50%)"
          >
            <Text
              fontSize="34px"
              display={{ base: 'none', lg: 'flex' }}
              fontFamily={'Montserrat'}
            >
              managing your assistant bot in a few clicks
            </Text>
          </Box>
        )}
        <Box
          ml={isAuth ? { base: 0, lg: '250px' } : { base: 0, lg: '25%' }}
          px={isAuth ? '20px' : '0'}
        >
          <Suspense fallback={false}>
            <Outlet />
          </Suspense>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
