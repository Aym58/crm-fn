import React, { FormEventHandler, ReactNode } from 'react';
import { Spacing } from 'src/theme';

import styled from 'styled-components';

export const Elem: React.FC<{
  children: ReactNode;
  onSubmit: FormEventHandler;
}> = ({ children, onSubmit }) => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    onSubmit(event);
  };

  return (
    <Form onSubmit={handleSubmit} noValidate>
      {children}
      <Input type="submit" />
    </Form>
  );
};

const Form = styled.form<{}>`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 ${Spacing(4.5)};
`;

const Input = styled.input<{}>`
  display: none;
`;
