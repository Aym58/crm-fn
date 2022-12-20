import {
  FormValues,
  FormValuesInter,
  RequestValuesInter,
  RequestValues,
} from './constant';

export const convertInput = (values: FormValuesInter): RequestValuesInter => {
  const Request = {
    [RequestValues.NAME]: values[FormValues.NAME].trim(),
    [RequestValues.EMAIL]: values[FormValues.EMAIL].trim(),
    [RequestValues.PASSWORD]: values[FormValues.PASSWORD].trim(),
  };
  return Request;
};
