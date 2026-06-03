import axios from "axios";

const api = axios.create({
    baseURL: "https://ecommerce-app-fawn-three.vercel.app/api",
    timeout: 15000,
})

export default api;