import React from 'react';
import { Link } from 'react-router-dom';
import { baseRequest } from '../../constants';
import RecSigCards from './RecSigContainer';
import FAQ from './components/recsLandingPage/FAQComponent';
import TitleWithLine from '../RenderingComponents/TitleWithLine';
import RecInstructions from './components/recsLandingPage/Instructions Component/recInstructions';
// import { Link } from 'react-router-dom';

class RecruitmentComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sigCardData: [],
		};
		this.fetchHome = this.fetchHome.bind(this);
	}

	async fetchHome() {
		await baseRequest.get('/home/').then((res) => {
			this.setState({
				sigCardData: res.data.sigs,
			});
		});
	}

	componentDidMount() {
		this.fetchHome();
	}

	render() {
		return (
			<div>
				<div style={{ marginBottom: '50px' }}>
					<RecInstructions />
				</div>
				<TitleWithLine title="Special Interest Groups SIG(s)" />
				<div className="container" style={{ marginBottom: '50px' }}>
					{this.state.sigCardData.length > 0 && (
						<RecSigCards cardList={this.state.sigCardData} linkOuter="/recs/" />
					)}
				</div>
				<div style={{ marginBottom: '50px' }}>
					<FAQ />
				</div>
			</div>
		);
	}
}
export default RecruitmentComponent;
