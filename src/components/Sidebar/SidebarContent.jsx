/* eslint-disable react/prop-types */
import { Box } from '@chakra-ui/react';
import {
  MdDashboard,
  MdOutlineArticle,
  MdPostAdd,
  MdOutlineLocalOffer,
  MdOutlineArchive,
} from 'react-icons/md';
import NavItem from './NavItem';

const LinkItems = [
  { name: 'Dashboard', icon: MdDashboard, to: '/' },
  { name: 'My Posts', icon: MdOutlineArticle, to: 'my' },
  { name: 'Add Posts', icon: MdPostAdd, to: 'add' },
  { name: 'Offers', icon: MdOutlineLocalOffer, to: 'offers' },
  { name: 'Archive Posts', icon: MdOutlineArchive, to: 'archive' },
];

const SidebarContent = ({ ...rest }) => {
  return (
    <Box
      pos="fixed"
      display={{ base: 'block', lg: 'none' }}
      mr={{ base: '20px' }}
      ml={{ base: 'auto', lg: '20px' }}
      mt={{ base: '120px', lg: '190px' }}
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
