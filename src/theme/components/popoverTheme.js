import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const custom = defineStyle({
  content: {
    right: '10px',
    width: '200px',
    bg: 'sectionBG',
    padding: '5px 10px',
    border: '',
    borderColor: '',
    outline: '',
  },
});

export const popoverTheme = defineStyleConfig({
  variants: { custom },
});
