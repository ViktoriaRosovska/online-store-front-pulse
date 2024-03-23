import { host } from "./index.jsx";
// import axios from "axios";

export const fetchOneDevice = async (id) => {
  const { data } = await host.get("products/" + id);

  return data;
};

export const brand = async () => {
  const { data } = await host.get("/products");
  return data;
};

export const brandNew = async () => {
  const { data } = await host.get("/products/newest");
  return data;
};

export const brandSales = async () => {
  const { data } = await host.get("/products/sales");
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

export const querySearch = async (queryObject) => {
  console.log(queryObject);

  console.log("sex", queryObject.sex);
  // sex = "", brand = "", season = "", size = "", color = "", sort = "", order = ""
  const { data } = await host.get(
    `/products?sex=${queryObject.sex}&brand=${queryObject?.brand || ""}`
    // & season=${ queryObject?.season || ""}& size=${
    //   queryObject?.size || ""
    // }&color=${queryObject?.color || ""}&sort=${queryObject?.sort || ""}&order=${queryObject?.order || ""}`
  );
  return data;
};
