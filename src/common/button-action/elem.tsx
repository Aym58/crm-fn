import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { ButtonBase } from '@mui/material';

import { TextElement } from '../text';
import {
  FontSizeEnum,
  FontSizeType,
  FontWeightEnum,
  FontWeightType,
  Spacing,
} from 'src/theme';
import { ColorEnum, ColorData, ColorType } from 'src/theme';
import { Size } from './constant';

export const Elem: React.FC<{
  table?: boolean;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  children?: ReactNode;
  text?: string;
  textColor?: ColorType;
  textSize?: FontSizeType;
  fontWeight?: FontWeightType;
  onClick?: Function;
  backgroundColor?: ColorType;
}> = ({
  text,
  type = 'button',
  textColor = ColorEnum.TEXT,
  textSize = FontSizeEnum.SUB_HEADER,
  fontWeight = FontWeightEnum.SEMI_BOLD,
  onClick,
  backgroundColor,
  disabled = false,
  table = false,
}) => {
  const handleClick = (event: any) => {
    if (onClick) onClick(event);
  };
  return (
    <Button
      onClick={handleClick}
      background={backgroundColor}
      disabled={disabled}
      type={type}
      istable={table}
    >
      <TextElement color={textColor} size={textSize} type={fontWeight} oneLine>
        {text}
      </TextElement>
    </Button>
  );
};

const Button = styled.button<{
  background?: ColorType;
  istable?: boolean;
}>`
  display: flex;
  justify-self: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid ${ColorData[ColorEnum.TEXT]};
  border-radius: 0;
  :disabled {
    opacity: 15%;
  }
  padding: ${Spacing(0.5)};
  ${({ background = ColorEnum.GREEN, istable = false }) => css`
    height: ${istable ? Size.HEIGHT_TABLE : Size.HEIGHT};
    width: ${istable ? 'auto' : Size.WIDTH};
    background: ${ColorData[background]};
  `}
`;
