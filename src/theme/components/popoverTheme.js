import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const custom = defineStyle({
  content: {
    right: '10px',
    width: '220px',
    bg: 'sectionBG',
    padding: '5px 10px',
    border: '1px solid',
    borderColor: 'borderColor',
    outline: '',
  },
});

export const popoverTheme = defineStyleConfig({
  variants: { custom },
});
