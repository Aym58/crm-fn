import { Header } from 'src/epic/header';
import { LayoutPage } from 'src/common/layout-page';
import { TextElement } from 'src/common/text';
import { FormRegistration } from 'src/epic/form-registration';
import React from 'react';

export default function Home() {
  return (
    <React.Fragment>
      <Header menu />
      <LayoutPage>
        <FormRegistration />
      </LayoutPage>
    </React.Fragment>
  );
}
