import React from 'react';

import {
  TableTH,
  TableTD,
  TableRow,
  TableHead,
  TableBody,
  Table,
  TableContainer,
} from 'src/common/table';
import { Link } from 'src/common/link';

import { StatusEnum } from '../form-change-tasks/constant';
import { PropsInter, SourceData, TaskData, TableHeaders } from './constant';

export const Component = ({ data }: PropsInter) => {
  return (
    <TableContainer>
      <Table>
        <TableHead backgroundColor="yellow">
          <TableRow>
            <TableTH textSize="sub-header" fontWeight="bold">
              {TableHeaders.NAME}
            </TableTH>
            <TableTH textSize="sub-header" fontWeight="bold">
              {TableHeaders.SOURCE}
            </TableTH>
            <TableTH textSize="sub-header" fontWeight="bold">
              {TableHeaders.BUDGET}
            </TableTH>
            <TableTH textSize="sub-header" fontWeight="bold">
              {TableHeaders.TASK}
            </TableTH>
            <TableTH textSize="sub-header" fontWeight="bold">
              {TableHeaders.CONTACT}
            </TableTH>
            <TableTH textSize="sub-header" fontWeight="bold">
              {TableHeaders.MANAGER}
            </TableTH>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((lead) => (
            <TableRow key={lead.id}>
              <TableTD textSize="regular" fontWeight="medium">
                {lead.name}
              </TableTD>
              <TableTD textSize="regular" fontWeight="medium">
                {SourceData[lead.source]}
              </TableTD>
              <TableTD textSize="regular" fontWeight="medium">
                {lead.budget}
              </TableTD>
              <TableTD
                textSize="regular"
                fontWeight="medium"
                backgroundColor={
                  (lead.status === StatusEnum.FAIL && 'red') ||
                  (lead.status === StatusEnum.SUCCESS && 'green') ||
                  'background'
                }
              >
                <Link href={`/lead/update/${lead.id}`}>
                  {TaskData[lead.task]}
                </Link>
              </TableTD>
              <TableTD textSize="regular" fontWeight="medium">
                {lead.contact}
              </TableTD>
              <TableTD textSize="regular" fontWeight="medium">
                {lead.user.name}
              </TableTD>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
