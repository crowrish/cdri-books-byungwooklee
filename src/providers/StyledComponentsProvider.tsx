'use client';

import { FC, ReactNode } from 'react';

import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from '@/styles';

interface Props {
  children: ReactNode;
}

const StyledComponentsProvider: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default StyledComponentsProvider;
