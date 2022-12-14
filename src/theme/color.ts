export enum ColorEnum {
  BACKGROUND = 'background',
  TEXT = 'text',
  RED = 'red',
  YELLOW = 'yellow',
  GREEN = 'green',
}

export type ColorType = `${ColorEnum}`;

export const ColorData = {
  [ColorEnum.BACKGROUND]: '#FFFFF4',
  [ColorEnum.TEXT]: '#1B1B1B',
  [ColorEnum.RED]: '#FF5C00',
  [ColorEnum.YELLOW]: '#FFDC00',
  [ColorEnum.GREEN]: '#BBFC1A',
};
