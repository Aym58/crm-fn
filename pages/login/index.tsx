import { Header } from 'src/epic/header';
import { LayoutPage } from 'src/common/layout-page';
import { InputText } from 'src/common/input-text';

import { Button } from 'src/common/button';
import { InputLabel } from 'src/common/input-label';
import { Grid } from 'src/common/grid';
import { InputSelect } from 'src/common/input-select';
import { InputSelectOption } from 'src/common/input-select-option';
import React, { BaseSyntheticEvent } from 'react';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';

export default function Home() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setAge(event.target.value as string);
    console.log(event.target.value);
  };

  const handler = (event: BaseSyntheticEvent) =>
    console.log(event.target.value);

  return (
    <>
      <Header menu />
      <LayoutPage>
        <Grid size="content">
          <Grid size="element">
            <InputLabel labelFor="email" label="Email" />
            <InputText name="email" onChange={handler} />
          </Grid>

          <Grid size="element">
            <InputLabel labelFor="password" label="Password" />
            <InputText name="password" onChange={handler} />
          </Grid>

          <Grid size="element">
            <InputLabel labelFor="source" label="Source" />
            <InputSelect value={age} labelId="source" onChange={handleChange}>
              <InputSelectOption value={'one'}>Option one</InputSelectOption>
              <InputSelectOption value={'two'}>Option two</InputSelectOption>
              <InputSelectOption value={'three'}>
                Option three
              </InputSelectOption>
            </InputSelect>
          </Grid>
          <Button text="Submit" />
        </Grid>
      </LayoutPage>
    </>
  );
}
