'use client';

import { type ButtonHTMLAttributes, FC } from 'react';

import { StyledButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gray';
  size?: 'small' | 'medium';
  fullWidth?: boolean;
}

const Button: FC<ButtonProps> = ({
  variant,
  size,
  fullWidth,
  type = 'button',
  ...props
}) => {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      type={type}
      {...props}
    />
  );
};

export { type ButtonProps };
export default Button;
