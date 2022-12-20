export enum SourceValues {
  UPWORK = 'Upwork',
  TELEGRAM = 'Telegram',
  LINKEDIN = 'Linkedin',
}

export enum FormValues {
  NAME = 'name',
  SOURCE = 'source',
  LINK = 'link',
}

export type FormValuesType = `${FormValues}`;

export interface FormValuesInter {
  [FormValues.NAME]: string;
  [FormValues.SOURCE]: string;
  [FormValues.LINK]: string;
}

export enum RequestValues {
  NAME = 'name',
  SOURCE = 'source',
  LINK = 'link',
}

export type RequestValuesType = `${RequestValues}`;

export interface RequestValuesInter {
  [RequestValues.NAME]: string;
  [RequestValues.SOURCE]: string;
  [RequestValues.LINK]: string;
}

export const API = {
  METHOD: 'POST',
  URL: '/script/create',
};

export enum FormMessages {
  SUCCESS = 'New script created',
  NO_TOKEN = 'You are not logged in, please log-in',
  ERROR_CONNECTION = 'Unable to connect to the server',
  ERROR_UNKNOWN = 'Something went wrong! Please try again.',
}
