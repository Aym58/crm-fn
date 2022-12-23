import React from 'react';
import { GetServerSidePropsContext } from 'next';

import { FormScriptCreate } from 'src/epic/form-script-create';
import { Grid } from 'src/common/grid';
import { TextElement } from 'src/common/text';
import { checkAuth } from 'src/lib/auth';

export default function ScriptCreate() {
  return (
    <Grid size="content">
      <TextElement size="header" type="bold">
        Create Script
      </TextElement>
      <FormScriptCreate />
    </Grid>
  );
}

export async function getServerSideProps({
  req,
  res,
}: GetServerSidePropsContext) {
  return checkAuth({ req, res })
    ? {
        props: {
          success: true,
        },
      }
    : {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
}
