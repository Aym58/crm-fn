export interface DataInter {
  id: number;
  name: string;
  source: DataSourceValues;
  link: string;
  user: { email: string };
}

export interface PayloadInter {
  success: boolean;
  message?: string;
  data?: DataInter[];
}

export interface PropsInter {
  payload: PayloadInter;
}

export enum DataSourceValues {
  UPWORK = 'upwork',
  TELEGRAM = 'telegram',
  LINKEDIN = 'linkedin',
}

export const API = {
  METHOD: 'GET',
  URL: '/script/all',
};
