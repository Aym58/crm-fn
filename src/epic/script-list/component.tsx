import React from 'react';

import { PropsInter, SourceEnum, SourceData, SourceType } from './constant';
import { Grid } from 'src/common/grid';
import { TextElement } from 'src/common/text';
import { LinkExternal } from 'src/common/link-external';

export const Component = ({ data }: PropsInter) => {
  return (
    <Grid size="block">
      {Object.entries(SourceData).map(([source, name]) => (
        <React.Fragment key={source}>
          {data.some((e) => e.source === source) && (
            <Grid size="element">
              <TextElement size="sub-header" type="semi-bold">
                {name}
              </TextElement>
              {data.map(
                (e) =>
                  e.source === source && (
                    <LinkExternal
                      key={e.id}
                      href={e.link}
                      size="regular"
                      type="regular"
                    >
                      {e.name}
                    </LinkExternal>
                  ),
              )}
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
};
