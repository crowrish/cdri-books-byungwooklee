'use client';

import { FC, useState } from 'react';

import { BookDetailItem, BookItem } from '@/components/molecules';
import type { iBookDocument } from '@/types';

import { Container, DetailContainer } from './styles';

interface BookToggleItemProps {
  bookItem: iBookDocument;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const BookToggleItem: FC<BookToggleItemProps> = ({
  bookItem,
  isFavorite,
  onToggleFavorite,
}) => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  return (
    <Container>
      {!isDetailOpen && (
        <BookItem
          bookItem={bookItem}
          onDetailClick={() => setIsDetailOpen(true)}
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
      )}

      <DetailContainer $isOpen={isDetailOpen}>
        <BookDetailItem
          bookItem={bookItem}
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
          onClose={() => setIsDetailOpen(false)}
        />
      </DetailContainer>
    </Container>
  );
};

export default BookToggleItem;
