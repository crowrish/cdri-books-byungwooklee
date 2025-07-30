'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    line-height: 1.6;
  }

  body {
    font-family: var(--font-noto-sans-kr), -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text.primary};
    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
  }

  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
    border: none;
    outline: none;
  }

  ul, ol {
    list-style: none;
  }
`;

export default GlobalStyle;
