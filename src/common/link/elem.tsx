import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { Inter } from '@next/font/google';

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
  color: inherit;
  font-family: ${inter.style.fontFamily};
  text-decoration: none;
  cursor: pointer;
`;
