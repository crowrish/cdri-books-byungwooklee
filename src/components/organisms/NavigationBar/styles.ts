'use client';

import Link from 'next/link';

import styled from 'styled-components';

const Wrapper = styled.header`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  padding: ${({ theme }) => theme.spacing.md} 0;
`;

const NavContainer = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  padding: ${({ theme }) => theme.container.padding};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const NavLink = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: 4px;

  &.active,
  &:hover {
    text-decoration: underline;
    text-underline-offset: 8px;
    text-decoration-color: #4880ee;
    text-decoration-thickness: 2px;
  }
`;

export { Wrapper, NavContainer, NavLinks, NavLink };
