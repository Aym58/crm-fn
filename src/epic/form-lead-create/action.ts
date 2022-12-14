import { convertHttpError, convertHttpResponse } from 'src/lib/http/convert';
import { RequestValuesInter, API, FormMessages } from './constant';
import { BASE_URL } from 'src/lib/http/constant';
import { HttpError } from 'src/lib/http';
import { getFromStorage, LocalKeys } from 'src/lib/local-storage';

export const action = async (request: RequestValuesInter) => {
  const url = BASE_URL + API.URL;
  try {
    const token = getFromStorage(LocalKeys.TOKEN);

    if (!token) {
      throw new Error(FormMessages.NO_TOKEN);
    }

    const response = await fetch(url, {
      method: API.METHOD,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
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
