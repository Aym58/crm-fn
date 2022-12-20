import { InputText } from 'src/common/input-text';

import React, { useState } from 'react';
import { FormikValues, useFormik } from 'formik';

import { Button } from 'src/common/button';
import { InputLabel } from 'src/common/input-label';
import { Grid } from 'src/common/grid';
import { Form } from 'src/common/form';
import { FormMessages, SourceNames } from './constant';
import { schemaLogin, schemaScript } from 'src/lib/validation';
import { Message } from 'src/common/message';
import { action } from './action';
import { InputSelect } from 'src/common/input-select';
import { InputSelectOption } from 'src/common/input-select-option';
import { TextElement } from 'src/common/text';

export const Component = () => {
  const [message, setMessage] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  return (
    <Grid size="block">
      <Grid size="element">
        <TextElement size="sub-header" type="semi-bold">
          {SourceNames.UPWORK}
        </TextElement>
      </Grid>
      <Grid size="element">
        <TextElement size="sub-header" type="semi-bold">
          {SourceNames.TELEGRAM}
        </TextElement>
      </Grid>
      <Grid size="element">
        <TextElement size="sub-header" type="semi-bold">
          {SourceNames.LINKEDIN}
        </TextElement>
      </Grid>
    </Grid>
  );
};
