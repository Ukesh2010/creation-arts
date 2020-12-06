import jwt from "jsonwebtoken";

export default (token) => {
  if (token) {
    const data = jwt.decode(token);
    if (!Boolean(data)) {
      return false;
    }
    const expDate = new Date(data.exp * 1000);
    const currentDate = new Date();

    return expDate - currentDate > 0;
  }

  return false;
};
