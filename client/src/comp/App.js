import React from "react";
import "../styles/App.css";
import Grupos from "./Grupos";
import Persona from "./Persona";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			actual: "Camilo",
			personas: [
				{
					nombre: "Juan",
					valor: 20,
					txs: [
						{
							id: 1,
							valor: 30,
							fecha: "02/02/2018",
							concepto: "Lo de la gaseosa"
						},
						{
							id: 2,
							valor: -15,
							fecha: "03/02/2018",
							concepto: ""
						}
					]
				},
				{
					nombre: "Camilo",
					valor: 30,
					txs: [
						{
							id: 3,
							valor: 50,
							fecha: "02/02/2018",
							concepto: "Lo otro"
						},
						{
							id: 4,
							valor: -15,
							fecha: "03/02/2018",
							concepto: "Lo de la pizza"
						}
					]
				},
				{
					nombre: "Pinilla",
					valor: -10
				},
				{
					nombre: "Ramirez",
					valor: 0
				},
				{
					nombre: "Solorzano",
					valor: 0
				}
			]
		};
		this.manejarClick = this.manejarClick.bind(this);
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
		alert(nombre);
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
				<Persona persona={this.darPersona()} />
			</div>
		);
	}
}