const stripe = require("stripe")('YOUR SK KEY')
const withAuth = require("../withAuth")

module.exports = function (app,db) {
    const orderModel = require("../models/orderModel")(db);
    const vgCardModel = require("../models/vgCardModel")(db);
    const vgBoosterModel = require("../models/vgBoosterModel")(db);

    app.post("/api/v1/order/save", withAuth, async (req, res, next) => {
       console.log(req.body)
       let total_amount = 0;
       await orderModel.saveOneOrder(req.body.user_id, total_amount)
       .then(async (res1)=>{

           let id = res1.insertId

           req.body.cart.map(async(product)=>{

               await vgCardModel.getOneVgCard(product.id)
               .then(async (res2) => {
                   console.log (res2)
                   product.safePrice = parseFloat(res2[0].price)

                   await orderModel.saveOneOrderDetail(id, product)
                    .then(async (res3)=>{
                        //ajout du prix du produit par sa quantité au montant total de la commande
                        total_amount += parseInt(product.quantity_ordered) * parseFloat(product.safePrice)
                        //on appelle la méthode pour la mise à jour de notre commande avec le nouveau prix total
                        await orderModel.updateTotalAmount(id, total_amount)
                        
                    })
               })

               await vgBoosterModel.getOneVgBooster(product.id)
               .then(async (res2) => {
                   console.log (res2)
                   product.safePrice = parseFloat(res2[0].price)

                   await orderModel.saveOneOrderDetail(id, product)
                    .then(async (res3)=>{
                         
                        total_amount += parseInt(product.quantity_ordered) * parseFloat(product.safePrice)
                        
                        await orderModel.updateTotalAmount(id, total_amount)
                        
                    })
               })
           })

                        res.json({status: 200, order_id: id, msg: "commande éffectuée"})

       }) 
    })

    //gestion du paiement
    app.post("/api/v1/order/payment", withAuth, async (req,res) => {
        let order = await orderModel.getOneOrder(req.body.order_id)
        const paymentIntent = await stripe.paymentIntent.create({
            amount: order[0].total_amount * 100,
            currency: "eur",
            metadata: { integration_check: "accept-a-payment" },
            receipt_email: req.body.email,
        })
        res.json({ client_secret: paymentIntent["client_secret"]})
    })

    app.put("/api/v1/order/validate", withAuth, async (req, res) => {
        console.log(req.body)
        let validate = await orderModel.updateStatus(
            req/body.order_id,
            req.body.status
        )
        res.json({ status: 200, msg:"paiment validé"})
    })
}