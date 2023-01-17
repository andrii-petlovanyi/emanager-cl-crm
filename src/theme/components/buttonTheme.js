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

export const buttonTheme = defineStyleConfig({
  variants: { customIB, customOutIB },
});
