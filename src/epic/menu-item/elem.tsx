import styled from 'styled-components';
import React, { ReactNode } from 'react';

import { Link } from 'src/common/link';
import { Spacing } from 'src/theme';

export const Elem: React.FC<{
  to: string;
  children?: ReactNode;
}> = ({ to, children }) => {
  return (
    <Link href={to}>
      <Container>{children}</Container>
    </Link>
  );
};

const Container = styled.div`
  display: grid;
  justify-items: start;
  align-items: center;
  width: 100%;
  grid-auto-flow: column;
  grid-template-columns: auto 1fr;
  grid-gap: ${Spacing(4.5)};
`;
