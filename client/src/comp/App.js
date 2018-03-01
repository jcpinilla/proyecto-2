import React from "react";
import "../styles/App.css";
import Grupos from "./Grupos";
import Persona from "./Persona";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			actual: null,
			personas: []
		};
		this.manejarClick = this.manejarClick.bind(this);
		this.anadirTx = this.anadirTx.bind(this);
	}

	componentDidMount() {
		fetch(`/api/usuarios/${1}`)
			.then(res => res.json())
			.then(data => {
				this.setState({
					personas: data
				});
			});
	}

	actualizarPersonas() {
		
	}
	

	darPersona() {
		const personas = this.state.personas;
		const actual = this.state.actual;
		for (let p of personas) {
			if (p.nombre === actual) {
				return p;
			}
		}
		return null;
	}

	manejarClick(nombre) {
		this.setState({
			actual: nombre
		});
	}

	anadirTx(valor, concepto) {
		const fecha = new Date();

		const tx = {
			valor,
			concepto,
			id:fecha.getTime(),
			fecha: fecha.toLocaleDateString()
		};
		fetch(`/api/usuarios/${1}/personas/${this.state.actual}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(tx)
		});
		fetch(`/api/usuarios/${1}`)
			.then(res => res.json())
			.then(data => {
				this.setState({
					personas: data
				});
			});
	}

	render() {
		const personas = this.state.personas;
		return (
			<div>
			<Grupos
			personas={personas}
			onClick={this.manejarClick}
			/>
			<br />
			<Persona
			persona={this.darPersona()}
			anadirTx={this.anadirTx}
			/>
			</div>
			);
	}
}