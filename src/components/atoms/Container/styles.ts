'use client';

import styled from 'styled-components';

const StyledContainer = styled.main`
  max-width: ${({ theme }) => theme.container.maxWidth};
  min-width: ${({ theme }) => theme.container.maxWidth};
  padding: ${({ theme }) => theme.container.padding};
  margin: 80px auto;
  width: 100%;
`;

export { StyledContainer };
