export enum FormValues {
  EMAIL = 'email',
  PASSWORD = 'password',
}

export type FormValuesType = `${FormValues}`;

export interface FormValuesInter {
  [FormValues.EMAIL]: string;
  [FormValues.PASSWORD]: string;
}

export enum RequestValues {
  EMAIL = 'email',
  PASSWORD = 'password',
}

export type ValuesType = `${RequestValues}`;

export interface RequestValuesInter {
  [RequestValues.EMAIL]: string;
  [RequestValues.PASSWORD]: string;
}

export interface DataInter {
  userId: number;
  token: string;
}

export const API = {
  METHOD: 'POST',
  URL: '/auth/login',
};

export enum FormMessages {
  SUCCESS = 'Login is successful!',
  ERROR_CONNECTION = 'Unable to connect to the server',
  ERROR_UNKNOWN = 'Something went wrong! Please try again.',
}
