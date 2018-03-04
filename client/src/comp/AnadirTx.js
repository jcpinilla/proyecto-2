import React from "react";

export default class AnadirTx extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			valor: "",
			concepto: "",
			msgObligatorio: false
		};
		this.manejarCambioValor = this.manejarCambioValor.bind(this);
		this.manejarCambioConcepto = this.manejarCambioConcepto.bind(this);
		this.manejarRecibo = this.manejarRecibo.bind(this);
		this.manejarDoy = this.manejarDoy.bind(this);
		this.manejarSubmit = this.manejarSubmit.bind(this);
	}

	manejarCambioValor(e) {
		const valorString = e.target.value;
		const valorFloat = parseFloat(valorString);

		if (Number.isNaN(valorFloat)&&!(valorString === "")&&!valorString.endsWith(".")) {
			
			alert("nan");
			return;
		}
		this.setState({
			valor: valorFloat,
			msgObligatorio: false
		});
	}

	manejarCambioConcepto(e) {
		this.setState({
			concepto: e.target.value
		});
	}

	manejarRecibo() {
		this.manejarSubmit(true);
	}

	manejarDoy() {
		this.manejarSubmit(false);
	}

	manejarSubmit(recibo) {
		const anadirTx = this.props.anadirTx;
		let valor = this.state.valor;
		if (valor === "") {
			this.setState({
				msgObligatorio: true
			});
			return;
		}
		if (!recibo) {
			valor = valor * -1;
		}
		const concepto = this.state.concepto;
		anadirTx(valor, concepto);
		this.setState({
			valor: "",
			concepto: ""
		});
	}

	render() {
		return (
			<form>
				<input
					type="text"
					value={this.state.valor}
					placeholder="Valor"
					onChange={this.manejarCambioValor}/><br />
				<input
					type="text"
					value={this.state.concepto}
					placeholder="Concepto (opcional)"
					onChange={this.manejarCambioConcepto}/><br />
				<button
					type="button"
					onClick={this.manejarRecibo}>
				Recibo
				</button>
				<button
					type="button"
					onClick={this.manejarDoy}>
				Doy
				</button>
				<br />
				{
					this.state.msgObligatorio &&
					<span>El valor es obligatorio</span>
				}
			</form>
		);
	}
}