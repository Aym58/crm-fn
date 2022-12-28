export interface DataInter {
  id: number;
  task: TaskType;
  status: StatusType;
}

export interface PropsInter {
  data: DataInter;
}

export enum TaskEnum {
  BID = 'bid',
  INVITE = 'invite',
  CALL = 'call',
  OFFER = 'offer',
  CLOSE_DEAL = 'close',
}

export type TaskType = `${TaskEnum}`;

export const TaskData = {
  [TaskEnum.BID]: 'Bid',
  [TaskEnum.INVITE]: 'Invite to First Call',
  [TaskEnum.CALL]: 'Schedule First Call',
  [TaskEnum.OFFER]: 'Make Offer',
  [TaskEnum.CLOSE_DEAL]: 'Close Deal',
};

export enum StatusEnum {
  IN_PROGRESS = 'in progress',
  SUCCESS = 'success',
  FAIL = 'fail',
}

export const StatusData = {
  [StatusEnum.IN_PROGRESS]: 'Active',
  [StatusEnum.SUCCESS]: 'Completed',
  [StatusEnum.FAIL]: 'Failed',
};

export type StatusType = `${StatusEnum}`;

export interface FormValuesInter {
  id: number;
  task: TaskType;
  status: StatusType;
}

export type StepsType = { [key: string]: StatusType | null };

export const API = {
  METHOD: 'PATCH',
  URL: '/task/',
};

export enum FormMessages {
  SUCCESS = 'Lead task and status updated',
  NO_TOKEN = 'You are not logged in, please log-in',
  ERROR_CONNECTION = 'Unable to connect to the server',
  ERROR_UNKNOWN = 'Something went wrong! Please try again.',
}
