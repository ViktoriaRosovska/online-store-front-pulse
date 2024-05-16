import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: BASE_URL,
});

const axiosBaseQuery =
  () =>
  // options =>
  async ({ url, method, data, params, headers }, reduxApi) => {
    // let preparedHeaders = {};
    // if (options?.prepareHeaders) {
    //   preparedHeaders = options?.prepareHeaders(reduxApi);
    // }

    try {
      // const token = localStorage.getItem("token") || ''
      const persistedData = localStorage.getItem("persist:userToken")
      console.log("persistedData", persistedData)
      const token = persistedData ? JSON.parse(persistedData).token.replace(/"/g, '') : ''
      
      console.log("token", token)
      const result = await api({
        url,
        method,
        data,
        params,
        headers: {
          ...headers,
          // ...preparedHeaders,
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
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

export { BASE_URL, api, axiosBaseQuery };
