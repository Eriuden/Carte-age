const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = "standupthevanguard"

module.exports = (app, db) => {
    const userModel = require("../models/userModel")(db);

    app.post("/api/v1/user/save", async (req,res) => {
        await userModel.getUserByMail(req.body.mail)
        .then(async (res1) => {
            console.log("routes", res1);
            if (res1.length > 0) {
                return res.json({
                    status: 401, msg: "cet email existe déjà"
                })
            }
            await userModel.saveOneUser(req).then((res2) => {
                console.log(res2);
                if (res2.code) {
                    res.json({ status: 500, msg: res2.message});
                }
                res.json({ status: 200, msg: "félicitations, vous voilà membre"})
            })
        })
    })

    app.get("/api/v1/user/getAdmin", async (req,res) => {
        await userModel.getUserByMail(req.body.mail)
        .then(user => {
            if (user.length === 0) {
                return res.json({ status: 404, msg:"cet utilisateur n'existe pas"})
            }
            if (user.role === "admin"){
                res.json ({msg: "cet user est admin"})
            } else {
                res.json ({msg: "cet utilisateur n'est pas admin"})
            }

        })
    })

    
    app.post('/api/v1/user/login', async(req,res)=>{
        await userModel.getUserByMail(req.body.mail)
        .then(user => {
            console.log(user);
            if(user.length === 0){
                return res.json({status: 404, msg: "ce mail n'est pas dans notre base de données"})
            }
            bcrypt.compare(req.body.password, user[0].password)
            .then(same=>{
                if(same){
                    const payload = {mail: req.body.mail, id:user[0].id}
                    const token = jwt.sign(payload,secret)
                    res.json({status: 200, token: token, user_id:user[0].id, msg:"bien connecté"})
                } else {
                    res.json({status:401, msg: "mot de passe incorrect"})
                }
            })
        })
    })

    app.patch("/api/v1/user/update/:id", async (req,res) => {
        await userModel.updateUser(req).then((resReqSql) =>{
            if (resReqSql.code) {
                res.json({ status: 500, error: resReqSql.message})
            }
            res.json({ status: 200, msg: "les infos sont bien modifiées" })
        })
    })

    
}