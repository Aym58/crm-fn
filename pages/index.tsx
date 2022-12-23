import { TextElement } from 'src/common/text';
import { Grid } from 'src/common/grid';
import { Link } from 'src/common/link';
import { GetServerSidePropsContext } from 'next';
import { checkAuth } from 'src/lib/auth';

import CircleIcon from 'src/assets/icons/circle.svg';
import SquareIcon from 'src/assets/icons/square.svg';
import StarIcon from 'src/assets/icons/star.svg';
import TriangleIcon from 'src/assets/icons/triangle.svg';
import { MenuItem } from 'src/epic/menu-item';

export default function HomePage() {
  return (
    <Grid size="zone">
      <TextElement size="header" type="bold">
        Apps
      </TextElement>
      <MenuItem to="/lead/table">
        <StarIcon />
        <TextElement size="sub-header" type="semi-bold">
          Lead Table
        </TextElement>
      </MenuItem>
      <MenuItem to="/task">
        <TriangleIcon />
        <TextElement size="sub-header" type="semi-bold">
          Tasks
        </TextElement>
      </MenuItem>
      <MenuItem to="/script/discovery">
        <CircleIcon />
        <TextElement size="sub-header" type="semi-bold">
          Discovery
        </TextElement>
      </MenuItem>
      <MenuItem to="/statistics">
        <SquareIcon />
        <TextElement size="sub-header" type="semi-bold">
          Analizer
        </TextElement>
      </MenuItem>
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
