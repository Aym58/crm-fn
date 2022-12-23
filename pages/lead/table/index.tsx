import React from 'react';
import type { GetServerSidePropsContext } from 'next';

import { Grid } from 'src/common/grid';
import { TextElement } from 'src/common/text';
import { BASE_URL } from 'src/lib/http/constant';
import { convertHttpError, convertHttpResponse, HttpError } from 'src/lib/http';
import { ScriptList } from 'src/epic/script-list';
import { API, PropsInter } from './constant';
import { getToken } from 'src/lib/auth';
import { AddButton } from 'src/epic/add-button';

export default function ScriptCreate({ payload }: PropsInter) {
  const { success, data, message } = payload;
  if (success && data) {
    return (
      <Grid size="content">
        <TextElement size="header" type="bold">
          Lead Table
        </TextElement>
        <AddButton to="/lead/create" />
        <ScriptList data={data} />
      </Grid>
    );
  }

  if (!success) {
    return (
      <Grid size="content">
        <TextElement size="header" type="bold">
          Discovery
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
}: GetServerSidePropsContext) {
  const url = BASE_URL + API.URL;
  const token = getToken({ req, res });
  if (!token)
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };

  try {
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
    return { props: { error } };
  }
}
