import { DataInter } from 'src/epic/lead-table/constant';

interface PayloadInter {
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
  URL: '/lead/all',
};
