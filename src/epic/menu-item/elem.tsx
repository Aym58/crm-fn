import { Link } from 'src/common/link';
import React, { ReactNode } from 'react';
import { Spacing } from 'src/theme';
import styled from 'styled-components';

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
