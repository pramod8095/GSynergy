import axios from "axios";

const API_BASE_URL = "https://storeapi-i0bo.onrender.com";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
