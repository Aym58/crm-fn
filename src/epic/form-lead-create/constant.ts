export enum SourceValues {
  UPWORK = 'Upwork',
  TELEGRAM = 'Telegram',
  LINKEDIN = 'Linkedin',
}

export enum BudgetValues {
  LOW = 'up to 20k',
  MID = '21-30k',
  HIGH = '31+k',
}

export enum TaskValues {
  BID = 'bid',
  INVITE = 'invite',
  CALL = 'call',
  OFFER = 'offer',
  CLOSE_DEAL = 'close',
}

export const TaskValuesData = {
  [TaskValues.BID]: 'Bid',
  [TaskValues.INVITE]: 'Invite to First Call',
  [TaskValues.CALL]: 'Schedule First Call',
  [TaskValues.OFFER]: 'Make Offer',
  [TaskValues.CLOSE_DEAL]: 'Close Deal',
};

export enum FormValues {
  NAME = 'name',
  SOURCE = 'source',
  BUDGET = 'budget',
  NEXT_TASK = 'nextTask',
  CONTACT = 'contact',
}

export type FormValuesType = `${FormValues}`;

export interface FormValuesInter {
  [FormValues.NAME]: string;
  [FormValues.SOURCE]: string;
  [FormValues.BUDGET]: string;
  [FormValues.NEXT_TASK]: string;
  [FormValues.CONTACT]: string;
}

export enum RequestValues {
  NAME = 'name',
  SOURCE = 'source',
  BUDGET = 'budget',
  NEXT_TASK = 'task',
  CONTACT = 'contact',
}

export type RequestValuesType = `${RequestValues}`;

export interface RequestValuesInter {
  [RequestValues.NAME]: string;
  [RequestValues.SOURCE]: string;
  [RequestValues.BUDGET]: string;
  [RequestValues.NEXT_TASK]: string;
  [RequestValues.CONTACT]: string;
}

export const API = {
  METHOD: 'POST',
  URL: '/lead/create',
};

export enum FormMessages {
  SUCCESS = 'New lead created',
  NO_TOKEN = 'You are not logged in, please log-in',
  ERROR_CONNECTION = 'Unable to connect to the server',
  ERROR_UNKNOWN = 'Something went wrong! Please try again.',
}
