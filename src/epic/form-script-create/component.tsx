import { InputText } from 'src/common/input-text';

import React, { useState } from 'react';
import { FormikValues, useFormik } from 'formik';

import { Button } from 'src/common/button';
import { InputLabel } from 'src/common/input-label';
import { Grid } from 'src/common/grid';
import { Form } from 'src/common/form';
import {
  FormMessages,
  FormValues,
  FormValuesInter,
  FormValuesType,
  SourceValues,
} from './constant';
import { schemaLogin, schemaScript } from 'src/lib/validation';
import { Message } from 'src/common/message';
import { convertInput } from './convert';
import { action } from './action';
import { InputSelect } from 'src/common/input-select';
import { InputSelectOption } from 'src/common/input-select-option';

export const Component = () => {
  const [message, setMessage] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const formik: FormikValues = useFormik({
    initialValues: {
      [FormValues.NAME]: '',
      [FormValues.SOURCE]: '',
      [FormValues.LINK]: '',
    },
    validationSchema: schemaScript,
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
      } else {
        setIsError(true);
        setMessage(response?.message || FormMessages.ERROR_UNKNOWN);
      }
    },
  });

  const { touched, errors, handleSubmit, handleChange, values }: FormikValues =
    formik;

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
              labelFor={FormValues.NAME}
              label={error(FormValues.NAME) ? errors[FormValues.NAME] : 'Name'}
              error={error(FormValues.NAME)}
            />
            <InputText
              name={FormValues.NAME}
              type="text"
              onChange={handleChange}
            />
          </Grid>

          <Grid size="element">
            <InputLabel
              labelFor={FormValues.SOURCE}
              label={
                error(FormValues.SOURCE) ? errors[FormValues.SOURCE] : 'Source'
              }
              error={error(FormValues.SOURCE)}
            />
            <InputSelect
              name={FormValues.SOURCE}
              value={values[FormValues.SOURCE]}
              type="text"
              onChange={handleChange}
            >
              <InputSelectOption value={SourceValues.LINKEDIN}>
                {SourceValues.LINKEDIN}
              </InputSelectOption>
              <InputSelectOption value={SourceValues.TELEGRAM}>
                {SourceValues.TELEGRAM}
              </InputSelectOption>
              <InputSelectOption value={SourceValues.UPWORK}>
                {SourceValues.UPWORK}
              </InputSelectOption>
            </InputSelect>
          </Grid>

          <Grid size="element">
            <InputLabel
              labelFor={FormValues.LINK}
              label={error(FormValues.LINK) ? errors[FormValues.LINK] : 'Link'}
              error={error(FormValues.LINK)}
            />
            <InputText
              name={FormValues.LINK}
              type="text"
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
