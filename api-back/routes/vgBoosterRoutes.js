const withAuth = require('../withAuth')
const fs = require ('fs')

module.exports = (app, db) => {

const vgBoosterModel = require("../models/vgBoosterModel")(db)

//si on veut récup toutes les boosters de Vanguard

app.get("/api/v1/vgBoosters/all",async (req,res) => {
    await vgBoosterModel.getAllVgBoosters().then((resReqSql) =>{
        if (resReqSql.code) {
            res.json({ status: 500, error: resReqSql.message })
        }
        res.json({ status: 200, results: resReqSql})
    })
})

    


    
}