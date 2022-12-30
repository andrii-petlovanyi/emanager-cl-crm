/* eslint-disable react/prop-types */
import { Box } from '@chakra-ui/react';
import {
  FiCompass,
  FiHome,
  // FiSettings,
  FiStar,
  FiTrendingUp,
} from 'react-icons/fi';
import NavItem from './NavItem';

const LinkItems = [
  { name: 'Dashboard', icon: FiHome, to: '/' },
  { name: 'My Posts', icon: FiTrendingUp, to: 'my' },
  { name: 'Add Posts', icon: FiCompass, to: 'add' },
  { name: 'Offers', icon: FiStar, to: 'offers' },
  // { name: 'Other', icon: FiSettings, to: 'other' },
];

const SidebarContent = ({ ...rest }) => {
  return (
    <Box
      pos="fixed"
      display={{ base: 'block', lg: 'none' }}
      right={{ base: '20px' }}
      left={{ lg: '20px' }}
      top="190px"
      w="230px"
      p="20px 5px"
      transition="1s ease"
      bg="sectionBG"
      borderRadius="20px"
      {...rest}
    >
      {LinkItems.map(link => (
        <NavItem key={link.name} to={link.to} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

export default SidebarContent;
