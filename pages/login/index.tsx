import React from 'react';

import { FormLogin } from 'src/epic/form-login';
import { Grid } from 'src/common/grid';
import { TextElement } from 'src/common/text';

export default function Login() {
  return (
    <Grid size="content">
      <TextElement size="header" type="bold">
        Login
      </TextElement>
      <FormLogin />
    </Grid>
  );
}
