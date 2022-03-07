const express = require("express");
const mysql = require("promise-mysql");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const app = express();




require("dotenv").config();

// on check si l'appli' est en ligne pour savoir où récupérer la base de données
if (!process.env.HOST_DB) {
var config = require("./config-local");
}
// else {
// 	var config = require("./config-online");
// }

app.use(
	cors()
);

app.use(fileUpload({ createParentPath: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));



const vgCardRoutes = require("./routes/vgCardRoutes");
const vgBoosterRoutes = require("./routes/vgBoosterRoutes");

const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");

const recipesRoutes = require("./routes/recipesRoute");
const commentsRoutes = require("./routes/commentsRoute");

// connexion BDD
const HOST = process.env.HOST_DB || config.db.host;
const DATABASE = process.env.DATABASE || config.db.database;
const USER = process.env.USER || config.db.user;
const PASSWORD = process.env.PASSWORD || config.db.password;
//
const PORT = process.env.PORT || 8000;

mysql
	.createConnection({
		host: "localhost",
		database: "carte_age",
		user: "root",
		password: ""
	})
	.then((db) => {
		// console.log(db);
		console.log(`Bien connecté à : ${db.config.database}`);
		setInterval(async () => {
			let res = await db.query("SELECT 1");
		}, 10000);

		app.get("/", (req, res) => {
			res.json({
				status: 200,
				msg: "Welcome to carte age",
				DB: db.config.host,
			});
		});

		// appel de nos routes
		

		vgCardRoutes(app, db);
        vgBoosterRoutes(app, db)

		userRoutes(app, db);
		orderRoutes(app, db);

		recipesRoutes(app,db);
		commentsRoutes(app,db);
	})

	.catch((err) => {
		console.log(`Pas connecté :'( -> ${err}`);
	});

app.listen(PORT, () => {
	console.log(`Listening on port ---> ${PORT} `);
});