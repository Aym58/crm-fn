import React from 'react';

import { FormScriptCreate } from 'src/epic/form-script-create';
import { Grid } from 'src/common/grid';
import { TextElement } from 'src/common/text';

export default function ScriptCreate() {
  return (
    <Grid size="content">
      <TextElement size="header" type="bold">
        Create Script
      </TextElement>
      <FormScriptCreate />
    </Grid>
  );
}
