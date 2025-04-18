import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import TestUI from './UI/TestNewUIElement';
import ScrollToTop from './UtilityComponents/ScrollToTop';
import Wrapper from './UtilityComponents/Wrapper';
import Header from './RenderingComponents/Header';
import Footer from './RenderingComponents/Footer';
import HomeComponent from './PageComponents/HomeComponent';
import SigComponent from './PageComponents/SigComponent';
import TeamComponent from './PageComponents/TeamComponent';
import ProjectComponent from './PageComponents/ProjectComponent';
import Gallery from "./Gallery";
import ExpoHomeComponent from './expo/Components/ExpoHomeComponent';
import DescPage from './expo/Components/DescPage';
import AWSS from "./AWSS22/AWSS";
import Egyptian from "./AWSS22/Stories/Egyptian";
import Italian from "./AWSS22/Stories/Italian";
import Greek from "./AWSS22/Stories/Greek";
import Mexican from "./AWSS22/Stories/Mexican";
import RecruitmentComponent from './Recruitment/recsLandingPage.jsx';
import SHE from "./SHE"
import SI from './SI';
import ClutchMB from "./ClutchMysteryBox/index";
import Obsidian from "./Obsidian";
import Blackbox from '../components/Obsidian/components/Blackbox'



import { enableClutchMB, enableSHE } from '../constants';

import '../css/constants.css';
import ScotlandYard from './ScotlandYard/index.js';
import ScotlandYardAdmin from './ScotlandYardAdmin/index.js';
import SquareOne24 from './SquareOne24/index.js';






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
						<Route path="/SocialInitiatives/" component={SI}/>
						{enableSHE ?
							<Route
								path="/she/"
								render={(props) => (
									<SHE
										{...props}
										changeFooterVal={(val) =>
											this.changeFooterBackground(val)
										}
									/>
								)}
							/> : null
						}
						
							<Route
								path="/obsidian/:id"
								render={(props) => (
									<Blackbox
										{...props}
										setFooterVal={(val) => this.changeFooterBackground(val)}
									/>
								)}
							/>
						
						<Route path="/clutchmb" component={Obsidian} />
						{enableClutchMB ?
							<Route
								path="/clutchmb/"
								render={(prop) => (
									<ClutchMB />
								)}
							/> : null
						}
						
						<Route path="/test" component={TestUI} />
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
						<Route path="/expoPage/:name" component={DescPage} />
						<Route path="/sig/:name" component={SigComponent} />
						<Route path="/team" component={TeamComponent} />
						<Route path="/project/:id" component={ProjectComponent} />
						<Route path="/recs" component={RecruitmentComponent} />
						<Route path="/awss/egyptian" component={Egyptian} />
						<Route path="/awss/mexican" component={Mexican} />
						<Route path="/awss/greek" component={Greek} />
						<Route path="/awss/italian" component={Italian} />
						<Route path="/awss" component={AWSS} />
						<Route path="/gallery" component={Gallery} />
						<Route path="/leaderboard" component={SquareOne24} />
						{/* <Route path="/scotlandyard/admin" component={ScotlandYardAdmin}/> */}
						{/* <Route path="/scotlandyard" component={ScotlandYard}/> */}
						<Route path="/" component={HomeComponent} />
					    {/* <Route path="/leaderboard" component={SquareOne}/> */}
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
