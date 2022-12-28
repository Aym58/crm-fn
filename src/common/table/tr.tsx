import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { Size } from './constant';

export const Elem: React.FC<{
  children?: ReactNode;
}> = ({ children }) => {
  return <Row>{children}</Row>;
};

const Row = styled.tr`
  height: ${Size.HEIGHT};
  display: table-row;
  border: none;
`;
