import { LocalKeys } from './constant';
import { setCookie, getCookie } from 'cookies-next';

export const getFromStorage = (key: LocalKeys) => {
  const cookie = getCookie(key);
  if (typeof cookie === 'string') {
    return JSON.parse(cookie);
  } else return null;
};

export const setToStorage = (key: LocalKeys, value: string) => {
  setCookie(key, value);
};
