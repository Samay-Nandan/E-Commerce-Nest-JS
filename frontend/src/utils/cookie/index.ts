import JsCookies from 'js-cookie';
import { Cookies } from '@src/constant';

const { admin, user } = Cookies;

const JsCookiesConfig = { path: '/' };

const getCookie = (name: string) => JSON.parse(JsCookies.get(name) ?? '{}');

const setCookie = (name: string, payload: Record<string, unknown>) =>
  JsCookies.set(name, JSON.stringify(payload), JsCookiesConfig);

const removeCookie = (name: string) => JsCookies.remove(name, JsCookiesConfig);

export const getAdminCookie = () => getCookie(admin);

export const setAdminCookie = (payload: Record<string, unknown>) =>
  setCookie(admin, payload);

export const removeAdminCookie = () => removeCookie(admin);

export const getUserCookie = () => getCookie(user);

export const setUserCookie = (payload: Record<string, unknown>) =>
  setCookie(user, payload);

export const removeUserCookie = () => removeCookie(user);
