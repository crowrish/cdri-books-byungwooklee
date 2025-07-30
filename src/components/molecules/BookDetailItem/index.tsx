import { FC } from 'react';

import Link from 'next/link';

import { ChevronUpIcon } from '@heroicons/react/24/outline';

import { BookImage, Button, LikeButton, Text } from '@/components/atoms';
import { theme } from '@/styles';
import type { iBookDocument } from '@/types';

import {
  ImageBox,
  LikeBox,
  PriceBox,
  RightBox,
  TextBox,
  Wrapper,
} from './styles';

interface BookDetailItemProps {
  bookItem: iBookDocument;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onClose?: () => void;
}

const BookDetailItem: FC<BookDetailItemProps> = ({
  bookItem,
  onClose,
  isFavorite = false,
  onToggleFavorite,
}) => {
  const { thumbnail, title, authors, price, sale_price, contents, url } =
    bookItem;

  const isDiscountPrice = sale_price > 0;

  const formatPrice = (price: number) => {
    return price.toLocaleString('ko-KR');
  };

  return (
    <Wrapper>
      <ImageBox>
        <BookImage src={thumbnail} width={210} height={280} alt={title} />

        <LikeBox onClick={onToggleFavorite}>
          <LikeButton active={isFavorite} />
        </LikeBox>
      </ImageBox>

      <TextBox>
        <div>
          <Text variant="title3">{title}</Text>
          <Text
            variant="body2"
            color={theme.colors.text.subtitle}
            style={{ marginLeft: 16 }}
          >
            {authors}
          </Text>
        </div>

        <Text variant="body2" style={{ fontWeight: 700 }}>
          책 소개
        </Text>

        <Text as="p" variant="small" style={{ lineHeight: '16px' }}>
          {contents}
        </Text>
      </TextBox>

      <RightBox>
        <Button
          variant="gray"
          style={{
            display: 'inline-flex',
            gap: 5,
            width: 115,
            paddingLeft: 0,
            paddingRight: 0,
          }}
          onClick={onClose}
        >
          {'상세보기'}
          <ChevronUpIcon width={16} strokeWidth={3} color="#B1B8C0" />
        </Button>

        {isDiscountPrice && (
          <PriceBox>
            <div>
              <Text variant="small" color={theme.colors.text.subtitle}>
                원가
              </Text>
              <Text
                variant="title3"
                style={{
                  textDecoration: 'line-through',
                  fontWeight: 300,
                  letterSpacing: '0.9px',
                }}
              >
                {formatPrice(price)}원
              </Text>
            </div>
            <div>
              <Text variant="small" color={theme.colors.text.subtitle}>
                할인가
              </Text>
              <Text variant="title3" bold>
                {formatPrice(sale_price)}원
              </Text>
            </div>
          </PriceBox>
        )}
        {!isDiscountPrice && (
          <PriceBox>
            <div>
              <Text variant="small" color={theme.colors.text.subtitle}>
                원가
              </Text>
              <Text variant="title3" bold>
                {formatPrice(price)}원
              </Text>
            </div>
          </PriceBox>
        )}

        <Link href={url} target="_blank" style={{ width: '100%' }}>
          <Button fullWidth>구매하기</Button>
        </Link>
      </RightBox>
    </Wrapper>
  );
};

export default BookDetailItem;
