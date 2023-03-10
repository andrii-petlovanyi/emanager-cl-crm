import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const customIB = defineStyle({
  background: 'none',
  color: 'primaryTextColor',
  fontWeight: '700',
  fontSize: '20px',
  transition: '350ms ease',
  transform: 'translate3d(0, 0, 0)',

  _hover: {
    color: 'hoverColor',
    transform: 'scale(1.1)',
  },
});

const customOptIB = defineStyle({
  background: 'none',
  color: 'primaryTextColor',
  borderColor: '',
  outline: 'none',
  fontWeight: '700',
  fontSize: '20px',
  transition: '350ms ease',

  _hover: {
    color: 'hoverColor',
  },
});

const tabArrowIB = defineStyle({
  background: 'none',
  color: 'primaryTextColor',
  fontWeight: '700',
  fontSize: '35px',
  transition: '350ms ease',
  transform: 'translate3d(0, 0, 0)',

  _hover: {
    color: 'hoverColor',
    transform: 'scale(1.1)',
  },
});

const customOutIB = defineStyle({
  background: 'none',
  color: 'primaryTextColor',
  fontWeight: '700',
  fontSize: '20px',
  transition: '350ms ease',
  border: '1px solid',
  borderColor: 'borderColor',
  transform: 'translate3d(0, 0, 0)',

  _hover: {
    color: 'hoverColor',
    transform: 'scale(1.1)',
  },
});

const submitBtn = defineStyle({
  backgroundColor: 'sidebarActiveLinkBG',
  color: 'secondaryTextColor',
  transition: '350ms ease',

  _hover: {
    backgroundColor: '#204BDA',
    color: 'hoverColor',
  },
});

const clearBtn = defineStyle({
  backgroundColor: 'red.700',
  color: 'secondaryTextColor',
  transition: '350ms ease',

  _hover: {
    backgroundColor: 'red.800',
    color: 'hoverColor',
  },
});

const paginationBtn = defineStyle({
  backgroundColor: '',
  border: '1px solid',
  borderRadius: '5px',
  borderColor: 'sectionBG',
  fontSize: '16px',
  fontWeight: '700',

  _hover: {
    borderColor: 'borderColor',
  },
});

const paginationActiveBtn = defineStyle({
  backgroundColor: 'sidebarActiveLinkBG',
  color: 'secondaryTextColor',
  fontSize: '16px',
  fontWeight: '700',

  _hover: {},
});

const paginationDelimiter = defineStyle({
  backgroundColor: '',
  fontSize: '20px',
  fontWeight: '700',
  padding: '0',
  cursor: 'default',
});

export const buttonTheme = defineStyleConfig({
  variants: {
    customIB,
    customOutIB,
    tabArrowIB,
    customOptIB,
    submitBtn,
    clearBtn,
    paginationBtn,
    paginationActiveBtn,
    paginationDelimiter,
  },
});
