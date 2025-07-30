'use client';

import { FC } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

import { Text } from '@/components/atoms';
import type { iMeta } from '@/types';

import { Container, PageButton } from './styles';

interface PaginationProps {
  meta: iMeta;
  currentPage: number;
  itemsPerPage?: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  meta,
  currentPage,
  itemsPerPage = 10,
  onPageChange,
}) => {
  const { pageable_count, is_end } = meta;

  // 최대 페이지 수 계산
  const maxPage = Math.ceil(pageable_count / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage <= 1) return;
    onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (is_end) return;
    onPageChange(currentPage + 1);
  };

  const canGoPrevious = currentPage > 1;
  const canGoNext = !is_end;

  return (
    <Container>
      <PageButton onClick={handlePrevious} disabled={!canGoPrevious}>
        <ChevronLeftIcon />
      </PageButton>

      <Text variant="body2">
        {currentPage} / {maxPage}
      </Text>

      <PageButton onClick={handleNext} disabled={!canGoNext}>
        <ChevronRightIcon />
      </PageButton>
    </Container>
  );
};

export default Pagination;
