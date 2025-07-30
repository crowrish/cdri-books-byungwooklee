'use client';

import { type ButtonHTMLAttributes, FC } from 'react';

import Image from 'next/image';

import { StyledLikeButton } from './styles';

interface LikeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean;
  size?: 'small' | 'medium';
}

const LikeButton: FC<LikeButtonProps> = ({
  active,
  size = 'medium',
  ...props
}) => {
  return (
    <StyledLikeButton $size={size} {...props}>
      <Image
        src={active ? '/icon/like-fill.png' : '/icon/like-border.png'}
        alt={active ? '찜한 책' : '찜하기'}
        width={size === 'small' ? 16 : 24}
        height={size === 'small' ? 16 : 24}
      />
    </StyledLikeButton>
  );
};

export default LikeButton;
