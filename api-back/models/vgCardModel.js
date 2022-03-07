// LE MODEL SERT POUR LOGER LES REQUETES
//EN VRAI LE COMBO ROUTE MODEL SERT SURTOUT POUR LA PROPETEE DU CODE
// VOIR PLUTOT POUR LES CARTES L USAGE D API EN FRONT POUR ENRICHIR LE PROJET

module.exports = (_db) => {
    db = _db;
    return vgCardModel
};

const axios= require("axios")

//on choppe toutes les cartes

class vgCardModel {

    static getAllVgCards() {
        return axios.get(`https://card-fight-vanguard-api.ue.r.appspot.com/api/v1/cards`)
        .then((res) => {
            console.log(res.data);
            return res.data;
        })
        .catch((err) => {
            return err;
        })
    }

    //en récupérer une précise

    static getOneVgCard() {
        return axios.get('https://card-fight-vanguard-api.ue.r.appspot.com/api/v1/card')
            .then(res=>{
                console.log(res.data)
                return res.data;
            })
            .catch((err) => {
                return err;
            })

    }



}


