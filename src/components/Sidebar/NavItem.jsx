/* eslint-disable react/prop-types */
import { Flex, Link, Icon } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';

const NavItem = ({ icon, to, children, ...rest }) => {
  const location = useLocation();
  const linkPathname = to === '/' ? '/' : '/' + to;
  const isActive = location.pathname === linkPathname;

  return (
    <Link as={NavLink} to={to} variant="activeLink">
      <Flex
        align="center"
        p="8px 24px"
        mx="4"
        borderRadius="lg"
        role="group"
        fontSize="16px"
        cursor="pointer"
        boxShadow={isActive ? 'sidebarActiveLink' : 'none'}
        bg={isActive ? 'sidebarActiveLinkBG' : 'none'}
        {...rest}
      >
        {icon && <Icon mr="4" fontSize="16" as={icon} />}
        {children}
      </Flex>
    </Link>
  );
};

export default NavItem;
