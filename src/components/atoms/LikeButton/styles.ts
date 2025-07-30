'use client';

import styled from 'styled-components';

interface StyledLikeButtonProps {
  $size?: 'small' | 'medium';
}

const StyledLikeButton = styled.button<StyledLikeButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: ${(props) => (props.$size === 'small' ? '0' : '8px')};
  cursor: pointer;
`;

export { StyledLikeButton };
