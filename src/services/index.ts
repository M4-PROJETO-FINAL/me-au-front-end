import axios from "axios";

export const api = axios.create({
  baseURL: "https://me-au-db.herokuapp.com",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
