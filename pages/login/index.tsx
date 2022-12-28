import { useRouter } from 'next/router';
import React from 'react';

import { FormLogin } from 'src/epic/form-login';
import { Grid } from 'src/common/grid';
import { Button } from 'src/common/button';
import { GeometricAnimation } from 'src/epic/geometric-animation';

export default function Login() {
  const route = useRouter();
  const onClickHandler = () => {
    route.push('/registration');
  };

  return (
    <Grid size="content">
      <GeometricAnimation delay={2000} />
      <FormLogin />
      <Button text="Crate New Account" onClick={onClickHandler} />
    </Grid>
  );
}
