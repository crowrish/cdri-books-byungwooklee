import { FC, ReactNode } from 'react';

import { StyledContainer } from './styles';

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
