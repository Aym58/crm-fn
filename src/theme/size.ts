export const MAX_WIDTH = '1200px';

export const Spacing = (x: number): string => `${x * 4}px`;

export enum FontSizeEnum {
  HEADER = 'header',
  SUB_HEADER = 'sub-header',
  REGULAR = 'regular',
}

export type FontSizeType = `${FontSizeEnum}`;

export const FontSizeData = {
  [FontSizeEnum.HEADER]: '22px',
  [FontSizeEnum.SUB_HEADER]: '14px',
  [FontSizeEnum.REGULAR]: '12px',
};

export enum PaddingSizeEnum {
  ICON = 'icon',
  ELEMENT = 'element',
  BLOCK = 'block',
  SECTION = 'section',
  CONTENT = 'content',
  ZONE = 'zone',
}

export type PaddingSizeType = `${PaddingSizeEnum}`;

export const PaddingSizeData = {
  [PaddingSizeEnum.ICON]: '4px',
  [PaddingSizeEnum.ELEMENT]: '8px',
  [PaddingSizeEnum.BLOCK]: '12px',
  [PaddingSizeEnum.SECTION]: '16px',
  [PaddingSizeEnum.CONTENT]: '24px',
  [PaddingSizeEnum.ZONE]: '32px',
};

export enum FontWeightEnum {
  BOLD = 'bold',
  SEMI_BOLD = 'semi-bold',
  MEDIUM = 'medium',
  REGULAR = 'regular',
}

export type FontWeightType = `${FontWeightEnum}`;

export const FontWeightData = {
  [FontWeightEnum.BOLD]: 700,
  [FontWeightEnum.SEMI_BOLD]: 600,
  [FontWeightEnum.MEDIUM]: 500,
  [FontWeightEnum.REGULAR]: 400,
};
