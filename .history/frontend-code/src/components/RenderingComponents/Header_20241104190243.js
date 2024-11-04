import React from 'react';
import M from 'materialize-css';
import { Link } from 'react-router-dom';

import logopath from '../logo.png';
import '../../css/header.css';
import { enableExpo, enableRecs, enableCryptonite,enableSMP, enableObsidian,enableSHE, enableClutchMB, enableLeaderboard } from '../../constants';
// import {  enableLeaderboard } from '../../constants';
// import soPath from '../SquareOne23/index.html';

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
	teamNavHeader = (
		<li>
			<Link className="white-text" to="/team/">
				Our Team
			</Link>
		</li>
	);
	clutchMBHeader = (
		<li>
			<Link className="white-text" to="/clutchmb/">
				Clutch Mystery Box
			</Link>
		</li>
	);
	siNavHeader = (
		<li>
			<Link className="white-text" to="/SocialInitiatives">
				Social Initiatives
			</Link>
		</li>
	)
	expoNavHeader = (
		<li>
			<Link className="white-text" to="/expo/">
				Expo 2023
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
	sheNavHeader = (
		<li>
			<Link to="/she" className="waves-effect white-text">
				SHE
			</Link>
		</li>
	)
	galleryNavHeader = (
		<li>
			<Link to="/gallery" className="waves-effect white-text">
				Gallery
			</Link>
		</li>
	)

	fortniteNavHeader = (
		<li>
			<a
				href="https://istenitk.wordpress.com/fortnightflair/"
				className="white-text"
				target="blank"
			>
				Fortnight Flair
			</a>
		</li>
	)

	// Navigation headers for one time events
	recsNavHeader = (
		<li>
			<Link className="white-text" to="/recs/">
				Recruitments
			</Link>
		</li>
	);
	obscuraNavHeader = (
		<li>
			<Link to="/obscura/leaderboard/" className="waves-effect white-text">
				Obscura
			</Link>
		</li>
	);
	obsidianNavHeader = (
		<li>
			<Link to="/obsidian" className="waves-effect white-text">
				Obsidian
			</Link>
		</li>
	)
	squareOne23Header =(
		<li>
			{/* <Link to='/leaderboard' className="waves-effect white-text">
				Square One 23
			</Link> */}
			<Link to="/leaderboard" className="waves-effect white-text">
				Square On '24 Leaderboard
			</Link>
			{/* <a
				href='https://iste-squareone-leaderboard.vercel.app/' 
				className="white-text"
				target="blank"
			>
				Square One 23
			</a> */}
		</li>
	);
	// squareOneHeader = (
	// 	<li>
	// 		<Link to="/leaderboard/" className="waves-effect white-text">
	// 			Square One
	// 		</Link>
	// 	</li>
	// );
	// cryptoniteNavHeader = (
	// 	<li>
	// 		<Link className="white-text" to="/cryptonite/1">
	// 			Cryptonite
	// 		</Link>
	// 	</li>
	// );
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
		// const cookie = new Cookies();
		// if (cookie.get('firstName') !== undefined) {
		// 	if (this.state.loggedInName !== cookie.get('firstName')) {
		// 		this.setState({ loggedInName: cookie.get('firstName') });
		// 	}
		// }
		return (
			<div className="header">
				<ul id="mobile-menu" className="sidenav white-text">
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
					{ enableSHE ? this.sheNavHeader : null }
					{this.siNavHeader}
					{ enableRecs ? this.recsNavHeader : null }
					{enableSMP ? this.smpNavHeader : null}
					{/* {this.obscuraNavHeader} */}
					{enableLeaderboard ? (
						<li className="no-padding">
							<ul className="collapsible collapsible-accordion">
								<li>
								<Link to="/leaderboard" className="waves-effect white-text">
									Square One '24 Leaderboard
								</Link>
								{/* <a
									href='https://iste-squareone-leaderboard.vercel.app/' 
									className="white-text"
									target="blank"
								>
									Square One 23
								</a> */}
									{/* <Link to="/leaderboard" className="collapsible-header waves-effect white-text">
										Square One 23 */}
										{/* <i className="material-icons white-text ">
											arrow_drop_down
										</i> */}
									{/* </Link> */}
									{/* <div className="collapsible-body">
										<ul>
											<li>
												<Link
													to="/squareoneleaderboard"
													className="waves-effect white-text"
												>
													Leaderboard
												</Link>
											</li>
										</ul>
									</div> */}
								</li>
							</ul>
						</li>
					) : (
						this.squareOne23Header
					)}
					{ this.teamNavHeader }
					{this.galleryNavHeader}
					{this.blogNavHeader}
					{enableExpo ? this.expoNavHeader : null}
					
					{/* {enableObsidian ? this.obsidianNavHeader : null} */}
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
								{enableSMP ? this.smpNavHeader : null}
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
													to="/squareoneleaderboard"
													className="waves-effect white-text"
												>
													Leaderboard
												</Link>
											</li>
										</ul>
									</>
								) : (
									this.squareOne23Header
								)} */}
								{ enableClutchMB ? this.clutchMBHeader : null }
								{ enableSHE ? this.sheNavHeader : null }
								{this.siNavHeader}
								{ enableRecs ? this.recsNavHeader : null }
								{ this.teamNavHeader }
								{this.galleryNavHeader}
								{this.fortniteNavHeader}
								{this.blogNavHeader}
								{enableExpo ? this.expoNavHeader : null}
								{enableLeaderboard ? this.squareOne23Header : null}
								{/* {enableObsidian ? this.obsidianNavHeader : null} */}
								{/* {enableCryptonite ? this.cryptoniteNavHeader : null} */}
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
