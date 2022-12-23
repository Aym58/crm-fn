import { getCookie } from 'cookies-next';
import { OptionsType } from 'cookies-next/lib/types';
import { LocalKeys } from '../local-storage';

export const checkAuth = ({ req, res }: OptionsType): boolean => {
  const cookie = getCookie(LocalKeys.TOKEN, { req, res });
  if (typeof cookie === 'string') {
    return true;
  } else return false;
};

export const getToken = ({ req, res }: OptionsType) => {
  const cookie = getCookie(LocalKeys.TOKEN, { req, res });
  if (typeof cookie === 'string') {
    return JSON.parse(cookie);
  } else return null;
};
