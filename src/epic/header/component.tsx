import React from 'react';
import { useRouter } from 'next/router';

import { LayoutHeader } from 'src/common/layout-header';
import { Link } from 'src/common/link';

import MenuIcon from 'src/assets/icons/menu.svg';
import CircleIcon from 'src/assets/icons/circle.svg';
import SquareIcon from 'src/assets/icons/square.svg';
import StarIcon from 'src/assets/icons/star.svg';
import TriangleIcon from 'src/assets/icons/triangle.svg';

export const Component: React.FC = () => {
  const path = useRouter().pathname;

  return (
    <LayoutHeader>
      <Link href="/">
        <MenuIcon />
      </Link>
      {path.includes('lead') && <StarIcon />}
      {path.includes('task') && <TriangleIcon />}
      {path.includes('script') && <CircleIcon />}
      {path.includes('statistics') && <SquareIcon />}
    </LayoutHeader>
  );
};
