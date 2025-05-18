import Cookies from "cookies-ts";

const cookies = new Cookies();

export function getCookie(cookieKey: string) {
  return cookies.get(cookieKey);
}

export function setCookie(coockieKey: string, token: string) {
  cookies.set(coockieKey, token);
}

export function removeCoockie(coockieKey: string[] | string) {
  if (typeof coockieKey === "string") cookies.remove(coockieKey);
  else for (const key of coockieKey) cookies.remove(key);
}