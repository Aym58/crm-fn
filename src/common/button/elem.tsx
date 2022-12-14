import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { ButtonBase } from '@mui/material';

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
  textSize = FontSizeEnum.FORM,
  fontWeight = FontWeightEnum.BOLD,
  onClick,
  backgroundColor,
  disabled = false,
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
    >
      <TextElement color={textColor} size={textSize} type={fontWeight}>
        {text}
      </TextElement>
    </Button>
  );
};

const Button = styled(ButtonBase)<{
  background?: ColorType;
}>`
  display: block;
  justify-self: center;
  cursor: pointer;
  border: none;
  border-radius: 0;
  height: ${Size.HEIGHT};
  width: ${Size.WIDTH};
  :disabled {
    opacity: 15%;
  }
  ${({ background = ColorEnum.GREEN }) => css`
    background: ${ColorData[background]};
  `}
`;
