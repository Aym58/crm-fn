import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { ColorEnum, ColorData } from 'src/theme';

export const Elem: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  border-bottom: 3px solid ${ColorData[ColorEnum.TEXT]};
`;
