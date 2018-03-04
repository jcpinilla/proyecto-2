import React from "react";
import Login from "./Login";
import CrearCuenta from "./CrearCuenta";

export default class Aut extends React.Component {
	constructor(props) {
		super(props);
		this.ingresar = this.ingresar.bind(this);
		this.crearCuenta = this.crearCuenta.bind(this);
	}

	ingresar(login, contrasena) {
		const log = {
			login,
			contrasena
		};
		fetch("/api/aut/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(log)
		})
			.then(res => res.json())
			.then(data => {
				if (data.res === "ok") {
					this.props.ingresar(login);
				} else {
					alert("Login o contraseña incorrecta");
				}
			});
	}

	crearCuenta(login, contrasena, nombre) {
		const cuenta = {
			login,
			contrasena,
			nombre,
			personas: []
		};
		fetch("/api/aut/crearCuenta", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(cuenta)
		})
			.then(res => res.json())
			.then(data => {
				if (data.res === "ok") {
					this.props.ingresar(login);
				} else {
					alert("El usuario ya está registrado");
				}
			});
	}

	render() {
		return (
			<div>
				<Login ingresar={this.ingresar} />
				<CrearCuenta crearCuenta={this.crearCuenta} />
			</div>
		);
	}
}
