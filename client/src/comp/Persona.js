import React from "react";
import Txs from "./Txs";

export default class Persona extends React.Component {
	render() {
		const persona = this.props.persona;
		if (!persona) {
			return null;
		}
		return (
			<Txs {...persona} />
		);
	}
}
