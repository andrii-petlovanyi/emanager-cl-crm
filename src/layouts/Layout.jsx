import { Box, Drawer, DrawerContent, useDisclosure } from '@chakra-ui/react';
import Footer from 'components/Footer/Footer';
import Logo from 'components/Logo/Logo';
import MobileNav from 'components/Sidebar/MobileNav';
import SidebarContent from 'components/Sidebar/SidebarContent';
import UserProfile from 'components/Sidebar/UserProfile';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';

const Layout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuth = useSelector(authSelectors.isAuth);
  return (
    <Box minH="100vh">
      <Logo />
      {isAuth && (
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
          <MobileNav onOpen={onOpen} />
        </>
      )}
      <Box ml={{ base: 0, lg: '250px' }} px="20px">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
