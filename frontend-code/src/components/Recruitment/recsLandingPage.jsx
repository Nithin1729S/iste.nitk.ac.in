import React from 'react';
import { baseRequest } from '../../constants';
// import RecSigCards from './components/recsLandingPage/Cards Component/RecSigContainer';
import FAQ from './components/recsLandingPage/FAQComponent';
import RegisterButton from './components/eachSIGLandingPage/RegisterButton';
import RecInstructions from './components/recsLandingPage/Instructions Component/recInstructions';
import { questions } from './constants';


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
			<div style={{ width: '90%', padding: '2% 0 0 10%' }}>
				<RegisterButton link={"https://forms.gle/26wALjm3MBKgn93aA	"} />
				<div style={ { marginBottom: '5vh' } }>
					<RecInstructions />
				</div>
				{/* <TitleWithLine title="Special Interest Groups SIG(s)" /> */}
				{/* <div className="container" style={{ marginBottom: '50px' }}>
					{this.state.sigCardData.length > 0 && (
						<RecSigCards cardList={this.state.sigCardData} linkOuter="/recs/" />
					)}
				</div> */}
				<div style={{ marginBottom: '5vh' }}>
					<FAQ questions={questions}/>
				</div>
			</div>
		);
	}
}
export default RecruitmentComponent;
