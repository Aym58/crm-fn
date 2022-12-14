import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import {
  PaddingSizeData,
  PaddingSizeEnum,
  PaddingSizeType,
  Spacing,
} from 'src/theme';

export const Elem: React.FC<{
  size?: PaddingSizeType;
  children?: ReactNode;
  spacing?: number;
  noStretch?: boolean;
}> = ({ children, size, noStretch }) => {
  return (
    <Grid size={size} noStretch={noStretch}>
      {children}
    </Grid>
  );
};

const Grid = styled.div<{
  size?: PaddingSizeType;
  spacing?: number;
  noStretch?: boolean;
}>`
  display: grid;
  align-items: start;
  justify-items: start;
  ${({ size = PaddingSizeEnum.BLOCK, noStretch = false, spacing }) => css`
    width: ${noStretch ? 'auto' : '100%'};
    grid-auto-flow: 'row';
    grid-gap: ${spacing ? Spacing(spacing) : PaddingSizeData[size]};
  `}
`;
