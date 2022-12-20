import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { TextElement } from '../text';
import {
  FontSizeEnum,
  FontSizeType,
  FontWeightEnum,
  FontWeightType,
} from 'src/theme';

import { ColorEnum, ColorData, ColorType } from 'src/theme';
import { Size } from './constant';

export const Elem: React.FC<{
  error?: boolean;
  children?: ReactNode;
  text?: string;
  textColor?: ColorType;
  backgroundColor?: ColorType;
  textSize?: FontSizeType;
  fontWeight?: FontWeightType;
}> = ({
  text,
  error,
  backgroundColor,
  textColor = ColorEnum.TEXT,
  textSize = FontSizeEnum.SUB_HEADER,
  fontWeight = FontWeightEnum.MEDIUM,
}) => {
  return (
    <Message background={backgroundColor}>
      {text && (
        <TextElement
          color={error ? ColorEnum.RED : textColor}
          size={textSize}
          type={fontWeight}
          lineHeight
        >
          {text}
        </TextElement>
      )}
    </Message>
  );
};

const Message = styled.div<{
  background?: ColorType;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 0;
  height: ${Size.HEIGHT};
  width: ${Size.WIDTH};

  ${({ background = ColorEnum.BACKGROUND }) => css`
    background: ${ColorData[background]};
  `}
`;
