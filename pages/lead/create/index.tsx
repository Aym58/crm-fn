import React from 'react';

import { FormLeadCreate } from 'src/epic/form-lead-create';
import { TextElement } from 'src/common/text';
import { Grid } from 'src/common/grid';

export default function LeadCreate() {
  return (
    <Grid size="content">
      <TextElement size="header" type="bold">
        Create Lead
      </TextElement>
      <FormLeadCreate />
    </Grid>
  );
}
