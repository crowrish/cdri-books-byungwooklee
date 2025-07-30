import { FC } from 'react';

import Image from 'next/image';

import { Text } from '@/components/atoms';
import { theme } from '@/styles';

import { Container } from './styles';

interface NoDataProps {
  message: string;
}

const NoData: FC<NoDataProps> = ({ message }) => {
  return (
    <Container>
      <Image
        src="/nobook.png"
        alt="데이터 없음"
        width={120}
        height={120}
        priority={false}
        loading="lazy"
      />
      <Text variant="caption" color={theme.colors.text.secondary}>
        {message}
      </Text>
    </Container>
  );
};

export default NoData;
