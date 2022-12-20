import { customErrorFactory } from 'ts-custom-error';

export const HttpError = customErrorFactory(function HttpError(
  code: number,
  message = '',
) {
  this.code = code;
  this.message = message;
});
