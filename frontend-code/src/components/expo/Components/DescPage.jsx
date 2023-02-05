import React from 'react';
import DescContent from './DescContent';

class DescPage extends React.Component {
	constructor(props) {
		super(props);
		let sigNamevar = 'catalyst';
		let idvar = 1;
		var num = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
		var sigs = [
			'catalyst',
			'crypt',
			'create',
			'clutch',
			'chronicle',
			'charge',
			'concrete',
			'credit',
		];
		if (typeof this.props.match.params !== 'undefined') {
			let comb = this.props.match.params.name;
			if (
				num.includes(comb.charAt(comb.length - 1)) &&
				sigs.includes(comb.slice(0, comb.length - 1))
			) {
				idvar = parseInt(comb.charAt(comb.length - 1));
				sigNamevar = comb.slice(0, comb.length - 1);
			}
		}
		this.state = {
			sigName: sigNamevar,
			id: idvar,
		};
	}

	render() {
		return (
			<div>
				<DescContent sn={this.state.sigName} id={this.state.id} />
			</div>
		);
	}
}
export default DescPage;
