const withAuth = require("../withAuth");


module.exports = function (app, db) {
    const UserModel = require("../models/userModel")(db);


    app.get("/api/v1/user/checkToken", withAuth,async (req, res, next) => {
        let user = await UserModel.getOneUser(req.id);

        res.json({ status: 200, user: user})
    })
}