import { LocalKeys } from './constant';

export const getFromStorage = (key: LocalKeys) => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem(key) || 'null');
  }
};

export const setToStorage = (key: LocalKeys, value: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
