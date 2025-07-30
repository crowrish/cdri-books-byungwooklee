'use client';

import styled from 'styled-components';

import { TypographyProps } from '.';

interface StyledTypographyProps {
  $variant?: TypographyProps['variant'];
  $color?: string;
  $bold?: boolean;
}

const StyledTypography = styled.div<StyledTypographyProps>`
  ${({ theme, $variant = 'body1' }) => theme.typography[$variant]};
  color: ${({ theme, $color }) => $color || theme.colors.text.primary};
  ${({ $bold }) => $bold && 'font-weight: 700;'}
  margin: 0;
`;

export { StyledTypography };
