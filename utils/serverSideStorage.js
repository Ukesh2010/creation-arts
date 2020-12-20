import cookies from "next-cookies";

export const getServerSideCookie = (context) => (key) => {
  return cookies(context)[key];
};
