import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const customIB = defineStyle({
  background: 'none',
  color: 'primaryTextColor',
  fontWeight: '700',
  fontSize: '20px',
  transition: '350ms ease',

  _hover: {
    color: 'hoverColor',
    transform: 'scale(1.1)',
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { customIB },
});
