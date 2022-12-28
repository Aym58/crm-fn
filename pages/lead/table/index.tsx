import React from 'react';
import type { GetServerSidePropsContext } from 'next';

import { Grid } from 'src/common/grid';
import { TextElement } from 'src/common/text';
import { BASE_URL } from 'src/lib/http/constant';
import { convertHttpError, convertHttpResponse, HttpError } from 'src/lib/http';
import { getToken } from 'src/lib/auth';
import { AddButton } from 'src/epic/add-button';
import { LeadTable } from 'src/epic/lead-table';

import { API, PropsInter } from './constant';

export default function ScriptCreate({ payload }: PropsInter) {
  const { success, data, message } = payload;
  if (success && data) {
    return (
      <React.Fragment>
        <AddButton to="/lead/create" />
        <Grid size="content">
          <TextElement size="header" type="bold">
            Lead Table
          </TextElement>
          <LeadTable data={data} />
        </Grid>
      </React.Fragment>
    );
  }

  if (!success) {
    return (
      <Grid size="content">
        <TextElement size="header" type="bold">
          Lead Table
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
