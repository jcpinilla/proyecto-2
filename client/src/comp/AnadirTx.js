import React from "react";

export default class AnadirTx extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			valor: "",
			concepto: "",
			recibo: true
		};
		this.manejarCambioValor = this.manejarCambioValor.bind(this);
		this.manejarCambioConcepto = this.manejarCambioConcepto.bind(this);
		this.manejarReciboDoy = this.manejarReciboDoy.bind(this);
		this.manejarSubmit = this.manejarSubmit.bind(this);
	}

	manejarCambioValor(e) {
		this.setState({
			valor: e.target.value
		});
		
	}

	manejarCambioConcepto(e) {
		this.setState({
			concepto: e.target.value
		});
	}

	manejarReciboDoy() {
		const recibo = this.state.recibo;
		this.setState({
			recibo: !recibo
		});
	}

	manejarSubmit() {
		const anadirTx = this.props.anadirTx;
		let valor = this.state.valor;
		if (!this.state.recibo) {
			valor = valor * -1;
		}
		const concepto = this.state.concepto;
		anadirTx(valor, concepto);
	}

	render() {
		const msjBoton = this.state.recibo ? "Recibo dinero" : "Doy dinero";
		return (
			<form>
				<input
					type="text"
					value={this.state.valor}
					placeholder="Valor"
					onChange={this.manejarCambioValor} />
				<input
					type="text"
					value={this.state.concepto}
					placeholder="Concepto"
					onChange={this.manejarCambioConcepto} />
				<button
					type="button"
					onClick={this.manejarReciboDoy}>
					{msjBoton}
				</button>
				<button
					type="button"
					onClick={this.manejarSubmit}>
					Agregar
				</button>
			</form>
		);
	}
}