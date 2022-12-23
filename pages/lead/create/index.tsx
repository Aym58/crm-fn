import React from 'react';
import { GetServerSidePropsContext } from 'next';

import { FormLeadCreate } from 'src/epic/form-lead-create';
import { TextElement } from 'src/common/text';
import { Grid } from 'src/common/grid';
import { checkAuth } from 'src/lib/auth';

export default function LeadCreate() {
  return (
    <Grid size="content">
      <TextElement size="header" type="bold">
        Create Lead
      </TextElement>
      <FormLeadCreate />
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
