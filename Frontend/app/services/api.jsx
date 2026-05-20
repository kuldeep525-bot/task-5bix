import axios from "axios";

const API = axios.create({
  baseURL: "https://task-5bix.onrender.com",
});

export default API;