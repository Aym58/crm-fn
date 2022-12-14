import { Header } from 'src/epic/header';
import { LayoutPage } from 'src/common/layout-page';
import { TextElement } from 'src/common/text';

export default function Home() {
  return (
    <>
      <Header menu />
      <LayoutPage>
        <TextElement size="header" type="regular">
          Registration
        </TextElement>
      </LayoutPage>
    </>
  );
}
