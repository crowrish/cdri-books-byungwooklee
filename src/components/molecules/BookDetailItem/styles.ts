'use client';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  padding: 26px 16px 26px 48px;

  border-bottom: 1px solid #d2d6da;
`;

const ImageBox = styled.div`
  width: 210px;
  height: 280px;

  position: relative;
`;

const LikeBox = styled.div`
  position: absolute;

  top: 0px;
  right: 0px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  flex: 1;
  max-width: 408px;

  color: ${({ theme }) => theme.colors.text.primary};
`;

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  align-self: stretch;

  width: 240px;
`;

const PriceBox = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 8px;

  padding-bottom: 28px;

  > div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export { Wrapper, TextBox, RightBox, PriceBox, ImageBox, LikeBox };
