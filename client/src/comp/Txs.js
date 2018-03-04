import React from "react";
import Tx from "./Tx";

export default class Txs extends React.Component {
	render() {
		const txs = this.props.txs;
		if (!txs || txs.length === 0) {
			return null;
		}
		return (
			<table>
				<thead>
					<tr>
						<th>Valor</th>
						<th>Fecha</th>
						<th>Concepto</th>
					</tr>
				</thead>
				<tbody>
					{
						txs.map(tx =>
							<Tx key={tx.fecha} {...tx} />
						)
					}
				</tbody>	
			</table>
		);
	}
}
