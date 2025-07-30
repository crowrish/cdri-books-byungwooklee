'use client';

import { FC, useState } from 'react';

import { XMarkIcon } from '@heroicons/react/24/outline';

import { Button } from '@/components/atoms';

import { CloseButton, FormRow, Input, ModalContainer, Select } from './styles';

interface DetailSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (category: string, query: string) => void;
}

const DetailSearchModal: FC<DetailSearchModalProps> = ({
  isOpen,
  onClose,
  onSearch,
}) => {
  const [category, setCategory] = useState('title');
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(category, query.trim());
      onClose();
    }
  };

  if (!isOpen) return null;
  return (
    <ModalContainer>
      <CloseButton onClick={onClose}>
        <XMarkIcon width={20} strokeWidth={2} />
      </CloseButton>

      <FormRow>
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="title">제목</option>
          <option value="person">저자명</option>
          <option value="publisher">출판사</option>
        </Select>
        <Input
          type="text"
          placeholder="검색어"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
      </FormRow>

      <Button onClick={handleSearch} variant="primary" fullWidth>
        검색하기
      </Button>
    </ModalContainer>
  );
};

export default DetailSearchModal;
