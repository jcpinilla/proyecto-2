import React from "react";

export default class CrearCuenta extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			login: "",
			contrasena: "",
			contrasenaConf: "",
			nombre: ""
		};
		this.manejarCambioLogin = this.manejarCambioLogin.bind(this);
		this.manejarCambioContrasena = this.manejarCambioContrasena.bind(this);
		this.manejarCambioNombre = this.manejarCambioNombre.bind(this);
		this.manejarCambioContrasenaConf = this.manejarCambioContrasenaConf.bind(this);
		this.manjearSubmit = this.manjearSubmit.bind(this);
	}

	manejarCambioLogin(e) {
		this.setState({
			login: e.target.value
		});
	}

	manejarCambioContrasena(e) {
		this.setState({
			contrasena: e.target.value
		});
	}

	manejarCambioNombre(e) {
		this.setState({
			nombre: e.target.value
		});
	}

	manejarCambioContrasenaConf(e) {
		this.setState({
			contrasenaConf: e.target.value
		});
	}

	manjearSubmit() {
		if (this.state.contrasena !== this.state.contrasenaConf) {
			alert("Las contraseñas no coinciden");
			return;
		}
		this.props.crearCuenta(
			this.state.login,
			this.state.contrasena,
			this.state.nombre);
	}

	render() {
		return (
			<div>
				<input type="text" placeholder="Login" value={this.state.login} onChange={this.manejarCambioLogin}/>
				<input type="password" placeholder="Contraseña" value={this.state.contrasena} onChange={this.manejarCambioContrasena} />
				<input type="password" placeholder="Confirmar contraseña" value={this.state.contrasenaConf} onChange={this.manejarCambioContrasenaConf} />
				<input type="text" placeholder="Nombre" value={this.state.nombre} onChange={this.manejarCambioNombre} />
				<button type="button" onClick={this.manjearSubmit}>Crear Cuenta</button>
			</div>
		);
	}
}
