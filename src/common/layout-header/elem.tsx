import React, { ReactNode } from 'react';
import styled from 'styled-components';
import {
  ColorEnum,
  ColorData,
  PaddingSizeData,
  PaddingSizeEnum,
} from 'src/theme';
import { HEADER_HEIGHT, MAX_WIDTH } from 'src/theme/size';

export const Elem: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Container>
      <InnerContainer>{children}</InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  height: ${HEADER_HEIGHT};
  border-bottom: 3px solid ${ColorData[ColorEnum.TEXT]};
  background-color: ${ColorData[ColorEnum.BACKGROUND]};
`;

const InnerContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${MAX_WIDTH};
  height: 100%;
  padding: ${PaddingSizeData[PaddingSizeEnum.CONTENT]};
`;
