import axios from "axios";

const API = axios.create({
  baseURL: "https://task-5bix.onrender.com",
  // baseURL:"http://localhost:5000"
});

export default API;