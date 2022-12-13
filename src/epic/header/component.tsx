import React from 'react';

import { LayoutHeader } from 'src/common/layout-header';

import { IconEnum } from './constant';

export const Component: React.FC<{
  menu?: boolean;
  icon?: IconEnum;
}> = ({ menu = false, icon }) => {
  return (
    <LayoutHeader>
      {menu && <h1>Menu</h1>}
      {icon && <h1>{icon}</h1>}
    </LayoutHeader>
  );
};
