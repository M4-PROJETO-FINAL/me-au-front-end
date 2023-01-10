import axios from "axios";

// const prod = "https://me-au-db.herokuapp.com";
// temporary - render deploy
// const prod = "https://me-au-back-end-api.onrender.com/";

const prod = "http://ec2-34-205-127-26.compute-1.amazonaws.com:8000/api"

const dev = "http://localhost:3001";

export const api = axios.create({
  baseURL: "http://localhost:8000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "*"
  },
});
