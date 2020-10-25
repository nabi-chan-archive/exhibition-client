export const setCookie = (name, value, second) => {
  const expired = new Date(Date.now() + second * 1000);
  
  document.cookie = `${name}=${value}; expires=${expired.toUTCString()};path=/admin;SameSite=None; Secure`
}

export const getCookie = (name) => {
  const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return value ? value[2] : null;
}

export const delCookie = (name) => {
  const date = new Date();
  document.cookie = name + "= " + "; expires=" + date + "; path=/admin";
}
