import React from "react";
import "../styles/App.css";
import Grupos from "./Grupos";
import Persona from "./Persona";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		const login = this.props.login;
		this.state = {
			login,
			actual: null,
			filtro: "",
			personas: []
		};
		this.cambiarPersona = this.cambiarPersona.bind(this);
		this.anadirPersona = this.anadirPersona.bind(this);
		this.filtrar = this.filtrar.bind(this);
		this.anadirTx = this.anadirTx.bind(this);
	}

	componentDidMount() {
		fetch(`/api/usuarios/${this.state.login}`)
			.then(res => res.json())
			.then(data => {
				this.setState({
					personas: data
				});
			});
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

	cambiarPersona(nombre) {
		this.setState({
			actual: nombre
		});
	}

	anadirTx(valor, concepto) {
		const tx = {
			valor,
			concepto,
			fecha: new Date().getTime()
		};
		fetch(`/api/usuarios/${this.state.login}/personas/${this.state.actual}/transacciones`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(tx)
		})
			.then(res => res.json())
			.then(data => {
				this.setState({personas: data});
			});
	}


	anadirPersona(nombre) {
		const persona = {
			nombre,
			valor: 0,
			txs: []
		};
		fetch(`/api/usuarios/${this.state.login}/personas`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(persona)
		})
			.then(res => res.json())
			.then(data => {
				this.setState({personas: data});
			});
	}

	filtrar(e) {
		this.setState({
			filtro: e.target.value
		});
	}

	render() {
		const personas = this.state.personas.filter(p =>
			p.nombre.toLowerCase().includes(this.state.filtro.toLowerCase())
		);
		return (
			<div>
				<button type="button" onClick={this.props.cerrarSesion}>Cerrar Sesion</button><br />
				<input type="text" placeholder="Filtrar por nombre" value={this.state.filtro} onChange={this.filtrar}/>
				<Grupos
					personas={personas}
					onClick={this.cambiarPersona}
					anadirPersona={this.anadirPersona}
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