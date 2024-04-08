import { host } from "./index.jsx";
// import axios from "axios";

export const fetchOneDevice = async id => {
  const { data } = await host.get("products/" + id);

  return data;
};

export const brand = async () => {
  const { data } = await host.get("/products");
  return data;
};

export const brandNew = async queryObject => {
  const { data } = await host.get(
    `/products/newest?sex=${queryObject?.sex || ""}` +
      `&brand=${queryObject?.brand || ""}` +
      `&season=${queryObject?.season || ""}` +
      `&size=${queryObject?.size || ""}` +
      `&color=${queryObject?.color || ""}` +
      `&sort=${queryObject?.sort || "createdAt"}` +
      `&order=${queryObject?.order || "desc"}`
  );
  return data;
};

export const brandSales = async queryObject => {
  const { data } = await host.get(
    `/products/sales?sex=${queryObject?.sex || ""}` +
      `&brand=${queryObject?.brand || ""}` +
      `&season=${queryObject?.season || ""}` +
      `&size=${queryObject?.size || ""}` +
      `&color=${queryObject?.color || ""}` +
      `&sort=${queryObject?.sort || "price"}` +
      `&order=${queryObject?.order || "asc"}`
  );
  return data;
};

export const category = async () => {
  const { data } = await host.get("/categories");
  return data;
};

export const female = async () => {
  const { data } = await host.get("/products?sex=female");
  return data;
};

export const querySearch = async queryObject => {
  console.log(queryObject);

  const { data } = await host.get(
    `/products` +
      `?limit=3` +
      `&sex=${queryObject?.sex || ""}` +
      `&brand=${queryObject?.brand || ""}` +
      `&season=${queryObject?.season || ""}` +
      `&size=${queryObject?.size || ""}` +
      `&color=${queryObject?.color || ""}` +
      `&sort=${queryObject?.sort || "createdAt"}` +
      `&order=${queryObject?.order || "desc"}` +
      `&page=${queryObject?.page || 1}`
  );
  return data;
};
