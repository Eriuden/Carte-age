const withAuth = require('../withAuth')
const fs = require ('fs')

module.exports = (app, db) => {

const vgCardModel = require("../models/vgCardModel")(db)

//si on veut récup toutes les cartes de Vanguard


app.get("/api/v1/vgCards/all",async (req,res) => {
    await vgCardModel.getAllVgCards(req).then((resReqSql) => {

        if (resReqSql.code) {
            res.json({ status: 500, error: resReqSql.message})
        }
        res.json({ status: 200, results: resReqSql}) 

    })
})

//si on veut juste en récupérer une

app.get("/api/v1/vgCards/one:id", async (req,res) => {
    await vgCardModel.getOneVgCard(req).then((resReqSql) => {
        if(resReqSql.code) {
            res.json({ status: 500, error: resReqSql.message })
        }
        res.json({ status: 200, results: resReqSql})
    })
})


    
}