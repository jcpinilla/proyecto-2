const express = require("express");
const router = express.Router();

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://admin:admin@ds253918.mlab.com:53918";
const dbName = "proyecto-2";

router.get("/:login", (req, res) => {
	const login = req.params.login;
	query({login}, data => res.json(data.personas));
});

function query(query, callback) {
	MongoClient.connect(url, (err, client) => {
		if (err) throw err;
		const db = client.db(dbName);
		db.collection("usuarios").findOne(query, function(err, result) {
			if (err) throw err;
			callback(result, db);
			client.close();
		});
	});
}

router.post("/:login/personas", (req, res) => {
	const login = req.params.login;
	const persona = req.body;
	query({login}, (data, db) => {
		let personas = data.personas;
		personas.push(persona);
		db.collection("usuarios").updateOne({login}, {$set: {personas}});
		res.json(personas);
	});
});

router.post("/:login/personas/:nombre/transacciones", (req, res) => {
	const params = req.params;
	const login = params.login;
	const nombre = params.nombre;

	query({login}, (data, db) => {
		let personas = data.personas;
		let persona;
		for(let p of personas) {
			if(p.nombre === nombre) {
				persona = p;
				break;
			}
		}
		let txs = persona.txs;
		let tx = req.body;
		txs.push(tx);
		persona.valor += tx.valor;
		db.collection("usuarios").updateOne({login}, {$set: {personas}});
		res.json(personas);
	});
});

module.exports = router;