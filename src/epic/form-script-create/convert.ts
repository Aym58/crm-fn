import {
  FormValues,
  FormValuesInter,
  RequestValues,
  RequestValuesInter,
} from './constant';

export const convertInput = (values: FormValuesInter): RequestValuesInter => {
  const payload = {
    [FormValues.NAME]: values[FormValues.NAME].trim(),
    [FormValues.LINK]: values[FormValues.LINK].trim(),
    [FormValues.SOURCE]: values[FormValues.SOURCE].trim().toLowerCase(),
  };
  return payload;
};
