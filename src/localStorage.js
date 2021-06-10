export const registryAPI = {
    get: () => {
        const data = JSON.parse(localStorage.getItem("registry") || "[]");
        return data;
    },
    post: (body) => {
        const data = JSON.parse(localStorage.getItem("registry"));
        data.push(body);
        localStorage.setItem('registry', JSON.stringify(data));
    },
    getRequest: (id) => {
        const data = JSON.parse(localStorage.getItem("registry") || "[]");
        const request = data.filter(item => +item.id === +id)[0];
        return request;
    },
};