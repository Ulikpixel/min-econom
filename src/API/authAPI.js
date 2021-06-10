import * as axios from "axios";

const instance = axios.create({
    baseURL: "",
});

export const authAPI = {
    login: (body) => instance.post("", body),
};