const withAuth = require('../withAuth')
const fs = require ('fs')


module.exports = (app, db) => {

const commentModel = require("../models/commentModel")(db)

//si on veut récup toutes les cartes de Vanguard

app.get("/api/v1/recipes_comments/all",async (req,res) => {
    await commentModel.getAllComments().then((resReqSql) =>{
        if (resReqSql.code) {
            res.json({ status: 500, error: resReqSql.message })
        }
        res.json({ status: 200, results: resReqSql})
    })
})

//si on veut juste en récupérer une

app.get("/api/v1/recipes_comments/one/:id", async (req,res) => {
    await commentModel.getOneComments(req).then((resReqSql) => {
        if(resReqSql.code) {
            res.json({ status: 500, error: resReqSql.message })
        }
        res.json({ status: 200, results: resReqSql})
    })
})

//il est temps d'en ajouter

app.put("/api/v1/recipes_comments/add", async (req,res) => {
    await commentModel.addOneComments(req).then((resSql) => {
        if (resSql.code) {
            res.json({ status: 500, error: resSql.message })
        }
        res.json({ status: 200, msg: "nouveau deck posté "})
    })
})

// la route pour les images
app.post("/api/v1/recipes_comments/addPhoto", async (req,res) => {
    if(!req.files || Object.keys(req.files).length === 0) {
        res.json({
            status: 400,
            msg: "impossible de récupérer la photo",
        })
    }

    req.files.image.mv(`public/images/${req.files.image.name}`, (err) => {
        console.log( "ca marche ");
        if (err) {
            res.json({
                status: 500,
                msg: "la photo n'a pu être enregistrée"
            })
        }
    })

    res.json({
        status: 200,
        msg: "photo bien enregistrée",
        url: req.files.image.name,
    })
})

// modifier les infos 
app.patch("/api/v1/recipes_comments/update/:id", async (req,res) => {
    await commentModel.updateOneComments(req).then((resReqSql) =>{
        if (resReqSql.code) {
            res.json({ status: 500, error: resReqSql.message})
        }
        res.json({ status: 200, msg: "les infos sont bien modifiées" })
    })
})

//route pour supprimer 
app.delete("/api/v1/recipes_comments/delete/:id", async (req,res) => {
    let id = req.params.id;

    await commentModel.getOneComments(req)
    .then(async(res1) => {
        await commentModel.deleteOneComments(id)
        .then((res2) => {
            if (res2.code) {
                res.json({ status: 500, error: res2.message})
            }

            if (res1[0].photo !== "no-pict.jpg") {
                console.log(" il ne s'ait pas de no-pict.jpg")
                fs.unlink(`public/images/${res1[0].photo}`, (err) => {
                    if (err) {
                        res.json({ status: 500, error: err})
                    }
                    console.log("ca supprime")
                })
            }
        })
    })
    res.json({ status: 200, msg: "vous avez honte de ce deck il faut croire"})
})
    
}