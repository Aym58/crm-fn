import React, { ReactNode } from 'react';
import { ColorData, ColorEnum, ColorType } from 'src/theme';
import styled, { css } from 'styled-components';

import { Size } from './constant';

export const Elem: React.FC<{
  backgroundColor?: ColorType;
  children?: ReactNode;
}> = ({ children, backgroundColor }) => {
  return <Head background={backgroundColor}>{children}</Head>;
};

const Head = styled.thead<{
  background?: ColorType;
}>`
  height: ${Size.HEIGHT};
  border: none;

  ${({ background = ColorEnum.BACKGROUND }) => css`
    background: ${ColorData[background]};
  `}
`;
