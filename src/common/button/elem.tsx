import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { ButtonBase } from '@mui/material';

import { TextElement } from '../text';
import { FontSizeType, Spacing } from 'src/theme';
import { ColorEnum, ColorData, ColorType } from 'src/theme';
import { ButtonSize } from './constant';

export const Elem: React.FC<{
  children?: ReactNode;
  text?: string;
  textColor?: ColorType;
  textSize?: FontSizeType;
  disabled?: boolean;
  onClick?: Function;
  backgroundColor?: ColorType;
}> = ({
  text,
  textColor = ColorEnum.TEXT,
  textSize = Spacing(4.5),
  onClick,
  backgroundColor,
  disabled = false,
}) => {
  const handleClick = (e: any) => {
    if (onClick) onClick(e);
  };
  return (
    <Container
      onClick={handleClick}
      background={backgroundColor}
      disabled={disabled}
    >
      <TextElement color={textColor} spacing={textSize} type="bold">
        {text}
      </TextElement>
    </Container>
  );
};

const Container = styled(ButtonBase)<{
  background?: ColorType;
}>`
  cursor: pointer;
  border: none;
  border-radius: 0;
  height: ${ButtonSize.HEIGHT};
  width: ${ButtonSize.WIDTH};

  ${({ background = ColorEnum.GREEN }) => css`
    background: ${ColorData[background]};
  `}
`;
