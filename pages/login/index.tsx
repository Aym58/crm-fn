import { Header } from 'src/epic/header';
import { LayoutPage } from 'src/common/layout-page';
import { InputText } from 'src/common/input-text';
import { SelectOption } from 'src/common/select-option';
import { Button } from 'src/common/button';
import { InputLabel } from 'src/common/input-label';
import { Grid } from 'src/common/grid';
import { InputSelect } from 'src/common/input-select';
import { InputSelectOption } from 'src/common/input-select-option';

export default function Home() {
  return (
    <>
      <Header menu />
      <LayoutPage>
        <Grid size="content">
          <Grid size="element">
            <InputLabel labelFor="email" label="Email" />
            <InputText name="email" />
          </Grid>

          <Grid size="element">
            <InputLabel labelFor="password" label="Password" />
            <InputText name="password" />
          </Grid>

          <Grid size="element">
            <InputLabel labelFor="source" label="Source" />
            <InputSelect name="source">
              <InputSelectOption value="one">Option one</InputSelectOption>
              <InputSelectOption value="two">Option two</InputSelectOption>
            </InputSelect>
          </Grid>
          <Button text="Submit" />
        </Grid>
      </LayoutPage>
    </>
  );
}
