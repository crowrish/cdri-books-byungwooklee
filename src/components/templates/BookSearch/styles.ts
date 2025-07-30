'use client';

import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const InputBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const BookItemList = styled.div`
  display: flex;
  flex-direction: column;
`;

export { Wrapper, BookItemList, InputBox };
