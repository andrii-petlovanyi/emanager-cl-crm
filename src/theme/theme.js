import { extendTheme } from '@chakra-ui/react';
import { buttonTheme } from './components/buttonTheme';
import { inputTheme } from './components/inputTheme';
import { popoverTheme } from './components/popoverTheme';
import { textareaTheme } from './components/textareaTheme';

// const config = {
//   initialColorMode: 'white',
//   useSystemColorMode: true,
// };

const breakpoints = {
  sm: '320px',
  msm: '400px',
  md: '768px',
  lg: '992px',
  xl: '1280px',
};

const shadows = {
  cardShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 4px',
};

const colors = {
  bodyBG: '#151824',
  sectionBG: '#222738',
  sidebarActiveLinkBG: '#3A57E8',
  primaryTextColor: '#8A92A6',
  secondaryTextColor: '#D3D3D3',
  hoverColor: '#E1F1FF',

  buttonHover: '#0076FB',
  tooltipHoverBG: '#e2e2e222',
  borderColor: '#D3D3D333',
  badgeAccentBG: '#714E99',
  delItemColor: '#FF7064',
  loginSectionBG: '#404756',
};

const styles = {
  global: () => ({
    body: {
      bg: 'bodyBG',
      color: 'primaryTextColor',
    },
  }),
};

const fonts = {
  heading: `'Montserat', sans-serif`,
  body: `'Lato', sans-serif`,
};

const components = {
  Link: {
    baseStyle: {},
    variants: {
      activeLink: {
        color: 'primaryTextColor',
        textDecoration: 'none',
        transition: '350ms ease',
        _hover: { textDecoration: 'none', color: 'hoverColor' },
        _focus: { boxShadow: 'none' },
        _activeLink: {
          color: '#fff',
        },
      },
      secondary: {
        //...define other variants
      },
    },
  },
  Modal: {
    baseStyle: {
      dialog: {
        // maxWidth: ['95%', '95%', '95%'],
        // minWidth: '95%',
        bg: 'sectionBG',
      },
    },
  },
  Divider: {
    baseStyle: {
      borderColor: 'borderColor',
    },
  },

  Input: inputTheme,
  Textarea: textareaTheme,
  Button: buttonTheme,
  Popover: popoverTheme,
};

const theme = extendTheme({
  colors,
  shadows,
  styles,
  components,
  breakpoints,
  fonts,
});
export default theme;
