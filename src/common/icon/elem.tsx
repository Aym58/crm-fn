import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

export const Elem: React.FC<{
  src: ReactNode;
  size?: number;
}> = ({ size, src }) => {
  return <Container size={size}>{src}</Container>;
};

const Container = styled.div<{
  size?: number;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ size }) =>
    css`
      width: ${size};
      height: ${size};
    `};
`;
