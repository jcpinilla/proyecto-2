const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));
let personas = [
	{
		nombre: "Juan",
		valor: 0,
		txs: []
	},
	{
		nombre: "Camilo",
		valor: 0,
		txs: []
	},
	{
		nombre: "Pinilla",
		valor: 0,
		txs: []
	},
	{
		nombre: "Ramirez",
		valor: 0,
		txs: []
	},
	{
		nombre: "Solorzano",
		valor: 0,
		txs: []
	}
];
app.use(bodyParser.json());
app.post("/api/usuarios/:id/personas/:nombre", (req, res) => {
	const params = req.params;
	const nombre = params.nombre;
	let persona = null;
	for(let p of personas) {
		if (p.nombre === nombre) {
			persona = p;
			break;
		}
	}
	const txs = persona.txs;
	txs.push(req.body);
	persona.valor = txs.map(tx => tx.valor);
	console.log(persona.valor);
	persona.valor = persona.valor.reduce((ac, curr) => (parseFloat(ac) + parseFloat(curr)));
	console.log(persona.valor);
});

app.get("/api/usuarios/:id", (req, res) => {
	res.json(personas);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
	console.log("Invalid url " + req.url);
	res.sendFile(path.join(__dirname+"/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);