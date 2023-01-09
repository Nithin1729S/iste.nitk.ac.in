import React from 'react';
	import { Switch, Route, HashRouter } from 'react-router-dom';

import TestUI from './UI/TestNewUIElement';
import ScrollToTop from './UtilityComponents/ScrollToTop';
import Wrapper from './UtilityComponents/Wrapper';
import Header from './RenderingComponents/Header';
import Footer from './RenderingComponents/Footer';
import HomeComponent from './PageComponents/HomeComponent';
import EventComponent from './PageComponents/EventComponent';
import SigComponent from './PageComponents/SigComponent';
import TeamComponent from './PageComponents/TeamComponent';
import ProjectComponent from './PageComponents/ProjectComponent';
import LoginComponent from './PageComponents/LoginComponent';
import EventDetails from './PageComponents/EventDetails';
import EventAdd from './PageComponents/EventAdd';
import ExpoHomeComponent from '../expo/Components/ExpoHomeComponent';
import DescPage from '../expo/Components/DescPage';
// import LeaderboardComponent from './PageComponents/LeaderboardComponent';
import SGPComponent from './PageComponents/SGPComponent';
import SGPSigComponent from './PageComponents/SGPSigComponent';
//import Transcend from './Transcend'
import AWSS from "./AWSS22/AWSS";
import Egyptian from "./AWSS22/Stories/Egyptian";
import Italian from "./AWSS22/Stories/Italian";
import Greek from "./AWSS22/Stories/Greek";
import Mexican from "./AWSS22/Stories/Mexican";
import RecruitmentComponent from './Recruitment/recsLandingPage.jsx';
import RecsSIGComponent from './Recruitment/eachSIGLandingPage';

/* Obscura imports start here */
// import Obscura from '../Obscura'
// import Instructions from '../Obscura/components/Instructions';
// import ObscuraLogin from '../Obscura/components/ObscuraLogin';

// import Dashboard from '../Obscura/components/Dashboard';
// import Year1 from '../Obscura/components/year/Year1';
// import Year3 from '../Obscura/components/year/Year3';
// import Year2 from '../Obscura/components/year/Year2';
// // import Year4 from '../Obscura/components/year/Year4';
// import Leaderboard from '../Obscura/components/Leaderboard';
// import SquareOne from './SquareOne';
// import SIGSquareOne from './SquareOne/eachSIG';
// import RecruitmentComponent from './Recruitment/recsLandingPage.jsx';
// import RecsSIGComponent from './Recruitment/eachSIGLandingPage';

/* Transcend imports go here */
import Cryptonite from '../components/Cryptonite'

/* Obsidian imports */
import Obsidian from '../components/Obsidian'
import Login from '../components/Obsidian/components/Login'
import Blackbox from '../components/Obsidian/components/Blackbox'
import Instructions from './Obsidian/components/Instructions';

import '../css/constants.css';
// import { enableLeaderboard } from '../constants.js';
import { enableCryptonite, enableObsidian } from '../constants.js';




class App extends React.Component {
	state = { headerShouldRender: true, footerBackgroundVariant: '' };
	changeHeaderFooterStatus = (val) => {
		this.setState({ headerShouldRender: val });
	};
	changeFooterBackground = (val) => {
		this.setState({ footerBackgroundVariant: val });
	};
	render() {
		return (
			<HashRouter>
				<ScrollToTop />
				<Wrapper shouldRender={this.state.headerShouldRender}>
					<Header />
				</Wrapper>
				<div className="app-main">
					<Switch>
					<Route path="/smp/:name/"  component={SGPSigComponent} />
					<Route path="/smp/"  component={SGPComponent} /> 
						{enableCryptonite ? (
							<Route
								path="/cryptonite/:id"
								render={(props) => (
									<Cryptonite
										{...props}
										setFooterVal={(val) => this.changeFooterBackground(val)}
									/>
								)}
							/>
						) : null }

						
						<Route path="/test" component={TestUI} />
						{/* <Route path="/squareonesig/:name" component={SIGSquareOne} /> */}
						{/* <Route path="/squareone" component={SquareOne} /> */}
						<Route
							path="/expo"
							render={(props) => (
								<ExpoHomeComponent
									{...props}
									setHeaderFooterStatus={(val) =>
										this.changeHeaderFooterStatus(val)
									}
								/>
							)}
						/>
						{/* <Route path="/leaderboard" component={LeaderboardComponent} /> */}
						{/* {enableLeaderboard ? (
							<Route path="/leaderboard" component={LeaderboardComponent} />
						) : null} */}
						<Route path="/expoPage/:name" component={DescPage} />
						<Route path="/sig/:name" component={SigComponent} />
						<Route path="/team" component={TeamComponent} />
						<Route path="/project/:id" component={ProjectComponent} />
						<Route path="/login" component={LoginComponent} />
						<Route path="/event/view/:name" component={EventDetails} />
						<Route path="/event/add" component={EventAdd} />
						<Route path="/event" component={EventComponent} />
						<Route path="/recs/:name" component={RecsSIGComponent} />
						<Route path="/recs" component={RecruitmentComponent} />
						<Route path="/awss/egyptian" component={Egyptian} />
						<Route path="/awss/mexican" component={Mexican} />
						<Route path="/awss/greek" component={Greek} />
						<Route path="/awss/italian" component={Italian} />
						<Route path="/awss" component={AWSS} />
						<Route path="/" component={HomeComponent} />
					</Switch>
				</div>
				<Wrapper shouldRender={this.state.headerShouldRender}>
					<Footer value={this.state.footerBackgroundVariant} />
				</Wrapper>
			</HashRouter>
		);
	}
}
export default App;
