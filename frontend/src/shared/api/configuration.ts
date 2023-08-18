import axios from 'axios';

const ConfigApi = {
   url: `${import.meta.env.VITE_BACKEND_URL}:${import.meta.env.VITE_BACKEND_PORT}/api`,
};

export const $api = axios.create({
   baseURL: ConfigApi.url,
});