import React from 'react';
import M from 'materialize-css';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

import logopath from '../logo.png';
import '../../css/header.css';
import { enableExpo, enableRecs, enableCryptonite } from '../../constants';
// import {  enableLeaderboard } from '../../constants';

class Header extends React.Component {
	state = { loggedInName: '' };
	componentDidMount() {
		let elems = document.querySelectorAll('.dropdown-trigger');
		M.Dropdown.init(elems, { inDuration: 300, outDuration: 200 });
		let slidemenu = document.querySelectorAll('.sidenav');
		M.Sidenav.init(slidemenu, { inDuration: 300, outDuration: 200 });
		let coll = document.querySelectorAll('.collapsible');
		M.Collapsible.init(coll, {});
	}

	sigNames = [
		'Catalyst',
		'Charge',
		'Chronicle',
		'Clutch',
		'Concrete',
		'Create',
		'Credit',
		'Crypt',
	];

	sigLinks = this.sigNames.map((sigName) => {
		return (
			<li key={sigName}>
				<Link to={`/sig/${sigName}`} className="waves-effect white-text">
					{sigName}
				</Link>
			</li>
		);
	});
	loginNavHeader = (
		<li>
			<Link to="/login/" className="waves-effect white-text">
				Login
			</Link>
		</li>
	);
	eventNavHeader = (
		<li>
			<Link to="/event/">Events</Link>
		</li>
	);
	loginNavList = null;
	loginNavHeaderMobile = (
		<li>
			<Link to="/login/" className="white-text">
				Login
			</Link>
		</li>
	);
	teamNavHeader = (
		<li>
			<Link className="white-text" to="/team/">
				Our Team
			</Link>
		</li>
	);
	expoNavHeader = (
		<li>
			<Link className="white-text" to="/expo/">
				Previous Expo
			</Link>
		</li>
	);
	recsNavHeader = (
		<li>
			<Link className="white-text" to="/recs/">
				Recruitments
			</Link>
		</li>
	);
	eventNavList = null;
	eventNavHeaderMobile = (
		<li>
			<Link to="/event/" className="waves-effect white-text">
				Events
			</Link>
		</li>
	);
	blogNavHeader = (
		<li>
			<a
				href="https://istenitk.wordpress.com/"
				className="white-text"
				target="blank"
			>
				Blog
			</a>
		</li>
	);
	obscuraNavHeader = (
		<li>
			<Link to="/obscura/leaderboard/" className="waves-effect white-text">
				Obscura
			</Link>
		</li>
	);
	squareOneHeader = (
		<li>
			<Link to="/leaderboard/" className="waves-effect white-text">
				Square One
			</Link>
		</li>
	);
	cryptoniteNavHeader = (
		<li>
			<Link className="white-text" to="/cryptonite/1">
				Cryptonite
			</Link>
		</li>
	);
	// transcendNavHeaderMobile = (
	// 	<li className="no-padding">
	// 		<ul className="collapsible collapsible-accordion">
	// 			<li>
	// 				<Link className="collapsible-header waves-effect white-text">
	// 					Transcend
	// 					<i className="material-icons white-text ">arrow_drop_down</i>
	// 				</Link>
	// 				<div className="collapsible-body">
	// 					<ul>
	// 						<li>
	// 							<Link to={`/transcend`} className="waves-effect white-text">
	// 								Home
	// 							</Link>
	// 						</li>
	// 						<li>
	// 							<Link
	// 								to={`/transcend/crypt/1`}
	// 								className="waves-effect white-text"
	// 							>
	// 								Cryptonite
	// 							</Link>
	// 						</li>
	// 					</ul>
	// 				</div>
	// 			</li>
	// 		</ul>
	// 	</li>
	// );
	// transcendNavHeader = (
	// 	<>
	// 		<li>
	// 			<Link className="dropdown-trigger" data-target="transcend-action">
	// 				Transcend
	// 				<i className="material-icons right">arrow_drop_down</i>
	// 			</Link>
	// 		</li>
	// 		<ul id="transcend-action" className="dropdown-content frontsig">
	// 			<li>
	// 				<Link to={`/transcend`} className="waves-effect white-text">
	// 					Home
	// 				</Link>
	// 			</li>
	// 			<li>
	// 				<Link to={`/transcend/crypt/1`} className="waves-effect white-text">
	// 					Cryptonite
	// 				</Link>
	// 			</li>
	// 		</ul>
	// 	</>
	// );
	smpNavHeader = (
		<li>
			<Link to="/smp" className="white-text">
				SMPs
			</Link>
		</li>
	);
	render() {
		const cookie = new Cookies();
		if (cookie.get('firstName') !== undefined) {
			if (this.state.loggedInName !== cookie.get('firstName')) {
				this.setState({ loggedInName: cookie.get('firstName') });
			}
			this.loginNavList = (
				<ul id="user-action" className="dropdown-content ">
					<li>
						<Link to="/account/edit/" className="waves-effect white-text">
							Edit Profile
						</Link>
					</li>
					<li>
						<Link
							to="/account/change_password/"
							className="waves-effect white-text"
						>
							Change Password
						</Link>
					</li>
					<li>
						<Link to="/account/logout/" className="waves-effect white-text">
							Logout
						</Link>
					</li>
				</ul>
			);
			this.loginNavHeader = (
				<li>
					<Link className="dropdown-trigger" data-target="user-action">
						Hi {this.state.loggedInName}
						<i className="material-icons right">arrow_drop_down</i>
					</Link>
				</li>
			);
			this.loginNavHeaderMobile = (
				<li className="no-padding">
					<ul className="collapsible collapsible-accordion">
						<li>
							<Link
								to="/"
								className="collapsible-header waves-effect white-text"
							>
								Hi {this.state.loggedInName}
								<i className="material-icons white-text ">arrow_drop_down</i>
							</Link>
							<div className="collapsible-body">
								<ul>
									<li>
										<Link
											to="/account/edit/"
											className="waves-effect white-text"
										>
											Edit Profile
										</Link>
									</li>
									<li>
										<Link
											to="/account/change_password/"
											className="waves-effect white-text"
										>
											Change Password
										</Link>
									</li>
									<li>
										<Link
											to="/account/logout/"
											className="waves-effect white-text"
										>
											Logout
										</Link>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</li>
			);
			this.eventNavHeader = (
				<li>
					<Link className="dropdown-trigger" data-target="event-action">
						Events
						<i className="material-icons right">arrow_drop_down</i>
					</Link>
				</li>
			);
			this.eventNavList = (
				<ul id="event-action" className="dropdown-content">
					<li>
						<Link to="/event/" className="waves-effect white-text">
							View Events
						</Link>
					</li>
					<li>
						<Link to="/event/add/" className="waves-effect white-text">
							Add Event
						</Link>
					</li>
				</ul>
			);
			this.eventNavHeaderMobile = (
				<li className="no-padding">
					<ul className="collapsible collapsible-accordion">
						<li>
							<Link
								to="/"
								className="collapsible-header waves-effect white-text"
							>
								Events
								<i className="material-icons white-text ">arrow_drop_down</i>
							</Link>
							<div className="collapsible-body">
								<ul>
									<li>
										<Link
											to="/account/edit/"
											className="waves-effect white-text"
										>
											View Events
										</Link>
									</li>
									<li>
										<Link
											to="/account/change_password/"
											className="waves-effect white-text"
										>
											Add Events
										</Link>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</li>
			);
		}
		return (
			<div className="header">
				<ul id="mobile-menu" className="sidenav white-text">
					{this.loginNavHeaderMobile}
					{this.eventNavHeaderMobile}
					<li className="no-padding">
						<ul className="collapsible collapsible-accordion">
							<li>
								<Link className="collapsible-header waves-effect white-text">
									SIGs
									<i className="material-icons white-text ">arrow_drop_down</i>
								</Link>
								<div className="collapsible-body">
									<ul>{this.sigLinks}</ul>
								</div>
							</li>
						</ul>
					</li>
					{/* {this.obscuraNavHeader} */}
					{/* {enableLeaderboard ? (
						<li className="no-padding">
							<ul className="collapsible collapsible-accordion">
								<li>
									<Link className="collapsible-header waves-effect white-text">
										Square One
										<i className="material-icons white-text ">
											arrow_drop_down
										</i>
									</Link>
									<div className="collapsible-body">
										<ul>
											<li>
												<Link
													to="/squareone/"
													className="waves-effect white-text"
												>
													Events
												</Link>
											</li>
											<li>
												<Link
													to="/leaderboard"
													className="waves-effect white-text"
												>
													Leaderboard
												</Link>
											</li>
										</ul>
									</div>
								</li>
							</ul>
						</li>
					) : (
						this.squareOneHeader
					)} */}
					{this.teamNavHeader}
					{this.blogNavHeader}
					{enableExpo ? this.expoNavHeader : null}
					{enableRecs ? this.recsNavHeader : null}

					{/* {this.transcendNavHeaderMobile} */}
					{/* {this.smpNavHeader} */}
				</ul>

				<div className="navbar-fixed">
					<nav style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
						<div
							className="nav-wrapper "
							style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
						>
							<Link to="/" className="brand-logo">
								<img width="75" src={logopath} alt="" />
							</Link>
							<Link data-target="mobile-menu" className="sidenav-trigger ">
								<i className="material-icons">menu</i>
							</Link>
							<ul className="right hide-on-med-and-down">
								{this.loginNavHeader}
								{this.loginNavList}
								{this.eventNavHeader}
								{this.eventNavList}
								<li>
									<Link className="dropdown-trigger" data-target="sig-action">
										SIGs
										<i className="material-icons right">arrow_drop_down</i>
									</Link>
								</li>
								<ul id="sig-action" className="dropdown-content frontsig">
									{this.sigLinks}
								</ul>
								{/* {this.obscuraNavHeader} */}
								{/* {enableLeaderboard ? (
									<>
										<li>
											<Link
												className="dropdown-trigger"
												data-target="square-one-action"
											>
												Square One
												<i className="material-icons right">arrow_drop_down</i>
											</Link>
										</li>
										<ul
											id="square-one-action"
											className="dropdown-content frontsig"
										>
											<li>
												<Link
													to="/squareone/"
													className="waves-effect white-text"
												>
													Events
												</Link>
											</li>
											<li>
												<Link
													to="/leaderboard"
													className="waves-effect white-text"
												>
													Leaderboard
												</Link>
											</li>
										</ul>
									</>
								) : (
									this.squareOneHeader
								)} */}
								{this.teamNavHeader}
								{this.blogNavHeader}
								{enableExpo ? this.expoNavHeader : null}
								{enableRecs ? this.recsNavHeader : null}
								{enableCryptonite ? this.cryptoniteNavHeader : null}
								{/* {this.transcendNavHeader} */}
								{/* {this.smpNavHeader} */}
							</ul>
						</div>
					</nav>
				</div>
			</div>
		);
	}
}
export default Header;
