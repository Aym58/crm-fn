import React, { useEffect } from 'react';

import { Grid } from 'src/common/grid';
import { TextElement } from 'src/common/text';
import { action } from './action';
import { SourceNames } from './constant';

export default function ScriptCreate() {
  useEffect(() => {
    const data = action();
    console.log(data);
  }, []);
  return (
    <Grid size="content">
      <TextElement size="header" type="bold">
        Discovery
      </TextElement>
      <Grid size="block">
        <Grid size="element">
          <TextElement size="sub-header" type="semi-bold">
            {SourceNames.UPWORK}
          </TextElement>
        </Grid>
        <Grid size="element">
          <TextElement size="sub-header" type="semi-bold">
            {SourceNames.TELEGRAM}
          </TextElement>
        </Grid>
        <Grid size="element">
          <TextElement size="sub-header" type="semi-bold">
            {SourceNames.LINKEDIN}
          </TextElement>
        </Grid>
      </Grid>
    </Grid>
  );
}
