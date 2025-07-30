'use client';

import { FC, useEffect, useRef, useState } from 'react';

import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';

import { useSearchHistory } from '@/hooks';

import {
  DeleteButton,
  HistoryDropdown,
  HistoryItem,
  HistoryText,
  Input,
  SearchContainer,
  SearchIcon,
  SearchInputWrapper,
} from './styles';

interface SearchInputProps {
  value?: string;
  onSearch?: (value: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({ value = '', onSearch }) => {
  const [inputValue, setInputValue] = useState(value);
  const [isFocused, setIsFocused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const { history, addHistory, deleteHistory } = useSearchHistory();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (selectedIndex < history.length - 1) {
        setSelectedIndex(selectedIndex + 1);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (selectedIndex > -1) {
        setSelectedIndex(selectedIndex - 1);
      }
    } else if (e.key === 'Enter') {
      if (selectedIndex >= 0 && selectedIndex < history.length) {
        const selectedItem = history[selectedIndex];
        setInputValue(selectedItem);
        onSearch?.(selectedItem);
        setIsFocused(false);
        setSelectedIndex(-1);
      } else {
        addHistory(inputValue);
        onSearch?.(inputValue);
        setIsFocused(false);
        setSelectedIndex(-1);
      }
    }
  };

  const handleHistoryClick = (historyItem: string) => {
    setInputValue(historyItem);
    onSearch?.(historyItem);
    setIsFocused(false);
    setSelectedIndex(-1);
  };

  const handleDeleteHistory = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    deleteHistory(index);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <SearchContainer ref={containerRef}>
      <SearchInputWrapper $isFocused={isFocused && history.length > 0}>
        <SearchIcon>
          <MagnifyingGlassIcon width={20} height={20} />
        </SearchIcon>
        <Input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          onFocus={() => {
            setIsFocused(true);
            setSelectedIndex(-1);
          }}
          placeholder="검색어 입력"
        />
      </SearchInputWrapper>

      <HistoryDropdown $isOpen={isFocused && history.length > 0}>
        {history.map((item, index) => (
          <HistoryItem
            key={index}
            onClick={() => handleHistoryClick(item)}
            $isSelected={selectedIndex === index}
          >
            <HistoryText>{item}</HistoryText>
            <DeleteButton onClick={(e) => handleDeleteHistory(e, index)}>
              <XMarkIcon width={16} height={16} />
            </DeleteButton>
          </HistoryItem>
        ))}
      </HistoryDropdown>
    </SearchContainer>
  );
};

export default SearchInput;
