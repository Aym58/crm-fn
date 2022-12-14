import { Header } from 'src/epic/header';
import { LayoutPage } from 'src/common/layout-page';
import { TextElement } from 'src/common/text';
import { TextField } from 'src/common/text-field';
import { Button } from 'src/common/button';

export default function Home() {
  return (
    <>
      <Header menu />
      <LayoutPage>
        <TextElement size="header" type="regular">
          Login
        </TextElement>
        <TextField label="Email" />
        <TextField label="Password" />
        <Button text="Submit" />
      </LayoutPage>
    </>
  );
}
