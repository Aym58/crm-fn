import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { PaddingSizeData, PaddingSizeEnum } from 'src/theme';
import Circle from 'src/assets/large-icons/circle.svg';
import Triangle from 'src/assets/large-icons/triangle.svg';
import Star from 'src/assets/large-icons/star.svg';
import Square from 'src/assets/large-icons/square.svg';

import { FigureEnum, FIGURE_ARR } from './constant';

export const Elem: React.FC<{ delay: number }> = ({ delay }) => {
  const [figure, setFigure] = useState(0);
  useEffect(() => {
    if (figure === 4) setFigure(0);
    setTimeout(() => {
      setFigure(figure + 1);
    }, delay);
  }, [figure, delay]);

  return (
    <Container>
      {FIGURE_ARR[figure] === FigureEnum.TRIANGLE && <Triangle />}
      {FIGURE_ARR[figure] === FigureEnum.CIRCLE && <Circle />}
      {FIGURE_ARR[figure] === FigureEnum.STAR && <Star />}
      {FIGURE_ARR[figure] === FigureEnum.SQUARE && <Square />}
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${PaddingSizeData[PaddingSizeEnum.ELEMENT]} auto;
  width: 160px;
  height: 160px;
`;
