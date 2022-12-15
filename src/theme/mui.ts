import { createTheme } from '@mui/material/styles';
import { Inter } from '@next/font/google';

import { ColorData, ColorEnum } from './color';

const inter = Inter({ subsets: ['latin'] });

export const theme = createTheme({
  palette: {
    primary: {
      main: ColorData[ColorEnum.TEXT],
      light: ColorData[ColorEnum.TEXT],
      dark: ColorData[ColorEnum.TEXT],
    },
    warning: {
      main: ColorData[ColorEnum.RED],
      light: ColorData[ColorEnum.RED],
      dark: ColorData[ColorEnum.RED],
    },
    background: {
      paper: ColorData[ColorEnum.BACKGROUND],
      default: ColorData[ColorEnum.BACKGROUND],
    },
    text: {
      primary: ColorData[ColorEnum.TEXT],
      secondary: ColorData[ColorEnum.TEXT],
    },
  },
  shape: { borderRadius: 0 },

  typography: {
    fontFamily: inter.style.fontFamily,
  },

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          padding: '0',
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          padding: '0',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          padding: '0',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          boxShadow: 'none',
          padding: '0',
        },
      },
    },
  },
});
