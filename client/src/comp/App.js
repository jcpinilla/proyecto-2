import React from "react";
import "../styles/App.css";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hashtag: "",
			comunes: []
		};
		this.manejarCambioTag= this.manejarCambioTag.bind(this);
		this.manjearSubmit = this.manjearSubmit.bind(this);
		this.setComunes = this.setComunes.bind(this);
	}

	manejarCambioTag(e) {
		this.setState({
			hashtag: e.target.value
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


	setComunes()
	{
		fetch(`https://www.instagram.com/explore/tags/${this.state.hashtag}/?__a=1`)
			.then(res => res.json())
			.then(data => {this.setState(
				{
					comunes: data
				}
			);
			});
	}



	render() {
		return (
			<div className="card">
				<div className="card-header">
					<strong>Crear cuenta</strong>
				</div>
				<div className="card-body">
					<input type="text" placeholder="hashtag" value={this.state.hashtag} onChange={this.manejarCambioTag}/><br />

					<button className="btn btn-info" type="button" onClick={this.manjearSubmit}>Buscar</button>
				</div>
			</div>
		);
	}
}