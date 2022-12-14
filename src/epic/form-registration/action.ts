import { BASE_URL } from 'src/lib/http/constant';
import { convertHttpError, convertHttpResponse } from 'src/lib/http/convert';
import { RequestValuesInter, API } from './constant';
import { HttpError } from 'src/lib/http';

export const action = async (request: RequestValuesInter) => {
  const url = BASE_URL + API.URL;
  try {
    const response = await fetch(url, {
      method: API.METHOD,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });
    const payloadRaw = await response.json();
    const payload = convertHttpResponse(payloadRaw);
    if (!payload.success) {
      throw new HttpError(payloadRaw.statusCode, payloadRaw.message);
    }
    return payload;
  } catch (error: any) {
    return convertHttpError(error);
  }
};
