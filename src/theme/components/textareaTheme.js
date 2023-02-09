import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const custom = defineStyle({
  border: '1px solid',
  borderColor: 'borderColor',
  backgroundColor: 'inherit',
  color: 'primaryTextColor',
  transition: '350ms ease',
  _focus: {
    borderColor: 'primaryTextColor',
    boxShadow: '0 0 1px 1px #D3D3D333',
  },
  _hover: {
    borderColor: 'primaryTextColor',
  },
});

export const textareaTheme = defineStyleConfig({
  variants: { custom },
});
