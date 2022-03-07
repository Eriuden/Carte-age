import axios from 'axios';
import {config} from "../config"

export const registerUser = (data) => {
    return axios
        .post(`${config.api_url}/api/v1/user/save`, data)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err;
        })
}

export const checkToken = (token) => {
    return axios.get(`${config.api_url}/api/v1/user/checkToken`, {headers : {"x-access-token" : token}})
    .then((res) => {
        return res.data
    })
    .catch((err) => {
        return err;
    })
}

export const getUser = (data) => {
    return axios.get(`${config.api_url}/api/v1/user/getAdmin`, data)
    .then((res) => {
        return res.data;
    })
    .catch((err) => {
        return err;
    })
}

export const logInUser = (data) => {
    return axios.post(`${config.api_url}/api/v1/user/login`, data)
    .then((res) => {
        return res.data;
    })
    .catch((err) => {
        return err;
    })
}

export const updateConnexionTimestamp = (id,token) => {
    return axios.patch(`${config.api_url}/api/v1/user/updateConnexionTimestamp/${id}`, {headers : {"x-access-token": token}})
    .then((res) => {
        return res.data;
    })
    .catch((err) => {
        return err;
    })
}