import axios from "axios";

let baseUrl = "http://localhost:4000/api/";

export const headers = {
  "Content-Type": "application/json",
  accept: "application/json",
};

export const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: headers,
});
