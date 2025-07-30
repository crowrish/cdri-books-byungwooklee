'use client';

import { FC } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Text } from '@/components/atoms';

import { NavContainer, NavLink, NavLinks, Wrapper } from './styles';

const NavigationBar: FC = () => {
  const pathname = usePathname();

  return (
    <Wrapper>
      <NavContainer>
        <Link href="/">
          <Text as="h1" variant="title1">
            CERTICOS BOOKS
          </Text>
        </Link>
        <NavLinks>
          <NavLink href="/" className={pathname === '/' ? 'active' : ''}>
            도서 검색
          </NavLink>
          <NavLink
            href="/favorite"
            className={pathname === '/favorite' ? 'active' : ''}
          >
            내가 찜한 책
          </NavLink>
        </NavLinks>
      </NavContainer>
    </Wrapper>
  );
};

export default NavigationBar;
