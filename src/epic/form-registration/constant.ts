export enum FormValues {
  NAME = 'name',
  EMAIL = 'email',
  PASSWORD = 'password',
  PASSWORD_REP = 'passwordRepeat',
}

export type FormValuesType = `${FormValues}`;

export interface FormValuesInter {
  [FormValues.NAME]: string;
  [FormValues.EMAIL]: string;
  [FormValues.PASSWORD]: string;
  [FormValues.PASSWORD_REP]: string;
}

export enum RequestValues {
  NAME = 'name',
  EMAIL = 'email',
  PASSWORD = 'password',
}

export type RequestValuesType = `${RequestValues}`;

export interface RequestValuesInter {
  [RequestValues.NAME]: string;
  [RequestValues.EMAIL]: string;
  [RequestValues.PASSWORD]: string;
}

export const API = {
  METHOD: 'POST',
  URL: '/auth/register',
};

export interface ActionErrorInter {
  error: string;
  message: string;
  statusCode: string;
}

export enum FormMessages {
  SUCCESS = 'Registration is successful! Now please log-in.',
  ERROR_CONNECTION = 'Unable to connect to the server',
  ERROR_UNKNOWN = 'Something went wrong! Please try again.',
}
