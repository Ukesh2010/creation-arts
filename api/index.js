import httpClient from "./httpClient";
import convertJsonToFormData from "../utils/convertJsonToFormData";
import { getItem, removeItem } from "../utils/localStorage";

const getHttpClient = (
  token = getItem("token"),
  isMultipartRequest = false,
  validateStatus = false
) => {
  const axiosConfig = {
    transformRequest: [
      (data, headers) => {
        headers["Accept"] = "application/json";
        if (token) {
          headers["Authorization"] = `Bearer ${token}`;
        }
        if (isMultipartRequest) {
          headers["Content-Type"] = "multipart/form-data";
          return convertJsonToFormData(data);
        }

        headers["Content-Type"] = "application/json";
        return JSON.stringify(data);
      },
    ],
  };
  if (validateStatus) {
    axiosConfig.validateStatus = function (status) {
      if (status === 401) {
        removeItem("token");
        removeItem("cart");
        window.location.reload();
      }
      return status >= 200 && status < 300;
    };
  }

  return httpClient(axiosConfig);
};

export const login = async (data) => {
  return await getHttpClient().post("/customer/login", data);
};

export const getCategories = (token) => async (params) => {
  return await getHttpClient(token)
    .get("/categories", { params })
    .then((response) => response.data);
};

export const getProducts = (token) => async (params) => {
  return await getHttpClient(token)
    .get("/products", { params })
    .then((response) => response.data);
};

export const getProductDetail = (token) => async (id) => {
  return await getHttpClient(token)
    .get(`/products/${id}`)
    .then((response) => response.data);
};

export const createOrder = async (data) => {
  return await getHttpClient().post("/orders", data);
};

export const createPayPalTransaction = async (data) => {
  const response = await authHttpClient.post(
    `/create-paypal-transaction`,
    data
  );

  return response.data;
};

export const captureOrder = async (data) => {
  const response = await authHttpClient.post(`/capture-order`, data);

  return response.data;
};
