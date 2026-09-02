import axios from 'axios';

const baseUrl = 'http://localhost:3001/tasks';

const getAll = () => {
    return axios.get(baseUrl).then(response => response.data)
};

const create = (newBody) => {
    return axios.post(baseUrl, newBody).then(response => response.data)
};

const update = (id, updatedBody) => {
    return axios.put(`${baseUrl}/${id}`, updatedBody).then(response => response.data)
};

const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`).then(response => response.data);
};

export default { getAll, create, update, remove };