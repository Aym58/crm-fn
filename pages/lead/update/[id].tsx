import React from 'react';
import type { GetServerSidePropsContext } from 'next';

import { Grid } from 'src/common/grid';
import { TextElement } from 'src/common/text';
import { BASE_URL } from 'src/lib/http/constant';
import { convertHttpError, convertHttpResponse, HttpError } from 'src/lib/http';
import { getToken } from 'src/lib/auth';
import { FormChangeTasks } from 'src/epic/form-change-tasks';

import { API, PropsInter } from 'src/constant/lead-update';

export default function ScriptCreate({ payload }: PropsInter) {
  const { success, data, message } = payload;
  if (success && data) {
    return (
      <React.Fragment>
        <Grid size="content">
          <TextElement size="header" type="bold">
            Change Tasks
          </TextElement>
          <FormChangeTasks data={data} />
        </Grid>
      </React.Fragment>
    );
  }

  if (!success) {
    return (
      <Grid size="content">
        <TextElement size="header" type="bold">
          Change Tasks
        </TextElement>
        <TextElement size="sub-header" type="semi-bold">
          {message}
        </TextElement>
      </Grid>
    );
  }
}

export async function getServerSideProps({
  req,
  res,
  params,
}: GetServerSidePropsContext) {
  const token = getToken({ req, res });
  if (!token)
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };

  try {
    const id = params?.id;
    const url = BASE_URL + API.URL + `${id}`;
    const response = await fetch(url, {
      method: API.METHOD,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const payloadRaw = await response.json();
    const payload = convertHttpResponse(payloadRaw);

    if (!payload.success) {
      throw new HttpError(payloadRaw.statusCode, payloadRaw.message);
    }

    return { props: { payload } };
  } catch (err: any) {
    const error = convertHttpError(err);
    return { props: { payload: error } };
  }
}
