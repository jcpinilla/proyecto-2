import React from "react";

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			login: "",
			contrasena: ""
		};
		this.manejarCambioLogin = this.manejarCambioLogin.bind(this);
		this.manejarCambioContrasena = this.manejarCambioContrasena.bind(this);
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

	manjearSubmit() {
		this.props.ingresar(this.state.login, this.state.contrasena);
	}

	render() {
		return (
			<div>
				<input type="text" placeholder="Login" value={this.state.login} onChange={this.manejarCambioLogin}/>
				<input type="password" placeholder="Contraseña" value={this.state.contrasena} onChange={this.manejarCambioContrasena} />
				<button type="button" onClick={this.manjearSubmit}>Ingresar</button>
			</div>
		);
	}
}
