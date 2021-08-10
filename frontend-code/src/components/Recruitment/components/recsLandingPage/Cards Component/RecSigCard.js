import React from 'react';
import { Link } from 'react-router-dom';

class RecSigCard extends React.Component {
	state = { show: false };

	OnCLick = () => {
		this.setState({ show: true });
	};

	onClickClose = () => {
		this.setState({ show: false });
	};

	render() {
		const { avatar, name, buttonLink } = this.props;
		return (
			<Link to={`${buttonLink}`}>
				<div className="col s12 s12 l3 sigcard" onClick={this.OnCLick}>
					<div className="card z-depth-4" style={{ overflow: 'hidden' }}>
						<div className="card-image waves-block waves-light">
							<img className="activator" src={avatar} alt={avatar} />
						</div>
						<div className="card-content activator indigo darken-3 waves-block waves-light">
							<span className="card-title activator white-text text-darken-4">
								{name}
							</span>
						</div>
					</div>
				</div>
			</Link>
		);
	}
}

export default RecSigCard;
