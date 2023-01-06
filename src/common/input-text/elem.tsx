import React, { BaseSyntheticEvent, ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { InputBase } from '@mui/material';

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
} from 'src/theme';

import { InputEnum, SizeEnum, InputType } from './constant';

export const Elem: React.FC<{
  type?: InputType;
  name?: string;
  error?: boolean;
  children?: ReactNode;
  value?: string;
  textSize?: FontSizeType;
  fontWeight?: FontWeightType;
  disabled?: boolean;
  onChange?: Function;
}> = ({
  name,
  type = InputEnum.TEXT,
  error = false,
  value,
  textSize,
  fontWeight,
  onChange,
  disabled = false,
}) => {
  const handleChange = (event: BaseSyntheticEvent) => {
    if (onChange) onChange(event);
  };

  return (
    <Field
      fullWidth
      error={error}
      name={name}
      type={type}
      onChange={handleChange}
      textsize={textSize}
      fontWeight={fontWeight}
      disabled={disabled}
      value={value}
    />
  );
};

const Field = styled(InputBase)<{
  color?: ColorType;
  textsize?: FontSizeType;
  fontWeight?: FontWeightType;
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
    border-radius: 0;
  }

  input:focus {
    border: 2px solid ${ColorData[ColorEnum.TEXT]};
    border-radius: 0;
  }

  ${({
    color = ColorEnum.TEXT,
    textsize = FontSizeEnum.FORM,
    fontWeight = FontWeightEnum.MEDIUM,
  }) => css`
    color: ${ColorData[color]};
    font-size: ${FontSizeData[textsize]};
    font-weight: ${FontWeightData[fontWeight]};
  `}
`;
