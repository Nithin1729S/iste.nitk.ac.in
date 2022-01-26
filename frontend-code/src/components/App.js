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
//import ExpoHomeComponent from '../expo/Components/ExpoHomeComponent';
//import DescPage from '../expo/Components/DescPage';
import LeaderboardComponent from './PageComponents/LeaderboardComponent';
// import SGPComponent from './PageComponents/SGPComponent';
// import SGPSigComponent from './PageComponents/SGPSigComponent';
//import Transcend from './Transcend';
// import Cryptonite from './Transcend/Cryptonite';
//import RecruitmentComponent from './Recruitment/recsLandingPage.jsx';
//import RecsSIGComponent from './Recruitment/eachSIGLandingPage';

/* Obscura imports start here */
import Obscura from '../Obscura'
import Instructions from '../Obscura/components/Instructions'
import ObscuraLogin from '../Obscura/components/ObscuraLogin'
import Dashboard from '../Obscura/components/Dashboard';
import Year1 from '../Obscura/components/year/Year1'

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
					{/* <Route path="/transcend"  component={Transcend} />  */}
					{/* <Route path="/smp"  component={SGPComponent} /> */}
					{/* <Route path="/smp/:name"  component={SGPSigComponent} /> */}
					{/* <Route
						path="/transcend/crypt/:id"
						
						render={(props) => (
							<Cryptonite
								{...props}
								setFooterVal={(val) => this.changeFooterBackground(val)}
							/>
						)}
					/> */}
					<Switch>
						{/* <Route path="*" component={HomeComponent} /> */ }
						{/* 
						Obscura routes 
							*/ }
						<Route path="/obscura/year1" component={Year1}/>
						<Route path='/obscura/dashboard' component={Dashboard}/>
						<Route path="/obscura/login" component={ObscuraLogin} />
						<Route path="/obscura/instructions" component={Instructions} />
						<Route path="/obscura" 
							render={ (props) => (<Obscura { ...props } setFooterVal={ (val) => this.changeFooterBackground(val) } />)}
						/>	
						<Route path="/test" component={TestUI} />
						{/* <Route
							path="/expo"
							render={(props) => (
								<ExpoHomeComponent
									{...props}
									setHeaderFooterStatus={(val) =>
										this.changeHeaderFooterStatus(val)
									}
								/>
							)}
						/> */}
						<Route path="/leaderboard"  component={LeaderboardComponent} />
						{/* <Route path="/expoPage/:name" component={DescPage} /> */}
						<Route path="/sig/:name" component={SigComponent} />
						<Route path="/team" component={TeamComponent} />
						<Route path="/project/:id" component={ProjectComponent} />
						<Route path="/login" component={LoginComponent} />
						<Route path="/event/view/:name" component={EventDetails} />
						<Route path="/event/add" component={EventAdd} />
						<Route path="/event" component={EventComponent} />
						{/* <Route path="/recs/:name" component={RecsSIGComponent} />
						<Route path="/recs" component={RecruitmentComponent} /> */}
						<Route path="/" component={ HomeComponent } />
						
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
