import {
  DataInter,
  FormValuesInter,
  StatusEnum,
  StepsType,
  TaskData,
  TaskEnum,
  TaskType,
} from './constant';

export const convertDataToUi = (data: DataInter): StepsType => {
  const steps: StepsType = {
    [TaskEnum.BID]: null,
    [TaskEnum.INVITE]: null,
    [TaskEnum.CALL]: null,
    [TaskEnum.OFFER]: null,
    [TaskEnum.CLOSE_DEAL]: null,
  };

  let isActive = false;
  Object.entries(steps).forEach(([task, status]) => {
    if (task !== data.task && !isActive) steps[task] = StatusEnum.SUCCESS;
    if (task === data.task) {
      isActive = true;
      steps[task] = data.status;
    }
  });

  return steps;
};
