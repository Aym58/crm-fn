import { StatusType } from '../form-change-tasks/constant';

export interface DataInter {
  id: number;
  name: string;
  source: SourceType;
  budget: string;
  contact: string;
  status: StatusType;
  task: TaskType;
  user: { name: string; email: string };
}

export interface PropsInter {
  data: DataInter[];
}

export enum SourceEnum {
  UPWORK = 'upwork',
  TELEGRAM = 'telegram',
  LINKEDIN = 'linkedin',
}

export type SourceType = `${SourceEnum}`;

export const SourceData = {
  [SourceEnum.UPWORK]: 'Upwork',
  [SourceEnum.TELEGRAM]: 'Telegram',
  [SourceEnum.LINKEDIN]: 'Linkedin',
};

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
  NAME = 'Name',
  SOURCE = 'Source',
  BUDGET = 'Budget',
  TASK = 'Next task',
  CONTACT = 'Contacts',
  MANAGER = 'Manager',
}

export const API = {
  METHOD: 'GET',
  URL: '/script/all',
};

export enum FormMessages {
  NO_TOKEN = 'You are not logged in, please log-in',
  ERROR_CONNECTION = 'Unable to connect to the server',
  ERROR_UNKNOWN = 'Something went wrong! Please try again.',
}
