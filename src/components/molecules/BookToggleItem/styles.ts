'use client';

import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

const DetailContainer = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
`;

export { Container, DetailContainer };
