export const setCookie = (name, value, day) => {
  document.cookie = `${name}=${value}; expires=${day};path=/admin;SameSite=None; Secure`
}

export const getCookie = (name) => {
  const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return value ? value[2] : null;
}

export const delCookie = (name) => {
  const date = new Date();
  document.cookie = name + "= " + "; expires=" + date + "; path=/admin";
}
