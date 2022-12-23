export interface DataInter {
  id: number;
  name: string;
  source: SourceType;
  link: string;
  user: { email: string };
}

export interface PropsInter {
  data: DataInter[];
}

export enum SourceEnum {
  UPWORK = 'upwork',
  TELEGRAM = 'telegram',
  LINKEDIN = 'linkedin',
}

export type SourceType = `${SourceEnum}`;

export const SourceData = {
  [SourceEnum.UPWORK]: 'Upwork',
  [SourceEnum.TELEGRAM]: 'Telegram',
  [SourceEnum.LINKEDIN]: 'Linkedin',
};

export const API = {
  METHOD: 'GET',
  URL: '/script/all',
};

export enum FormMessages {
  NO_TOKEN = 'You are not logged in, please log-in',
  ERROR_CONNECTION = 'Unable to connect to the server',
  ERROR_UNKNOWN = 'Something went wrong! Please try again.',
}
