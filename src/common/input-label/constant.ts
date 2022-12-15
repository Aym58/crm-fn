export enum SizeEnum {
  HEIGHT = '66px',
  WIDTH = '100%',
}

export enum InputEnum {
  TEXT = 'text',
  EMAIL = 'email',
  PASSWORD = 'password',
}

export type InputType = `${InputEnum}`;

export const FontSizeData = {
  [InputEnum.TEXT]: 'text',
  [InputEnum.EMAIL]: 'email',
  [InputEnum.PASSWORD]: 'password',
};
