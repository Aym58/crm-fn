import React, { ReactNode } from 'react';

import styled, { css } from 'styled-components';
import { InputLabel } from '@mui/material';

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
  labelFor: string;
  label?: string;
  name?: string;
  children?: ReactNode;
  value?: string;
  textSize?: FontSizeType | string;
  disabled?: boolean;
  onChange?: Function;
}> = ({
  labelFor,
  label,
  type = InputEnum.TEXT,
  value,
  textSize = Spacing(4.5),
  onChange,
  disabled = false,
}) => {
  return (
    <Label shrink htmlFor={labelFor}>
      {label}
    </Label>
  );
};

const Label = styled(InputLabel)<{
  color?: ColorType;
  textsize?: FontSizeType;
}>`
  width: 100%;
  font-weight: ${FontWeightData[FontWeightEnum.SEMI_BOLD]};
  transform: none;
  line-height: 1.1;

  ${({ color = ColorEnum.TEXT, textsize = FontSizeEnum.SUB_HEADER }) => css`
    color: ${ColorData[color]};
    font-size: ${FontSizeData[textsize]};
  `};
`;
