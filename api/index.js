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

export const createPayPalTransaction = () => async (data) =>
  await getHttpClient(getItem("token"))
    .post(`/orders/create-paypal-transaction`, data)
    .then((response) => response.data);

export const captureOrder = () => async (data) => {
  const response = await getHttpClient(getItem("token")).post(
    `/orders/capture-order`,
    data
  );

  return response.data;
};

export const getOrders = (token) => async (params) => {
  return await getHttpClient(token)
    .get("/orders", { params })
    .then((response) => response.data)
    .catch((e) => {
      throw e?.response?.data || e;
    });
};

export const login = async (data) => {
  return await getHttpClient()
    .post(`/users/login`, data)
    .then((response) => response.data)
    .catch((e) => {
      throw e?.response?.data || e;
    });
};
export const forgotPassword = async (data) => {
  return await getHttpClient()
    .post(`/users/forgot-password`, data)
    .then((response) => response.data)
    .catch((e) => {
      throw e?.response?.data || e;
    });
};

export const register = async (data) => {
  return await getHttpClient()
    .post(`/users/register`, data)
    .then((response) => response.data)
    .catch((e) => {
      throw e?.response?.data || e;
    });
};

export const resetPassword = async (data) => {
  return await getHttpClient()
    .post(`/users/reset-password`, data)
    .then((response) => response.data)
    .catch((e) => {
      throw e?.response?.data || e;
    });
};

export const changePassword = async (data) => {
  return await getHttpClient(getItem("token"))
    .post(`/users/change-password`, data)
    .then((response) => response.data)
    .catch((e) => {
      throw e?.response?.data || e;
    });
};

export const getUser = (token) => async (params) => {
  return await getHttpClient(token)
    .get("/users/current", { params })
    .then((response) => response.data);
};

export const updateUser = async (data) => {
  return await getHttpClient()
    .put(`/users/current`, data)
    .then((response) => response.data)
    .catch((e) => {
      throw e?.response?.data || e;
    });
};

export const getSetting = (token) => async () => {
  return await getHttpClient(token)
    .get("/setting")
    .then((response) => response.data.data);
};
