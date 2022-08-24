import axios from "axios";

const baseURL = "https://630445260de3cd918b444d89.mockapi.io/products";

const mockApi = axios.create({
    baseURL : String(baseURL)
});

export default mockApi;