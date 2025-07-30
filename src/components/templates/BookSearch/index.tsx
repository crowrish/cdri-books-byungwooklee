'use client';

import { FC, useState } from 'react';

import { Button, NoData, Text } from '@/components/atoms';
import {
  BookToggleItem,
  Pagination,
  SearchInput,
} from '@/components/molecules';
import { DetailSearchModal } from '@/components/organisms';
import { useBooks, useFavoriteBooks } from '@/hooks';
import { theme } from '@/styles';

import { BookItemList, InputBox, Wrapper } from './styles';

const BookSearch: FC = () => {
  // Query
  const [searchQuery, setSearchQuery] = useState('');
  // Single Input
  const [searchInputValue, setSearchInputValue] = useState('');
  // Detail Input
  const [searchTarget, setSearchTarget] = useState('title');
  const [searchDetailQuery, setSearchDetailQuery] = useState('');
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);

  // React-Query & localStorage
  const { data: books, isLoading } = useBooks({
    query: searchQuery || searchDetailQuery,
    target: searchDetailQuery ? searchTarget : undefined,
    page: currentPage,
  });
  const { isFavoriteBook, toggleFavorite } = useFavoriteBooks();

  // Functions
  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setSearchInputValue(value);

    // 초기화
    setSearchDetailQuery('');
    setCurrentPage(1);
  };

  const handleDetailSearch = (category: string, query: string) => {
    setSearchTarget(category);
    setSearchDetailQuery(query);

    // 초기화
    setSearchQuery('');
    setSearchInputValue('');
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Wrapper>
      <Text as="h1" variant="title2">
        도서 검색
      </Text>

      <InputBox>
        <SearchInput value={searchInputValue} onSearch={handleSearch} />
        <div style={{ position: 'relative' }}>
          <Button
            variant="secondary"
            size="small"
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            상세 검색
          </Button>
          {isModalOpen && (
            <DetailSearchModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onSearch={handleDetailSearch}
            />
          )}
        </div>
      </InputBox>

      <Text variant="caption">
        {'도서 검색 결과 총 '}
        <span style={{ color: theme.colors.primary }}>
          {isLoading ? '-' : (books?.meta.pageable_count ?? 0)}
        </span>
        건
      </Text>

      {isLoading ? (
        <div style={{ height: 1010 }}>
          <NoData message="검색 중..." />
        </div>
      ) : books && books.documents.length > 0 ? (
        <>
          <BookItemList>
            {books.documents.map((book) => (
              <BookToggleItem
                key={`bookitem-${book.isbn}`}
                bookItem={book}
                isFavorite={isFavoriteBook(book.isbn)}
                onToggleFavorite={() => toggleFavorite(book)}
              />
            ))}
          </BookItemList>

          <Pagination
            meta={books.meta}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <NoData message="검색된 결과가 없습니다." />
      )}
    </Wrapper>
  );
};

export default BookSearch;
