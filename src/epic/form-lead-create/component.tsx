import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { FormikValues, useFormik } from 'formik';

import { InputText } from 'src/common/input-text';
import { Button } from 'src/common/button';
import { InputLabel } from 'src/common/input-label';
import { Grid } from 'src/common/grid';
import { Form } from 'src/common/form';
import { schemaLead } from 'src/lib/validation';
import { Message } from 'src/common/message';
import { InputSelect } from 'src/common/input-select';
import { InputSelectOption } from 'src/common/input-select-option';

import { convertInput } from './convert';
import { action } from './action';
import {
  BudgetValues,
  FormMessages,
  FormValues,
  FormValuesInter,
  FormValuesType,
  SourceValues,
  TaskValues,
  TaskValuesData,
} from './constant';

export const Component = () => {
  const [message, setMessage] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const route = useRouter();

  const formik: FormikValues = useFormik({
    initialValues: {
      [FormValues.NAME]: '',
      [FormValues.SOURCE]: '',
      [FormValues.BUDGET]: '',
      [FormValues.NEXT_TASK]: '',
      [FormValues.CONTACT]: '',
    },
    validationSchema: schemaLead,
    onSubmit: async (values: FormValuesInter, { resetForm }) => {
      setIsError(false);
      setMessage('');
      setIsLoading(true);
      const payload = convertInput(values);
      const response = await action(payload);
      setIsLoading(false);
      if (response?.success) {
        setMessage(FormMessages.SUCCESS);
        resetForm();
        route.push('/lead/table');
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
              labelFor={FormValues.BUDGET}
              label={
                error(FormValues.BUDGET) ? errors[FormValues.BUDGET] : 'Budget'
              }
              error={error(FormValues.BUDGET)}
            />
            <InputSelect
              name={FormValues.BUDGET}
              value={values[FormValues.BUDGET]}
              type="text"
              onChange={handleChange}
            >
              <InputSelectOption value={BudgetValues.LOW}>
                {BudgetValues.LOW}
              </InputSelectOption>
              <InputSelectOption value={BudgetValues.MID}>
                {BudgetValues.MID}
              </InputSelectOption>
              <InputSelectOption value={BudgetValues.MID}>
                {BudgetValues.HIGH}
              </InputSelectOption>
            </InputSelect>
          </Grid>

          <Grid size="element">
            <InputLabel
              labelFor={FormValues.NEXT_TASK}
              label={
                error(FormValues.NEXT_TASK)
                  ? errors[FormValues.NEXT_TASK]
                  : 'Next Task'
              }
              error={error(FormValues.NEXT_TASK)}
            />
            <InputSelect
              name={FormValues.NEXT_TASK}
              value={values[FormValues.NEXT_TASK]}
              type="text"
              onChange={handleChange}
            >
              <InputSelectOption value={TaskValues.BID}>
                {TaskValuesData[TaskValues.BID]}
              </InputSelectOption>
              <InputSelectOption value={TaskValues.INVITE}>
                {TaskValuesData[TaskValues.INVITE]}
              </InputSelectOption>
              <InputSelectOption value={TaskValues.CALL}>
                {TaskValuesData[TaskValues.CALL]}
              </InputSelectOption>
              <InputSelectOption value={TaskValues.OFFER}>
                {TaskValuesData[TaskValues.OFFER]}
              </InputSelectOption>
              <InputSelectOption value={TaskValues.CLOSE_DEAL}>
                {TaskValuesData[TaskValues.CLOSE_DEAL]}
              </InputSelectOption>
            </InputSelect>
          </Grid>

          <Grid size="element">
            <InputLabel
              labelFor={FormValues.CONTACT}
              label={
                error(FormValues.CONTACT)
                  ? errors[FormValues.CONTACT]
                  : 'Contact'
              }
              error={error(FormValues.CONTACT)}
            />
            <InputText
              name={FormValues.CONTACT}
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
