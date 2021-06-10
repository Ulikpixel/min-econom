import * as axios from "axios";

const instance = axios.create({
    baseURL: "",
});

export const fieldsAPI = {
    get: () => instance.get("fields"),
};