import 'styled-components';

const theme = {
  colors: {
    primary: '#0070f3',
    red: '#E84118',
    gray: '#DADADA',
    lightGray: '#F2F4F6',
    white: '#ffffff',
    black: '#222222',
    text: {
      primary: '#353C49',
      secondary: '#6D7582',
      subtitle: '#8D94A0',
    },
    background: '#ffffff',
  },
  typography: {
    title1: {
      fontSize: '24px',
      fontWeight: '700',
      lineHeight: '24px',
    },
    title2: {
      fontSize: '22px',
      fontWeight: '700',
      lineHeight: '24px',
    },
    title3: {
      fontSize: '18px',
      fontWeight: '700',
      lineHeight: '18px',
    },
    body1: {
      fontSize: '20px',
      fontWeight: '500',
      lineHeight: '20px',
    },
    body2: {
      fontSize: '14px',
      fontWeight: '500',
      lineHeight: '14px',
    },
    caption: {
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '16px',
    },
    small: {
      fontSize: '10px',
      fontWeight: '500',
      lineHeight: '10px',
    },
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  container: {
    maxWidth: '1000px',
    padding: '0 20px',
  },
};

export { theme };
export type Theme = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends Theme {}
}
