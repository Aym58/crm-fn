import React, { BaseSyntheticEvent, ReactNode } from 'react';

import styled, { css } from 'styled-components';

import { Select, SelectChangeEvent } from '@mui/material';

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
} from 'src/theme';

import { InputEnum, SizeEnum, InputType } from './constant';

export const Field = styled(Select)<{
  onChange?: Function;
  color?: ColorType;
  textsize?: FontSizeType;
  fontWeight?: FontWeightType;
}>`
  height: ${SizeEnum.HEIGHT};
  width: ${SizeEnum.WIDTH};

  padding: ${PaddingSizeData[PaddingSizeEnum.ELEMENT]};

  fieldset {
    margin: 0;
    padding: 0;
    width: 100%;
    height: auto;
    border: 1px solid ${ColorData[ColorEnum.TEXT]};
  }

  fieldset:focus {
    border: 2px solid ${ColorData[ColorEnum.TEXT]};
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
