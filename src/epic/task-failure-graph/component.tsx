import React, { useState } from 'react';

import {
  DataInter,
  FormMessages,
  PayloadInter,
  PropsInter,
  TaskData,
  TaskEnum,
} from './constant';
import { TableHeaders } from './constant';
import {
  TableTH,
  TableTD,
  TableRow,
  TableHead,
  TableBody,
  Table,
  TableContainer,
} from 'src/common/table';
import { ActionButton } from 'src/common/button-action';
import { StatusEnum } from '../form-change-tasks/constant';
import { Grid } from 'src/common/grid';
import { Message } from 'src/common/message';

import { useRouter } from 'next/router';
import { TextElement } from 'src/common/text';
import { GraphElement } from '../graph-element';

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
//          <TextElement key={i} size="regular" type="regular">
//{el.failureRate}% {TaskData[el.task]}
//</TextElement>
