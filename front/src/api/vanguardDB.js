import axios from 'axios';
import { config } from '../config';



//Il se peut que ce damné problème de cors vient de localhost, on testera sur Heroku plus tard
export const getAllVGCards = async () => {
    return await axios.get(`${config.api_url}/api/v1/vgCards/all`)
    .then(res=>{
        console.log(res.data);
        return res.data
    })
   
}

export const getOneVgCard = async () => {
    return await axios.get(`${config.api_url}/api/v1/vgCards/one:id`)

    .then(res=> {
        console.log(res.data)
        return res.data
    })
}

//L'api a fait le minimum syndical pour les boosters, aussi, c'est pourquoi je ne pense pas les mettre au final

export const getVGBoostersFromApi = (data) => {
    console.log(data)
    return axios.get(`https://card-fight-vanguard-api.ue.r.appspot.com/api/v1/sets`
        
        ,data
        )
    .then(res=> {
        return res.data
    })
}

//Le CRUD de la section communautaire

export const getAllRecipes = (data) => {
    console.log(data)
    return axios.get(`${config.api_url}/api/v1/recipes/all`,data)
    .then((res) => {
        return res.data;
    })
    .catch((err) => {
        return err;
    })
}



export const deleteRecipes = (data) => {
    console.log(data)
    return axios.delete(`${config.api_url}/api/v1/recipes/delete/:id`,data)
    .then((res) => {
        return res.data;
    })
    .catch((err) => {
        return err;
    })
}

export const editRecipes = (data) => {
    console.log(data)
    return axios.post(`${config.api_url}/api/v1/recipes/update/:id`,data)
    .then((res) => {
        return res.data;
    })
    .catch((err) => {
        return err;
    })
}

export const createRecipes = (data) => {
    console.log(data)
    return axios.put(`${config.api_url}/api/v1/recipes/add`,data)
    .then((res) => {
        return res.data;
    })
    .catch((err) => {
        return err;
    })
}

export const getAllComments = (data) => {
    console.log(data)
    return axios.get(`${config.api_url}/api/v1/recipes_comments/all`,data)
    .then((res) => {
        return res.data;
    })
    .catch((err) => {
        return err;
    })
}



export const deleteComments = (data) => {
    console.log(data)
    return axios.delete(`${config.api_url}/api/v1/recipes_comments/delete/:id`,data)
    .then((res) => {
        return res.data;
    })
    .catch((err) => {
        return err;
    })
}

export const editComments = (data) => {
    console.log(data)
    return axios.post(`${config.api_url}/api/v1/recipes_comments/update/:id`,data)
    .then((res) => {
        return res.data;
    })
    .catch((err) => {
        return err;
    })
}

export const createComments = (data) => {
    console.log(data)
    return axios.put(`${config.api_url}/api/v1/recipes_comments/add`,data)
    .then((res) => {
        return res.data;
    })
    .catch((err) => {
        return err;
    })
}

