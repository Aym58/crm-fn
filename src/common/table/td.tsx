import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { TextElement } from '../text';
import {
  FontSizeEnum,
  FontSizeType,
  FontWeightEnum,
  FontWeightType,
  PaddingSizeData,
  PaddingSizeEnum,
} from 'src/theme';
import { ColorEnum, ColorData, ColorType } from 'src/theme';

import { Size } from './constant';

export const Elem: React.FC<{
  children?: ReactNode;
  textColor?: ColorType;
  textSize?: FontSizeType;
  fontWeight?: FontWeightType;
  backgroundColor?: ColorType;
}> = ({
  children,
  textColor = ColorEnum.TEXT,
  textSize = FontSizeEnum.FORM,
  fontWeight = FontWeightEnum.BOLD,
  backgroundColor,
}) => {
  return (
    <Data background={backgroundColor}>
      <TextElement color={textColor} size={textSize} type={fontWeight} oneLine>
        {children}
      </TextElement>
    </Data>
  );
};

const Data = styled.td<{
  background?: ColorType;
}>`
  max-width: ${Size.MAX_CELL_WIDTH};
  display: table-cell;
  border: none;
  text-align: left;
  padding: ${PaddingSizeData[PaddingSizeEnum.ELEMENT]};
  ${({ background = ColorEnum.BACKGROUND }) => css`
    background: ${ColorData[background]};
  `}
`;
