import React from 'react';

import SigDescription from './components/eachSIGLandingPage/SigDescription';
import RegisterButton from './components/eachSIGLandingPage/RegisterButton.jsx';
import Timeline from './components/eachSIGLandingPage/Timeline';
import TitleWithLine from '../RenderingComponents/TitleWithLine';
import RoundsCard from './components/eachSIGLandingPage/RoundsCard';

import { baseRequest } from '../../constants';

class RecsSIGComponent extends React.Component {
	constructor(props) {
		super(props);
		const sigs = [
			'Catalyst',
			'Crypt',
			'Create',
			'Clutch',
			'Chronicle',
			'Charge',
			'Concrete',
			'Credit',
		];
		let curSIGname = 'Catalyst';
		if (typeof this.props.match.params !== 'undefined') {
			let cur = this.props.match.params.name;
			if (sigs.includes(cur)) curSIGname = cur;
		}
		this.state = {
			sigName: curSIGname,
			data: {},
			roundsData: [],
		};
		this.fetchRecs = this.fetchRecs.bind(this);
	}
	async fetchRecs() {
		await baseRequest
			.get(`/recs/${this.state.sigName}/`)
			.then((res) => {
				this.setState({
					data: res.data,
					roundsData: res.data.rounds,
				});
				console.log(this.state.roundsData);
			})
			.catch((err) => console.log(err));
	}

	componentDidMount() {
		this.fetchRecs();
	}

	render() {
		return (
			<>
				<TitleWithLine title={this.state.sigName} />
				<Timeline rounds={this.state.roundsData} />
				<SigDescription
					sig={this.state.sigName}
					desc={this.state.data.descriptionSIG}
				/>
				<RegisterButton link={`${this.state.data.registerLink}`} />
				{this.state.roundsData.map((round, index) => {
					return <RoundsCard data={round} key={index} />;
				})}
			</>
		);
	}
}

export default RecsSIGComponent;
