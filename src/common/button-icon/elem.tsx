import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { Icon } from '../icon';

export const Elem: React.FC<{
  src: ReactNode;
  onClick?: Function;
}> = ({ src, onClick }) => {
  const handleClick = (e: any) => {
    if (onClick) onClick(e);
  };
  return (
    <Button onClick={handleClick}>
      <Icon src={src} />
    </Button>
  );
};

const Button = styled.button`
  align-self: center;
  transition: none;
  border: none;
  background: none;
  --box-shadow: none;
  padding: 0;
  margin: 0;
  height: auto;
  width: auto;
`;
