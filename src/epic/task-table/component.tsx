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
import { action } from './action';
import { useRouter } from 'next/router';

export const Component = ({ data }: PropsInter) => {
  const [message, setMessage] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const tasks = Object.keys(TaskData);

  const router = useRouter();

  const handleDone = (task: DataInter) => {
    const payload: PayloadInter = {
      id: task.id,
      status:
        task.task === TaskEnum.CLOSE_DEAL
          ? StatusEnum.SUCCESS
          : StatusEnum.IN_PROGRESS,
      task:
        task.task === TaskEnum.CLOSE_DEAL
          ? TaskEnum.CLOSE_DEAL
          : (tasks[tasks.indexOf(task.task) + 1] as keyof typeof TaskData),
    };
    handleSubmit(payload);
  };

  const handleDelete = (task: DataInter) => {
    const payload: PayloadInter = {
      id: task.id,
      status: StatusEnum.FAIL,
      task: task.task,
    };
    handleSubmit(payload);
  };

  const handleSubmit = async (payload: PayloadInter) => {
    setIsError(false);
    setIsSuccess(false);
    setMessage('');
    setIsLoading(true);
    const response = await action(payload);
    setIsLoading(false);
    if (response?.success) {
      setIsSuccess(true);
      setMessage(FormMessages.SUCCESS);
      router.push('/task');
    } else {
      setIsError(true);
      setMessage(response?.message || FormMessages.ERROR_UNKNOWN);
    }
  };

  return (
    <Grid size="content">
      <TableContainer>
        <Table>
          <TableHead backgroundColor="yellow">
            <TableRow>
              <TableTH textSize="sub-header" fontWeight="bold">
                {TableHeaders.TASK_NAME}
              </TableTH>
              <TableTH textSize="sub-header" fontWeight="bold">
                {TableHeaders.LEAD_NAME}
              </TableTH>
              <TableTH textSize="sub-header" fontWeight="bold">
                {TableHeaders.ACTION}
              </TableTH>
              <TableTH textSize="sub-header" fontWeight="bold">
                {TableHeaders.ACTION}
              </TableTH>
              <TableTH textSize="sub-header" fontWeight="bold">
                {TableHeaders.HOLD}
              </TableTH>
              <TableTH textSize="sub-header" fontWeight="bold">
                {TableHeaders.MANAGER}
              </TableTH>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((task) => (
              <TableRow key={task.id}>
                <TableTD textSize="regular" fontWeight="medium">
                  {TaskData[task.task]}
                </TableTD>
                <TableTD textSize="regular" fontWeight="medium">
                  {task.leadName}
                </TableTD>
                <TableTD textSize="regular" fontWeight="medium">
                  <ActionButton
                    text="Mark as Done"
                    textSize="regular"
                    table
                    onClick={() => handleDone(task)}
                    disabled={isLoading}
                  />
                </TableTD>
                <TableTD textSize="regular" fontWeight="medium">
                  <ActionButton
                    text="Delete task"
                    backgroundColor="red"
                    textSize="regular"
                    table
                    onClick={() => handleDelete(task)}
                    disabled={isLoading}
                  />
                </TableTD>
                <TableTD
                  textSize="regular"
                  fontWeight="medium"
                  textColor={
                    (task.hold > 1 && 'red') ||
                    (task.hold === 1 && 'yellow') ||
                    'text'
                  }
                >
                  {task.hold}
                </TableTD>
                <TableTD textSize="regular" fontWeight="medium">
                  {task.user}
                </TableTD>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Message text={message} error={isError} />
    </Grid>
  );
};
