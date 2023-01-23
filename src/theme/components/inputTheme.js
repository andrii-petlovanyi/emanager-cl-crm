import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const custom = defineStyle({
  field: {
    border: '1px solid',
    borderColor: 'borderColor',
    backgroundColor: 'bodyBG',
    color: 'primaryTextColor',
    transition: '350ms ease',
    _focus: {
      borderColor: 'primaryTextColor',
      boxShadow: '0 0 1px 1px #D3D3D333',
    },
  },
});

const auth = defineStyle({
  field: {
    border: '1px solid',
    borderColor: 'borderColor',
    backgroundColor: 'loginSectionBG',
    color: 'secondaryTextColor',
    transition: '350ms ease',
    _focus: {
      borderColor: 'primaryTextColor',
      boxShadow: '0 0 1px 1px #D3D3D333',
    },
  },
});

export const inputTheme = defineStyleConfig({
  variants: { custom, auth },
});
