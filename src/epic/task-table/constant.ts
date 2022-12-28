import { StatusType } from '../form-change-tasks/constant';

export interface DataInter {
  id: number;
  leadName: string;
  task: TaskEnum;
  hold: number;
  user: string;
}

export interface PropsInter {
  data: DataInter[];
}

export interface PayloadInter {
  id: number;
  task: TaskType;
  status: StatusType;
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

export enum TableHeaders {
  TASK_NAME = 'Task',
  LEAD_NAME = 'Lead',
  ACTION = 'Action',
  HOLD = 'Hold Days',
  MANAGER = 'Manager',
}

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
