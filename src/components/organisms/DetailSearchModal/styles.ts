'use client';

import styled from 'styled-components';

const ModalContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 360px;
  padding: 36px 24px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 4px 14px 6px #97979726;

  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 100;
  margin-top: 15px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.gray};

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;

const FormRow = styled.div`
  display: flex;
  gap: 4px;
`;

const Select = styled.select`
  width: 100px;
  height: 40px;
  padding: 0 12px;
  border-bottom: 1px solid #d2d6da;
  background-color: white;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
`;

const Input = styled.input`
  width: 208px;
  height: 40px;
  padding: 5px 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-weight: 500;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.subtitle};
  }
`;

export { ModalContainer, CloseButton, FormRow, Select, Input };
