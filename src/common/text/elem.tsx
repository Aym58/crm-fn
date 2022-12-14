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
  tid?: string;
  tvalue?: object;
  color?: ColorType;
  type?: FontWeightType;
  size?: FontSizeType;
  spacing?: string;
  children?: ReactNode;
  lineHeight?: boolean;
  underline?: boolean;
  oneLine?: boolean;
  inline?: boolean;
  className?: string;
}> = ({
  children,
  color,
  type,
  size,
  spacing,
  lineHeight,
  underline,
  className,
  oneLine,
}) => {
  return (
    <Text
      color={color}
      size={size}
      spacing={spacing}
      type={type}
      lineHeight={lineHeight}
      underline={underline}
      className={className}
      oneLine={oneLine}
    >
      {children}
    </Text>
  );
};

const Text = styled.span<{
  size?: FontSizeType;
  spacing?: string;
  color?: ColorType;
  type?: FontWeightType;
  lineHeight?: boolean;
  underline?: boolean;
  oneLine?: boolean;
}>`
  font-family: ${inter.style.fontFamily};

  ${({
    size = FontSizeEnum.REGULAR,
    color = ColorEnum.TEXT,
    type = FontWeightEnum.REGULAR,
    lineHeight = false,
    underline = false,
    oneLine = false,
    spacing,
  }) => css`
    font-size: ${spacing || FontSizeData[size]};
    font-weight: ${FontWeightData[type]};
    color: ${ColorData[color]};
    text-decoration: ${underline ? 'underline' : 'none'};
    line-height: ${lineHeight ? '1.5em' : '1.1em'};
    display: ${lineHeight ? 'inline' : 'block'};
    overflow: ${oneLine ? 'hidden' : 'visible'};
    text-overflow: ${oneLine ? 'ellipsis' : 'clip'};
    white-space: ${oneLine ? 'nowrap' : 'pre-line'};
    max-width: ${oneLine ? '220px' : '100%'};
  `}
`;
