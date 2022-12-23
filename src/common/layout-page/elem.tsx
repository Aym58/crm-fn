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
  position: relative;
  width: 100%;
  z-index: 1;
  margin-top: ${HEADER_HEIGHT};
  background-color: ${ColorData[ColorEnum.BACKGROUND]};
`;

const InnerContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: ${MAX_WIDTH};
  height: 100%;
  padding-left: ${PaddingSizeData[PaddingSizeEnum.CONTENT]};
  padding-right: ${PaddingSizeData[PaddingSizeEnum.CONTENT]};
  padding-top: ${PaddingSizeData[PaddingSizeEnum.ZONE]};
  padding-bottom: ${PaddingSizeData[PaddingSizeEnum.ZONE]};
`;
