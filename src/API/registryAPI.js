import * as axios from "axios";

const instance = axios.create({
    baseURL: "",
});

export const registryAPI = {
    get: async () => {
        const response = await instance.get();
        return response.data;
    },
    getRequest: (id) => {
        const request = instance.get("/" + id);
        return request; 
    },
    post: (body) => instance.post("", body),
};



