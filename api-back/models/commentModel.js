// LE MODEL SERT POUR LOGER LES REQUETES
//EN VRAI LE COMBO ROUTE MODEL SERT SURTOUT POUR LA PROPETEE DU CODE
// VOIR PLUTOT POUR LES CARTES L USAGE D API EN FRONT POUR ENRICHIR LE PROJET

module.exports = (_db) => {
    db = _db;
    return commentsModel
};



class commentsModel {

    static getAllComments() {
        return db
        .query("SELECT * FROM recipes_comments")
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        })
    }

    

    static getOneComments() {
        return db
        .query("Select * FROM recipes_comments WHERE id = ?", [id])
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        })
    }

    

    static addOneComments() {
        return db
        .query(
            "INSERT INTO recipes_comments (JOIN recipes ON recipes_comments.recipes_id = recipes.id, name,content, creationTimeStamp) VALUES (?,?,?,NOW()) ",
            [
                
                req.body.recipes_id,
                req.body.name,
                req.body.content,
                req.body.creationTimeStamp,
                
                
                
                
            ]
        )
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        })
    }

    
    static updateOneComments(req) {
        let id = req.params.id;
        return db
        .query(
            "UPDATE recipes_comments SET recipes_id = ?, name = ?,content = ?, creationTimeStamp = ? WHERE id = ? ",
            [
                req.body.recipes_id,
                req.body.name,
                req.body.content,
                req.body.creationTimeStamp,              
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

    
    static deleteOneComments(id){
        return db
        .query("DELETE FROM recipes_comments WHERE id = ?", [id])
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        })
    }



}