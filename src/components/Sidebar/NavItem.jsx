/* eslint-disable react/prop-types */
import { Flex, Link, Icon } from '@chakra-ui/react';
import BtnClickAnim from 'components/Animations/BtnClickAnim';
import { NavLink, useLocation } from 'react-router-dom';

const NavItem = ({ icon, to, children, ...rest }) => {
  const location = useLocation();
  const linkPathname = to === '/' ? '/' : '/' + to;
  const isActive = location.pathname === linkPathname;

  return (
    <BtnClickAnim>
      <Link as={NavLink} to={to} variant="activeLink">
        <Flex
          align="center"
          p="8px 24px"
          mx="4"
          borderRadius="lg"
          role="group"
          fontSize="16px"
          cursor="pointer"
          bg={isActive ? 'sidebarActiveLinkBG' : 'none'}
          {...rest}
        >
          {icon && <Icon mr="4" fontSize="18" as={icon} />}
          {children}
        </Flex>
      </Link>
    </BtnClickAnim>
  );
};

export default NavItem;
