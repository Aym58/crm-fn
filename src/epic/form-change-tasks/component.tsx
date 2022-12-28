import React, { useState } from 'react';

import { Button } from 'src/common/button';
import { Grid } from 'src/common/grid';
import { Form } from 'src/common/form';
import {
  FormMessages,
  PropsInter,
  DataInter,
  FormValuesInter,
  TaskEnum,
  TaskData,
  TaskType,
  StepsType,
  StatusData,
  StatusEnum,
  StatusType,
} from './constant';
import { Message } from 'src/common/message';
import { action } from './action';
import ArrowIcon from 'src/assets/icons/arrow.svg';
import { ActionButton } from 'src/common/button-action';
import styled from 'styled-components';
import { convertDataToUi } from './convert';

export const Component = ({ data }: PropsInter) => {
  const [message, setMessage] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [steps, setSteps] = useState<StepsType>(convertDataToUi(data));

  const handleClick = (task: TaskType, status: StatusType | null) => {
    data.task = task;
    const tasks = Object.keys(steps);
    if (status === StatusEnum.IN_PROGRESS) {
      if (task === TaskEnum.CLOSE_DEAL) {
        data.status = StatusEnum.SUCCESS;
        return setSteps(convertDataToUi(data));
      }
      data.task = tasks[tasks.indexOf(task) + 1] as keyof typeof TaskData;
      return setSteps(convertDataToUi(data));
    }
    if (status === StatusEnum.SUCCESS) {
      data.status = StatusEnum.FAIL;
      return setSteps(convertDataToUi(data));
    }
    if (status === StatusEnum.FAIL) {
      data.status = StatusEnum.IN_PROGRESS;
      return setSteps(convertDataToUi(data));
    }
  };

  const handleSubmit = async () => {
    setIsError(false);
    setIsSuccess(false);
    setMessage('');
    setIsLoading(true);
    const response = await action(data);
    setIsLoading(false);
    console.log(response);
    if (response?.success) {
      setIsSuccess(true);
      setMessage(FormMessages.SUCCESS);
    } else {
      setIsError(true);
      setMessage(response?.message || FormMessages.ERROR_UNKNOWN);
    }
  };

  const isFormDisabled = (): boolean => {
    if (isLoading) {
      return true;
    } else return false;
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid size="content">
        <TaskListContainer>
          {Object.entries(steps).map(([task, status], i) => (
            <React.Fragment key={i}>
              <ActionButton
                text={`${TaskData[task as keyof typeof TaskData]}${
                  status
                    ? ': ' + StatusData[status as keyof typeof StatusData]
                    : ''
                }`}
                backgroundColor={status === StatusEnum.FAIL ? 'red' : 'green'}
                disabled={!status}
                onClick={() =>
                  handleClick(task as keyof typeof TaskData, status)
                }
              />
              {task !== TaskEnum.CLOSE_DEAL && <ArrowIcon />}
            </React.Fragment>
          ))}
        </TaskListContainer>
        <Message text={message} error={isError} />
        <Button text="Submit" type="submit" disabled={isFormDisabled()} />
      </Grid>
    </Form>
  );
};

const TaskListContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  grid-gap: 0;
`;
