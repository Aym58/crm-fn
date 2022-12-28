import React, { ReactNode } from 'react';
import { ColorData, ColorEnum, ColorType } from 'src/theme';
import styled, { css } from 'styled-components';

import { Size } from './constant';

export const Elem: React.FC<{
  backgroundColor?: ColorType;
  children?: ReactNode;
}> = ({ children, backgroundColor }) => {
  return <Table background={backgroundColor}>{children}</Table>;
};

const Table = styled.table<{
  background?: ColorType;
}>`
  height: ${Size.HEIGHT};
  border: none;
  border-collapse: collapse;
  min-width: 100%;
  ${({ background = ColorEnum.BACKGROUND }) => css`
    background: ${ColorData[background]};
  `}
`;
