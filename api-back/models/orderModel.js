module.exports = (_db) => {
    db = _db
    return OrderModel
}

class OrderModel {

    static saveOneOrder (user_id,  totalAmount) {
        return db.query('INSERT INTO orders (user_id, totalAmount, creationTimestamp, status) VALUES (?,?, NOW(),"unpayed")', [user_id, totalAmount])
        .then((result)=>{
            console.log("result",result)
            return result;
        })
        .catch((err)=>{
            console.log("err",err)
                return err;
        })
    }


    static saveOneOrderDetail(order_id, product) {
        let total = parseInt(product.quantity_ordered) * parseFloat(product.price)
        return db.query('INSERT INTO order_details(order_id, vgcards_id, vgboosters_id, quantity_ordered, total_price) VALUES (?,?,?,?)', [order_id, vgcards.id, product.quantity_ordered, total_price ])
            .then((res)=>{
                console.log("result",res)
                return result;
            })
            .catch((err)=>{
                console.log("err",err)
                    return err;
            })
    }

    static updateTotalAmount(order_id, total_amount){
        return db.query('UPDATE orders SET total_amount = ? WHERE id = ?', [total_amount, order_id])
        .then((result)=>{
            console.log("result",result)
            return result;
        })
        .catch((err)=>{
            console.log("err",err)
            return err;
        })
    }

    static getOneOrder(id){
        return db.query('SELECT * FROM Order WHERE id = ?' , [id])
        .then((result) => {
            console.log("result", result)
            return result;
        })
        .catch((err)=>{
            console.log("err",err)
            return err;
        })
    }

    static updateStatus (order_id, status){
        return db.query('UPDATE orders SET status = ? WHERE id = ?', [status, order_id])
            .then((result)=>{
                console.log(result)
                return result
            })
            .catch((err)=>{
                console.log("err",err)
                return err;
            })
    }
        
}