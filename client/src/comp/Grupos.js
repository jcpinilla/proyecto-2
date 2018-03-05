import React from "react";
import Grupo from "./Grupo";
import AnadirPersona from "./AnadirPersona"

export default class Grupos extends React.Component {
	render() {
		const personas = this.props.personas;
		const meDeben = personas.filter(persona => persona.valor < 0);
		const deboA = personas.filter(persona => persona.valor > 0);
		const otros = personas.filter(persona => persona.valor === 0);
		const onClick = this.props.onClick;

		return (
			<div>
				{/*1. Se agregan instrucciones para usuario ya registrado.
				Esto para mejorar usabilidad, ya que el usuario no tiene por qué recordar 
				como realizar transacciones dentro de la aplicacion.*/}
				<div className="alert alert-info alert-dismissible">
						<button type="button" class="close" data-dismiss="alert" aria-label="close">&times;</button>
						<strong>¡Bienvenido! </strong>Ésta es una aplicación para manejar las cuentas personales. 
						Puedes agregar personas con las que quieres manejar las cuentas con el botón <strong>Agregar Persona</strong>.
						En la parte de <strong>Grupos </strong>
						puedes ver quién te debe, a quién le debes y otras personas con las que estás al día. Las personas en los grupos las puedes filtrar por nombre.
						Haciendo click sobre cada persona puedes ver el detalle de todas las transacciones que has tenido 
						con esa persona, así como agregar nuevas transacciones. En la parte de <strong>Transacciones </strong>, 
						un valor <em>positivo</em> indica que recibiste dinero, mientras que un valor <em>negativo</em> indica que diste dinero.
				</div>
				<h1>Grupos</h1>
				<input id="filtrar" type="text" placeholder="Filtrar por nombre" value={this.props.filtro} onChange={this.props.filtrar}/><br />
				<Grupo
					titulo="Me deben"
					personas={meDeben}
					onClick={onClick}
				/>
				<Grupo
					titulo="Debo a"
					personas={deboA}
					onClick={onClick}
				/>
				<Grupo
					titulo="Otros"
					personas={otros}
					onClick={onClick}
				/>
				<AnadirPersona anadirPersona={this.props.anadirPersona} />
			</div>
		);
	}
}