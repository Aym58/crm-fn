import { InputText } from 'src/common/input-text';

import { Button } from 'src/common/button';
import { InputLabel } from 'src/common/input-label';
import { Grid } from 'src/common/grid';
import React from 'react';
import { Form } from 'src/common/form';
import { FormValues, FormValuesInter, FormValuesType } from './constant';
import { FormikValues, useFormik } from 'formik';
import { validateInput } from 'src/lib/validation';

export const Component = () => {
  const formik: FormikValues = useFormik({
    initialValues: {
      [FormValues.NAME]: '',
      [FormValues.EMAIL]: '',
      [FormValues.PASSWORD]: '',
      [FormValues.PASSWORD_REP]: '',
    },
    validationSchema: validateInput,
    onSubmit: async (values: FormValuesInter) => {
      console.log(values);
    },
  });

  const { touched, errors, handleSubmit, handleChange }: FormikValues = formik;

  const isError = (field: FormValuesType): boolean =>
    touched[field] && Boolean(errors[field]);

  return (
    <Form onSubmit={handleSubmit}>
      <Grid size="content">
        <Grid size="element">
          <Grid size="element">
            <InputLabel
              labelFor={FormValues.NAME}
              label={
                isError(FormValues.NAME) ? errors[FormValues.NAME] : 'Name'
              }
              error={isError(FormValues.NAME)}
            />
            <InputText
              name={FormValues.NAME}
              type="text"
              onChange={handleChange}
            />
          </Grid>

          <Grid size="element">
            <InputLabel
              labelFor={FormValues.EMAIL}
              label={
                isError(FormValues.EMAIL) ? errors[FormValues.EMAIL] : 'Email'
              }
              error={isError(FormValues.EMAIL)}
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
                isError(FormValues.PASSWORD)
                  ? errors[FormValues.PASSWORD]
                  : 'Password'
              }
              error={isError(FormValues.PASSWORD)}
            />
            <InputText
              name={FormValues.PASSWORD}
              type="password"
              onChange={handleChange}
            />
          </Grid>

          <Grid size="element">
            <InputLabel
              labelFor={FormValues.PASSWORD_REP}
              label={
                isError(FormValues.PASSWORD_REP)
                  ? errors[FormValues.PASSWORD_REP]
                  : 'Repeat password'
              }
              error={isError(FormValues.PASSWORD_REP)}
            />
            <InputText
              name={FormValues.PASSWORD_REP}
              type="password"
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Button text="Submit" type="submit" />
      </Grid>
    </Form>
  );
};
