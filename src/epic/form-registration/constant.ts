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

export const API = {
  TYPE: 'POST',
  URL: `auth/register`,
};

export interface ActionErrorInter {
  error: string;
  message: string;
  statusCode: string;
}

export const REGISTRATION_SUCCESS = 'Registration successful';
