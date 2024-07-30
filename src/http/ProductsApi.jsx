// import { host } from "./index.jsx";

// import axios from "axios";

// const host = axios.create({
//   baseURL: "https://pulse-run-api.onrender.com/api",
// });

// export { host };

// export const brandNew = async queryObject => {
//   const { data } = await host.get(
//     `/products/newest` +
//       `?sex=${queryObject?.sex || ""}` +
//       `&brand=${queryObject?.brand || ""}` +
//       `&season=${queryObject?.season || ""}` +
//       `&size=${queryObject?.size || ""}` +
//       `&color=${queryObject?.color || ""}` +
//       `&sort=${queryObject?.sort || "createdAt"}` +
//       `&order=${queryObject?.order || "desc"}` +
//       `&page=${queryObject?.page || 1}`
//   );
//   return data;
// };

// export const brandSales = async queryObject => {
//   const { data } = await host.get(
//     `/products/sales` +
//       `?sex=${queryObject?.sex || ""}` +
//       `&brand=${queryObject?.brand || ""}` +
//       `&season=${queryObject?.season || ""}` +
//       `&size=${queryObject?.size || ""}` +
//       `&color=${queryObject?.color || ""}` +
//       `&sort=${queryObject?.sort || "createdAt"}` +
//       `&order=${queryObject?.order || "desc"}` +
//       `&page=${queryObject?.page || 1}`
//   );
//   return data;
// };

// export const category = async () => {
//   const { data } = await host.get("/categories");
//   return data;
// };
