import React from 'react';

import { FormRegistration } from 'src/epic/form-registration';
import { Grid } from 'src/common/grid';
import { TextElement } from 'src/common/text';

export default function Registration() {
  return (
    <Grid size="content">
      <TextElement size="header" type="bold">
        Create New Account
      </TextElement>
      <FormRegistration />
    </Grid>
  );
}
