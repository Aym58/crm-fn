import {
  FormValues,
  FormValuesInter,
  RequestValues,
  RequestValuesInter,
} from './constant';

export const convertInput = (values: FormValuesInter): RequestValuesInter => {
  const payload = {
    [RequestValues.NAME]: values[FormValues.NAME].trim(),
    [RequestValues.SOURCE]: values[FormValues.SOURCE].trim().toLowerCase(),
    [RequestValues.BUDGET]: values[FormValues.BUDGET].trim(),
    [RequestValues.NEXT_TASK]: values[FormValues.NEXT_TASK].trim(),
    [RequestValues.CONTACT]: values[FormValues.CONTACT].trim(),
  };
  return payload;
};
