import { createStitches } from '@stitches/react';
import {
  mauve,
  red,
  orange,
  yellow,
  amber,
  violet,
  blue,
  green,
  blackA,
  whiteA,
  indigo,
} from '@radix-ui/colors';
import utils from './utils/stitches';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  theme: {
    colors: {
      ...mauve,
      ...red,
      ...orange,
      ...amber,
      ...yellow,
      ...violet,
      ...blue,
      ...indigo,
      ...green,
      ...blackA,
      ...whiteA,

      primary: '#c8102e',

      mainBg: '$mauve1',
      appBg: '$mauve2',

      componentBg: '$mauve3',
      componentHoverBg: '$mauve4',
      componentActiveBg: '$mauve5',

      borderSubtle: '$mauve6',
      border: '$mauve7',
      borderHover: '$mauve8',

      textSubtle: '$mauve11',
      textMain: '$mauve12',
    },
    fonts: {
      sans: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif',
    },
    fontSizes: {
      xs: '12px',
      sm: '13px',
      md: '15px',
      lg: '17px',
      xl: '19px',
      title3: '21px',
      title2: '27px',
      title1: '35px',
    },
    space: {
      xs: '5px',
      sm: '10px',
      md: '15px',
      lg: '20px',
      xl: '25px',
      xxl: '35px',
    },
    radii: {
      xs: '2px',
      sm: '4px',
      md: '8px',
      lg: '16px',
      round: '50%',
    },
    shadows: {
      0: 'none',
      1: 'rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px',
      2: 'rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px',
      3: 'rgb(0 0 0 / 20%) 0px 8px 10px -5px, rgb(0 0 0 / 14%) 0px 16px 24px 2px, rgb(0 0 0 / 12%) 0px 6px 30px 5px',
    },
    transitions: {
      default: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
  media: {
    xs: '(max-width: 576px)',
    sm: '(min-width: 576px) and (max-width: 768px)',
    md: '(min-width: 768px) and (max-width: 992px)',
    lg: '(min-width: 992px) and (max-width: 1200px)',
    xl: '(min-width: 1200px)',
  },

  utils,
});
