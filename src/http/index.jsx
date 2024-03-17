import axios from "axios";

const host = axios.create({
  baseURL: "https://pulse-run-api.onrender.com/api",
});

export { host };
