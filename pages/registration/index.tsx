import React from 'react';

import { FormRegistration } from 'src/epic/form-registration';
import { Grid } from 'src/common/grid';
import { GeometricAnimation } from 'src/epic/geometric-animation';

export default function Registration() {
  return (
    <Grid size="content">
      <GeometricAnimation delay={2000} />
      <FormRegistration />
    </Grid>
  );
}
