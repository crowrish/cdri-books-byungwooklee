import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin: 30px 0;
`;

const PageButton = styled.button<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.lightGray};
    color: ${({ theme }) => theme.colors.text.subtitle};
    opacity: 0.5;
  }
`;

export { Container, PageButton };
