import styled from 'styled-components';
import Link from 'next/link';

import PlusIcon from 'src/assets/icons/plus.svg';

export const Elem: React.FC<{ to: string }> = ({ to }) => {
  return (
    <Link href={to}>
      <Container>
        <PlusIcon />
      </Container>
    </Link>
  );
};

export const Container = styled.div`
  position: absolute;
  width: auto;
  height: auto;
  right: 17px;
  top: 17px;
`;
