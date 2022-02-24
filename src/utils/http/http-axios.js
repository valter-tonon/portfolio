import axios from "axios";

let apiHost = process.env.REACT_APP_API_HOST;

export const httpApi = axios.create({
    baseURL: `${apiHost}/api/v1/`,
    headers: {
        'Content-Type': 'application/json',
    },
});
