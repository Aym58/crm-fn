import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { ColorEnum, ColorData } from 'src/theme';

export const Elem: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background-color: ${ColorData[ColorEnum.BACKGROUND]};
`;
