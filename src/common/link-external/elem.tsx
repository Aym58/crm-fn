import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { Inter } from '@next/font/google';

import {
  ColorData,
  ColorEnum,
  ColorType,
  FontSizeData,
  FontSizeEnum,
  FontSizeType,
  FontWeightData,
  FontWeightEnum,
  FontWeightType,
} from 'src/theme';

const inter = Inter({ subsets: ['latin'] });

export const Elem: React.FC<{
  href: string;
  target?: string;
  color?: ColorType;
  type?: FontWeightType;
  size?: FontSizeType;
  spacing?: string;
  children?: ReactNode;
}> = ({ href, target = '_blank', children, color, type, size, spacing }) => {
  let prefix = '';
  if (!href.includes('https://') && !href.includes('http://')) {
    prefix = 'https://';
  }
  return (
    <Link
      href={prefix + href}
      rel="external"
      target={target}
      color={color}
      size={size}
      spacing={spacing}
      type={type}
    >
      {children}
    </Link>
  );
};

const Link = styled.a<{
  size?: FontSizeType;
  spacing?: string;
  color?: ColorType;
  type?: FontWeightType;
  underline?: boolean;
  oneLine?: boolean;
}>`
  font-family: ${inter.style.fontFamily};
  text-decoration: none;
  cursor: pointer;
  ${({
    size = FontSizeEnum.REGULAR,
    color = ColorEnum.TEXT,
    type = FontWeightEnum.REGULAR,
    spacing,
  }) => css`
    font-size: ${spacing || FontSizeData[size]};
    font-weight: ${FontWeightData[type]};
    color: ${ColorData[color]};
  `}
`;
