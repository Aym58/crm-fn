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
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const Elem: React.FC<{
  href: string;
  target?: string;
  children?: ReactNode;
}> = ({ href, children }) => {
  return <StyledLink href={href}>{children}</StyledLink>;
};

const StyledLink = styled(Link)`
  font-family: ${inter.style.fontFamily};
  text-decoration: none;
  cursor: pointer;
`;
