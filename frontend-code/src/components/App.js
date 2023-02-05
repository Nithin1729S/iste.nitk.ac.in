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
import ExpoHomeComponent from '../expo/Components/ExpoHomeComponent';
import DescPage from '../expo/Components/DescPage';
import SGPComponent from './PageComponents/SGPComponent';
import SGPSigComponent from './PageComponents/SGPSigComponent';
import AWSS from "./AWSS22/AWSS";
import Egyptian from "./AWSS22/Stories/Egyptian";
import Italian from "./AWSS22/Stories/Italian";
import Greek from "./AWSS22/Stories/Greek";
import Mexican from "./AWSS22/Stories/Mexican";
import RecruitmentComponent from './Recruitment/recsLandingPage.jsx';
import SHE from './SHE'

import {enableSHE} from '../constants'

import '../css/constants.css';



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
						{ enableSHE ? 
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
						
						<Route path="/smp/:name/"  component={SGPSigComponent} />
						<Route path="/smp/"  component={SGPComponent} />
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
						<Route path="/awss/egyptian" component={ Egyptian } />
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
