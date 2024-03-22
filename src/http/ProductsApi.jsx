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

export const famale = async () => {
  const { data } = await host.get("/products?sex=female");
  return data;
};

export const querySearch = async (sex = "", brands = "", seasons = "", sizes = "", colors = "") => {
  const { data } = await host.get(
    `/products?sex=${sex}&brand=${brands}&season=${seasons}&size=${sizes}&color=${colors}`
  );
  return data;
};
