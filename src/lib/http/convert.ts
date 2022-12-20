import { HttpResponse } from './constant';

export const HttpRequest = () => {};

export const convertHttpResponse = ({
  statusCode,
  message,
  data,
}: HttpResponse) => {
  if (statusCode === 200 || statusCode === 201 || statusCode === 202) {
    return { success: true, message, data };
  } else {
    return { success: false };
  }
};

export const convertHttpError = (error: any) => {
  if (error.code) {
    if (error.code === 400) {
      return {
        success: false,
        message: error.message || 'Error: Bad Request (400)',
      };
    }
    if (error.code === 401) {
      return {
        success: false,
        message: error.message || 'Error: Unauthorized (401)',
      };
    }
    if (error.code === 403) {
      return { success: false, message: 'Error: Forbidden (403)' };
    }
    if (error.code === 404) {
      return { success: false, message: 'Error: Not Found (404)' };
    }
    if (error.code === 500) {
      return {
        success: false,
        message: error.message || 'Error: Internal Server Error (500)',
      };
    }
  } else {
    return {
      success: false,
      message:
        error.message === 'Failed to fetch'
          ? 'Error: Cannot connect to Server'
          : error.message || 'Error: Unknown Error',
    };
  }
};
