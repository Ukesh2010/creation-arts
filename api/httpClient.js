import axios from "axios";

const config = {
  baseURL: process.env.NEXT_PUBLIC_REACT_APP_API_URL + "api/",
  timeout: process.env.NEXT_PUBLIC_REACT_APP_TIMEOUT,
};

export default (axiosConfig) =>
  axios.create({
    ...config,
    ...axiosConfig,
  });
