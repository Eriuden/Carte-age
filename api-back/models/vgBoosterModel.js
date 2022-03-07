// LE MODEL SERT POUR LOGER LES REQUETES
//EN VRAI LE COMBO ROUTE MODEL SERT SURTOUT POUR LA PROPETEE DU CODE
//IL EXISTE AUSSI UNE DB EN API POUR LES BOOSTERS, MAIS A VOIR CAR MOINS FIABLE


module.exports = (_db) => {
    db = _db;
    return vgBoosterModel
};

//on choppe toutes les cartes

class vgBoosterModel {

    static getAllVgBoosters() {
        return axios.get(`https://card-fight-vanguard-api.ue.r.appspot.com/api/v1/sets`)
        .then((res) => {
            console.log(res.data);
            return res.data;
        })
        .catch((err) => {
            return err;
        })
    }



}