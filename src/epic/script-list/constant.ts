export interface DataInter {
  id: number;
  name: string;
  source: DataSourceValues;
  link: string;
  user: { email: string };
}

export enum DataSourceValues {
  UPWORK = 'upwork',
  TELEGRAM = 'telegram',
  LINKEDIN = 'linkedin',
}

export enum SourceNames {
  UPWORK = 'Upwork',
  TELEGRAM = 'Telegram',
  LINKEDIN = 'Linkedin',
}

export const API = {
  METHOD: 'GET',
  URL: '/script/all',
};

export enum FormMessages {
  NO_TOKEN = 'You are not logged in, please log-in',
  ERROR_CONNECTION = 'Unable to connect to the server',
  ERROR_UNKNOWN = 'Something went wrong! Please try again.',
}
