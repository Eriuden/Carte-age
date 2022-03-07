const bcrypt = require("bcrypt");
const saltrounds = 10;

module.exports = (_db) => {
    db = _db;
    return UserModel;
}

class UserModel{
    static getUserByMail(mail){
        return db
        .query("SELECT * FROM users WHERE mail = ?", [mail])
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        })
    }


    static saveOneUser(req) {
        return bcrypt.hash(rerq.body.password, saltrounds)
        .then((hash) =>{
            return db
                .query('INSERT INTO users (name, password, mail, role)VALUES(?,?,?,"user")',
                [
                    req.body.name,
                    hash,
                    req.body.mail,
                ]
            )
            .then((response)=> {
                return response
            })
            .catch((err)=>{
                return err;
            })
        })
    }

    static updateUser (req,id) {
        return db
        .query(
            "UPDATE users SET name = ?, mail = ? WHERE id = ?",
            [
                req.body.name,
                req.body.mail,
                id,
            ]
        )
        .then((res)=> {
            console.log("update user", res);
            return res;
        })
        .catch(err => {
            return err;
        })
    }

}