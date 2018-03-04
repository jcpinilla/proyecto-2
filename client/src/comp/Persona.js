import React from "react";
import Txs from "./Txs";
import AnadirTx from "./AnadirTx"

export default class Persona extends React.Component {
	render() {
		const persona = this.props.persona;
		if (!persona) {
			return null;
		}
		const nombre = persona.nombre;
		const valor = persona.valor;
		return (
			<div>
				<h2>{nombre}</h2>
				<p>
					{
						valor < 0 ? "Me debe: " : (valor > 0) ? "Le debo: " : ""
					}
					{
						valor !== 0 && Math.abs(valor)
					}
				</p>
				<h3>Transacciones</h3>
				<AnadirTx
					anadirTx={this.props.anadirTx}
				/>
				<br />
				<Txs {...persona} />
			</div>
		);
	}
}
