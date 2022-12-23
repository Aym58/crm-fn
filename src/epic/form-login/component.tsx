import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FormikValues, useFormik } from 'formik';

import { InputText } from 'src/common/input-text';
import { Button } from 'src/common/button';
import { InputLabel } from 'src/common/input-label';
import { Grid } from 'src/common/grid';
import { Form } from 'src/common/form';
import {
  FormMessages,
  FormValues,
  FormValuesInter,
  FormValuesType,
} from './constant';
import { schemaLogin } from 'src/lib/validation';
import { Message } from 'src/common/message';
import { convertInput } from './convert';
import { action } from './action';

export const Component = () => {
  const [message, setMessage] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const router = useRouter();

  const formik: FormikValues = useFormik({
    initialValues: {
      [FormValues.EMAIL]: '',
      [FormValues.PASSWORD]: '',
    },
    validationSchema: schemaLogin,
    onSubmit: async (values: FormValuesInter) => {
      setIsError(false);
      setIsSuccess(false);
      setMessage('');
      setIsLoading(true);
      const payload = convertInput(values);
      const response = await action(payload);
      setIsLoading(false);
      if (response?.success) {
        setIsSuccess(true);
        setMessage(FormMessages.SUCCESS);
        router.push('/');
      } else {
        setIsError(true);
        setMessage(response?.message || FormMessages.ERROR_UNKNOWN);
      }
    },
  });

  const { touched, errors, handleSubmit, handleChange }: FormikValues = formik;

  const error = (field: FormValuesType): boolean =>
    touched[field] && Boolean(errors[field]);

  const isFormDisabled = (): boolean => {
    if (!formik.dirty || isLoading) {
      return true;
    } else return false;
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid size="content">
        <Grid size="section">
          <Grid size="element">
            <InputLabel
              labelFor={FormValues.EMAIL}
              label={
                error(FormValues.EMAIL) ? errors[FormValues.EMAIL] : 'Email'
              }
              error={error(FormValues.EMAIL)}
            />
            <InputText
              name={FormValues.EMAIL}
              type="email"
              onChange={handleChange}
            />
          </Grid>

          <Grid size="element">
            <InputLabel
              labelFor={FormValues.PASSWORD}
              label={
                error(FormValues.PASSWORD)
                  ? errors[FormValues.PASSWORD]
                  : 'Password'
              }
              error={error(FormValues.PASSWORD)}
            />
            <InputText
              name={FormValues.PASSWORD}
              type="password"
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Message text={message} error={isError} />
        <Button text="Submit" type="submit" disabled={isFormDisabled()} />
      </Grid>
    </Form>
  );
};
