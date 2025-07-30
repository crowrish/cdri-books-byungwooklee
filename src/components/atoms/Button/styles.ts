'use client';

import styled, { css } from 'styled-components';

const variantStyles = {
  primary: css`
    background-color: #4880ee;
    color: ${({ theme }) => theme.colors.white};
    &:hover {
      background-color: #3a6fd6;
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.text.subtitle};
    border: 1px solid ${({ theme }) => theme.colors.text.subtitle};
    &:hover {
      background-color: #f8f9fa;
    }
  `,
  gray: css`
    background-color: ${({ theme }) => theme.colors.lightGray};
    color: ${({ theme }) => theme.colors.text.secondary};
    &:hover {
      background-color: #e8ecf0;
    }
  `,
};

const sizeStyles = {
  small: css`
    padding: 10px;
    font-size: 14px;
  `,
  medium: css`
    padding: 16px 28px;
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
  `,
};

interface StyledButtonProps {
  $variant?: 'primary' | 'secondary' | 'gray';
  $size?: 'small' | 'medium';
  $fullWidth?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  user-select: none;
  white-space: nowrap;

  ${(props) => variantStyles[props.$variant || 'primary']}
  ${(props) => sizeStyles[props.$size || 'medium']}
  ${(props) =>
    props.$fullWidth &&
    css`
      width: 100%;
    `}
`;

export { StyledButton };
