import axios from 'axios';

export const baseUrl=process.env.NODE_ENV!=='production'?'https://iste.nitk.ac.in/api':'http://127.0.0.1:8000';

export const baseRequest=axios.create({
    baseURL:baseUrl
});
