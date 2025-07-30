'use client';

import { FC, useMemo, useState } from 'react';

import { NoData, Text } from '@/components/atoms';
import { BookToggleItem, Pagination } from '@/components/molecules';
import { useFavoriteBooks } from '@/hooks';
import { theme } from '@/styles';
import { iMeta } from '@/types';

import { BookItemList, Wrapper } from './styles';

const ITEMS_PER_PAGE = 10;

const FavoriteBook: FC = () => {
  const {
    favorites: items,
    isFavoriteBook,
    toggleFavorite,
  } = useFavoriteBooks();

  const [currentPage, setCurrentPage] = useState(1);

  const { paginatedItems, meta } = useMemo(() => {
    // index range
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    const paginatedItems = items.slice(startIndex, endIndex);
    const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

    const meta: iMeta = {
      total_count: items.length,
      pageable_count: items.length,
      is_end: endIndex >= items.length,
    };

    return {
      paginatedItems,
      meta,
      totalPages,
    };
  }, [items, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Wrapper>
      <Text as="h1" variant="title2">
        내가 찜한 책
      </Text>

      <Text variant="caption">
        {'찜한 책 총 '}
        <span style={{ color: theme.colors.primary }}>{items.length ?? 0}</span>
        건
      </Text>

      {items.length > 0 ? (
        <>
          <BookItemList>
            {paginatedItems.map((book) => (
              <BookToggleItem
                key={`bookitem-${book.isbn}`}
                bookItem={book}
                isFavorite={isFavoriteBook(book.isbn)}
                onToggleFavorite={() => toggleFavorite(book)}
              />
            ))}
          </BookItemList>

          <Pagination
            meta={meta}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <NoData message="찜한 책이 없습니다." />
      )}
    </Wrapper>
  );
};

export default FavoriteBook;
