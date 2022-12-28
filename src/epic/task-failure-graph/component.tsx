import React from 'react';
import { useRouter } from 'next/router';

import { Grid } from 'src/common/grid';
import { TextElement } from 'src/common/text';
import { GraphElement } from '../graph-element';

import { PropsInter, TaskData } from './constant';

export const Component = ({ data }: PropsInter) => {
  const router = useRouter();

  return (
    <Grid size="section">
      <TextElement size="sub-header" type="semi-bold">
        Task Failure Rate
      </TextElement>
      <Grid size="block">
        {data.map((el, i) => (
          <GraphElement
            key={i}
            text={TaskData[el.task]}
            percent={el.failureRate}
          />
        ))}
      </Grid>
    </Grid>
  );
};
