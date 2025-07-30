'use client';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px 16px 16px 48px;

  border-bottom: 1px solid #d2d6da;
`;

const ImageBox = styled.div`
  width: 48px;
  height: 68px;

  position: relative;
`;

const LikeBox = styled.div`
  position: absolute;

  top: 0px;
  right: 0px;
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  flex: 1;
  max-width: 408px;
`;

const PriceBox = styled.div``;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  width: 240px;
  gap: 10px;

  > * {
    width: 115px;
  }
`;

export { Wrapper, TextBox, ButtonBox, PriceBox, ImageBox, LikeBox };
