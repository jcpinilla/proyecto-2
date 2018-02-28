import React from "react";

export default class Tx extends React.Component {
	render() {
		const valor = this.props.valor;
		const fecha = this.props.fecha;
		const concepto = this.props.concepto;

		return (
			<tr>
				<td>{valor}</td>
				<td>{fecha}</td>
				<td>{concepto}</td>
			</tr>
		);
	}
}