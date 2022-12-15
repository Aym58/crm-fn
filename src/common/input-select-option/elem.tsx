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
} from 'src/theme';

import { InputEnum, SizeEnum, InputType } from './constant';

export const Option = styled(MenuItem)<{
  color?: ColorType;
  textsize?: FontSizeType;
  fontWeight?: FontWeightType;
}>`
  height: ${SizeEnum.HEIGHT};
  width: ${SizeEnum.WIDTH};
  line-height: 1.1;
  padding: ${PaddingSizeData[PaddingSizeEnum.ELEMENT]};
  border: none;
  box-shadow: none;

  ul {
    padding: 0;
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
