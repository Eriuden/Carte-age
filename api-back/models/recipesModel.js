// LE MODEL SERT POUR LOGER LES REQUETES
//EN VRAI LE COMBO ROUTE MODEL SERT SURTOUT POUR LA PROPETEE DU CODE
// VOIR PLUTOT POUR LES CARTES L USAGE D API EN FRONT POUR ENRICHIR LE PROJET

module.exports = (_db) => {
    db = _db;
    return recipesModel
};



class recipesModel {

    static getAllRecipes() {
        return db
        .query("SELECT * FROM recipes")
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        })
    }

    

    static getOneRecipes() {
        return db
        .query("Select * FROM recipes WHERE id = ?", [id])
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        })
    }

    

    static addOneRecipes() {
        return db
        .query(
            "INSERT INTO recipes (JOIN users ON recipes.user_id = users.id, title, creationTimeStamp, content, name) VALUES (?,?,NOW(),?,?) ",
            [
                
                req.body.user_id,
                req.body.title,
                req.body.creationTimeStamp,
                req.body.content,
                req.body.name,
                
                
            ]
        )
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        })
    }

    
    static updateOneRecipes(req) {
        let id = req.params.id;
        return db
        .query(
            "UPDATE recipes SET user_id = ?, title = ?, creationTimeStamp = ?, content = ?, name = ? WHERE id = ? ",
            [
                req.body.user_id,
                req.body.title,
                req.body.creationTimeStamp,
                req.body.content,
                req.body.name,
                id, 
            ]
        )
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        })
    }

    
    static deleteOneRecipes(id){
        return db
        .query("DELETE FROM recipes WHERE id = ?", [id])
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        })
    }



}