export const BASE_URL = process.env.API_BASE_URL;

export interface HttpResponse {
  statusCode: number;
  message?: string;
  data?: any;
}
