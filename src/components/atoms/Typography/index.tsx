import { type ElementType, FC, HTMLAttributes } from 'react';

import { StyledTypography } from './styles';

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?:
    | 'title1'
    | 'title2'
    | 'title3'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'small';
  color?: string;
  bold?: boolean;
  as?: ElementType;
}

const Typography: FC<TypographyProps> = ({
  variant = 'body1',
  color,
  bold,
  as = 'span',
  children,
  ...props
}) => {
  return (
    <StyledTypography
      as={as}
      $variant={variant}
      $color={color}
      $bold={bold}
      {...props}
    >
      {children}
    </StyledTypography>
  );
};

export { type TypographyProps };
export { Typography as Text };
export default Typography;
