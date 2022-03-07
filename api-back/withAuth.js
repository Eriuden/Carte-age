const jwt = require ("jsonwebtoken")
const secret = "standupthevanguard";

const withAuth = (req,res,next) => {
    const token = req.headers["x-access-token"];

    if(token === undefined) {

        res.json({
            status:404,
            msg: "token not found",
            token: token,
        })
    } else {
        jwt.verify(token, secret, (err, decoded) =>{
            if(err) {
                res.json({
                    status: 401,
                    msg: "error, invalid token",
                    
                })
            } else {
                req.id = decoded.id;

                next();
            }
        })
    }
}

module.exports = withAuth;