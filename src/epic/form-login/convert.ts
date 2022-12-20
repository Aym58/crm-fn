import {
  FormValues,
  FormValuesInter,
  RequestValues,
  RequestValuesInter,
} from './constant';

export const convertInput = (values: FormValuesInter): RequestValuesInter => {
  const payload = {
    [RequestValues.EMAIL]: values[FormValues.EMAIL].trim(),
    [RequestValues.PASSWORD]: values[FormValues.PASSWORD].trim(),
  };
  return payload;
};
