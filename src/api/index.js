import mockApi from "config/api";

const api = {
    getAll: () => mockApi.get(`/`),
    getById: id =>  mockApi.get(`/${id}`)
};

export default api;