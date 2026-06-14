import axios from "axios";

const api = axios.create({
  baseURL: "https://skincare-backend-pnks.onrender.com"
});

export default api;