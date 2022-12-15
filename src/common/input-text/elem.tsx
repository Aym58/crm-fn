import React, { ReactNode } from 'react';

import styled, { css } from 'styled-components';
import { InputBase, InputLabel } from '@mui/material';

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

export const Elem: React.FC<{
  type?: InputType;
  name?: string;
  children?: ReactNode;
  value?: string;
  textSize?: FontSizeType | string;
  disabled?: boolean;
  onChange?: Function;
}> = ({
  name,
  type = InputEnum.TEXT,
  value,
  textSize = Spacing(4.5),
  onChange,
  disabled = false,
}) => {
  const handleClick = (e: any) => {
    if (onChange) onChange(e);
  };
  return (
    <Field
      fullWidth
      name={name}
      type={type}
      onClick={handleClick}
      textsize={textSize}
      disabled={disabled}
      value={value}
    />
  );
};

const Field = styled(InputBase)<{
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
