import React from 'react';

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
} from 'src/theme';

export const Elem: React.FC<{
  labelFor: string;
  label?: string;
  error?: boolean;
  textSize?: FontSizeType;
}> = ({ labelFor, label, error, textSize }) => {
  return (
    <Label shrink htmlFor={labelFor} error={error} textsize={textSize}>
      {label}
    </Label>
  );
};

const Label = styled(InputLabel)<{
  color?: ColorType;
  textsize?: FontSizeType;
  error?: boolean;
}>`
  width: 100%;
  font-weight: ${FontWeightData[FontWeightEnum.SEMI_BOLD]};
  transform: none;
  line-height: 1.1;

  ${({
    color = ColorEnum.TEXT,
    textsize = FontSizeEnum.SUB_HEADER,
    error = false,
  }) => css`
    color: ${error ? ColorData[ColorEnum.RED] : ColorData[color]};
    font-size: ${FontSizeData[textsize]};
  `};
`;
