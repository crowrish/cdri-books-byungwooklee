'use client';

import styled from 'styled-components';

const SearchContainer = styled.div`
  position: relative;
  width: 480px;
`;

const SearchInputWrapper = styled.div<{ $isFocused: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ $isFocused }) => ($isFocused ? '25px 25px 0 0' : '25px')};
  padding: 0 20px;
  gap: 10px;
  transition: all 0.1s ease;
`;

const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  > svg {
    stroke-width: 2;
  }
`;

const Input = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text.primary};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.subtitle};
  }
`;

const HistoryDropdown = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 0 0 20px 20px;
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transform: ${({ $isOpen }) =>
    $isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  max-height: 200px;
  overflow: hidden;
  transition:
    opacity 0.2s ease,
    visibility 0.2s ease,
    transform 0.2s ease;
  z-index: 2;
`;

const HistoryItem = styled.div<{ $isSelected?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px 12px 50px;
  color: ${({ theme }) => theme.colors.text.subtitle};
  cursor: pointer;
  transition: background-color 0.2s ease;
  background-color: ${({ $isSelected }) =>
    $isSelected ? 'rgba(0, 0, 0, 0.1)' : 'transparent'};

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const HistoryText = styled.span`
  flex: 1;
  font-size: 16px;
`;

const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};
  transition: color 0.2s ease;

  > svg {
    stroke-width: 2;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export {
  SearchContainer,
  SearchInputWrapper,
  SearchIcon,
  Input,
  HistoryDropdown,
  HistoryItem,
  HistoryText,
  DeleteButton,
};
