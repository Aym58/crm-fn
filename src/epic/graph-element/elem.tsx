import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { TextElement } from 'src/common/text';
import {
  FontSizeEnum,
  FontSizeType,
  FontWeightEnum,
  FontWeightType,
  PaddingSizeData,
  PaddingSizeEnum,
  Spacing,
} from 'src/theme';
import { ColorEnum, ColorData, ColorType } from 'src/theme';

export const Elem: React.FC<{
  text: string;
  percent: number;
  textColor?: ColorType;
  textSize?: FontSizeType;
  fontWeight?: FontWeightType;
  backgroundColor?: ColorType;
}> = ({
  text,
  percent,
  textColor = ColorEnum.TEXT,
  textSize = FontSizeEnum.REGULAR,
  fontWeight = FontWeightEnum.REGULAR,
}) => {
  return (
    <Container>
      <Graph percent={percent} />
      <TextContainer>
        <TextElement
          color={textColor}
          size={textSize}
          type={fontWeight}
          oneLine
        >
          {percent}% {text}
        </TextElement>
      </TextContainer>
    </Container>
  );
};

const Graph = styled.div<{
  background?: ColorType;
  percent: number;
}>`
  border: none;
  height: 100%;
  min-width: ${Spacing(1)};
  max-width: 80%;
  ${({ background = ColorEnum.RED, percent }) => css`
    background: ${ColorData[background]};
    width: ${0.8 * percent}%;
  `}
`;

const TextContainer = styled.div`
  width: auto;
  height: ${Spacing(3)};
  display: flex;
  justify-content: left;
  gap: ${PaddingSizeData[PaddingSizeEnum.BLOCK]};
  align-items: center;
  border-radius: 0;
`;

const Container = styled.div`
  width: 100%;
  height: ${Spacing(3)};
  display: flex;
  justify-content: left;
  gap: ${PaddingSizeData[PaddingSizeEnum.BLOCK]};
  align-items: center;
  border-radius: 0;
`;
