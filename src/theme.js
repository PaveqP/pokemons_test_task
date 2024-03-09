'use client';
import { Raleway } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const raleway = Raleway({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
        main: '#1986EC'
    }
  },
  typography: {
    fontFamily: raleway.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export default theme;