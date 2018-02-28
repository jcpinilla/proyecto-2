import React from "react";
import Grupo from "./Grupo";

export default class Grupos extends React.Component {
	render() {
		const personas = this.props.personas;
		const meDeben = personas.filter(persona => persona.valor > 0);
		const deboA = personas.filter(persona => persona.valor < 0);
		const otros = personas.filter(persona => persona.valor === 0);
		const onClick = this.props.onClick;
		return (
			<div>
				<Grupo
					titulo="Me deben:"
					personas={meDeben}
					onClick={onClick}
				/>
				<Grupo
					titulo="Debo a:"
					personas={deboA}
					onClick={onClick}
				/>
				<Grupo
					titulo="Otros:"
					personas={otros}
					onClick={onClick}
				/>
			</div>
		);
	}
}