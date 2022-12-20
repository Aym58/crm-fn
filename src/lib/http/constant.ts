export const BASE_URL = 'http://localhost:4000';

export interface HttpResponse {
  statusCode: number;
  message?: string;
  data?: any;
}
