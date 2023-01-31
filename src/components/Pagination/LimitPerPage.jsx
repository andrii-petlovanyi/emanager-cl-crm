/* eslint-disable react/prop-types */
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react';

const LimitPerPage = ({ limitPerPage, setLimitPerPage, limitList }) => {
  return (
    <>
      <Menu>
        <MenuButton
          width="60px"
          bg="bodyBG"
          as={Button}
          px="10px"
          border="1px solid"
          borderColor="borderColor"
          rightIcon={<ChevronDownIcon />}
          _hover={{ bg: '' }}
          _focus={{ bg: '' }}
          _active={{ bg: '' }}
        >
          {limitPerPage}
        </MenuButton>
        <MenuList
          size="sm"
          bg="sectionBG"
          borderColor="borderColor"
          minW={'0'}
          width={'50px'}
        >
          {limitList.map(item => (
            <MenuItem
              bg="sectionBG"
              size="sm"
              _hover={{ bg: 'tooltipHoverBG', color: 'secondaryTextColor' }}
              key={item.limit}
              onClick={() => setLimitPerPage(item.limit)}
            >
              {item.limit}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default LimitPerPage;
