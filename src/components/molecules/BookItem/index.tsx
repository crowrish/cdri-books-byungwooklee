import { FC } from 'react';

import Link from 'next/link';

import { ChevronDownIcon } from '@heroicons/react/24/outline';

import { BookImage, Button, LikeButton, Text } from '@/components/atoms';
import { theme } from '@/styles';
import type { iBookDocument } from '@/types';

import {
  ButtonBox,
  ImageBox,
  LikeBox,
  PriceBox,
  TextBox,
  Wrapper,
} from './styles';

interface BookItemProps {
  bookItem: iBookDocument;
  onDetailClick?: () => void;
  isFavorite?: boolean;
  onToggleFavorite: () => void;
}

const BookItem: FC<BookItemProps> = ({
  bookItem,
  onDetailClick,
  isFavorite = false,
  onToggleFavorite,
}) => {
  const { thumbnail, title, authors, price, sale_price, url } = bookItem;

  const formatPrice = (price: number) => {
    return price.toLocaleString('ko-KR');
  };

  const displayPrice = sale_price > 0 ? sale_price : price;

  return (
    <Wrapper>
      <ImageBox>
        <BookImage src={thumbnail} width={48} height={68} alt={title} />

        <LikeBox onClick={onToggleFavorite}>
          <LikeButton active={isFavorite} size="small" />
        </LikeBox>
      </ImageBox>

      <TextBox>
        <Text as="span" variant="title3" style={{ wordBreak: 'break-all' }}>
          {title}
        </Text>

        <Text
          as="span"
          variant="body2"
          color={theme.colors.text.secondary}
          style={{ minWidth: 50 }}
        >
          {authors}
        </Text>
      </TextBox>

      <PriceBox>
        <Text as="span" variant="body1" bold>
          {formatPrice(displayPrice)}원
        </Text>
      </PriceBox>

      <ButtonBox>
        <Link href={url} target="_blank">
          <Button>구매하기</Button>
        </Link>
        <Button
          variant="gray"
          style={{
            display: 'inline-flex',
            gap: 5,
            paddingLeft: 0,
            paddingRight: 0,
          }}
          onClick={onDetailClick}
        >
          {'상세보기'}
          <ChevronDownIcon width={16} strokeWidth={3} color="#B1B8C0" />
        </Button>
      </ButtonBox>
    </Wrapper>
  );
};

export default BookItem;
