import React, { ReactNode } from 'react';

import styled, { css } from 'styled-components';

import { MenuItem } from '@mui/material';

import {
  ColorData,
  ColorEnum,
  ColorType,
  FontSizeData,
  FontSizeEnum,
  FontSizeType,
  FontWeightData,
  FontWeightEnum,
  FontWeightType,
  PaddingSizeData,
  PaddingSizeEnum,
  PaddingSizeType,
  Spacing,
} from 'src/theme';

import { InputEnum, SizeEnum, InputType } from './constant';

import { Grid } from '../grid';
import { TextElement } from '../text';

export const Elem: React.FC<{
  type?: InputType;
  label?: string;
  name?: string;
  children?: ReactNode;
  value?: string;
  textSize?: FontSizeType | string;
  disabled?: boolean;
  onChange?: Function;
}> = ({
  children,
  name,
  label,
  value,
  textSize = Spacing(4.5),
  onChange,
  disabled = false,
}) => {
  const handleClick = (e: any) => {
    if (onChange) onChange(e);
  };
  return (
    <Option
      onClick={handleClick}
      textsize={textSize}
      disabled={disabled}
      value={value}
    >
      {children}
    </Option>
  );
};

const Option = styled(MenuItem)<{
  color?: ColorType;
  textsize?: FontSizeType | string;
}>`
  height: ${SizeEnum.HEIGHT};
  width: ${SizeEnum.WIDTH};

  input {
    box-sizing: border-box;
    line-height: 1.1;
    width: 100%;
    height: 100%;
    padding: ${PaddingSizeData[PaddingSizeEnum.ELEMENT]};
    border: 1px solid ${ColorData[ColorEnum.TEXT]};
  }

  input:focus {
    border: 2px solid ${ColorData[ColorEnum.TEXT]};
  }

  ${({ color = ColorEnum.TEXT, textsize = Spacing(4.5) }) => css`
    color: ${ColorData[color]};
    font-size: ${textsize};
  `}
`;
