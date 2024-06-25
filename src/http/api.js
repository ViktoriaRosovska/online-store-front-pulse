import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;
const NOVA_POSHTA_BASE_URL = import.meta.env.NOVA_POSHTA_BASE_URL;
const NOVA_POSHTA_API_KEY = import.meta.env.NOVA_POSHTA_API_KEY;

const api = axios.create({
  baseURL: BASE_URL,
});

const apiPost = axios.create({
  baseURL: NOVA_POSHTA_API_KEY,
});

const axiosBaseQuery =
  (host, options) =>
  async ({ url, method, data, params, headers }, reduxApi) => {
    let preparedHeaders = {};
    if (options?.prepareHeaders) {
      preparedHeaders = options?.prepareHeaders(reduxApi);
    }

    try {
      const result = await host({
        url,
        method,
        data,
        params,
        headers: {
          ...headers,

          ...preparedHeaders,
        },
      });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;

      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

const warehouseSettlementsRequest = search => ({
  apiKey: NOVA_POSHTA_API_KEY,
  modelName: "Address",
  calledMethod: "getCities",
  methodProperties: { Page: "1", FindByString: search, Limit: "20" },
});

const warehouseDepartmentsRequest = ref => ({
  apiKey: NOVA_POSHTA_API_KEY,
  modelName: "Address",
  calledMethod: "getWarehouses",

  methodProperties: {
    Page: "1",
    Limit: "500",
    CityRef: ref,
  },
});

const warehouseStreetsRequest = (ref, search = "") => ({
  apiKey: NOVA_POSHTA_API_KEY,
  modelName: "Address",
  calledMethod: "getStreet",

  methodProperties: {
    Page: "1",
    FindByString: search,
    Limit: "300",
    CityRef: ref,
  },
});

export {
  BASE_URL,
  api,
  apiPost,
  axiosBaseQuery,
  NOVA_POSHTA_BASE_URL,
  warehouseSettlementsRequest,
  warehouseDepartmentsRequest,
  warehouseStreetsRequest,
};
