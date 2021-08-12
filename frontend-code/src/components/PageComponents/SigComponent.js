import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import { Link, withRouter } from 'react-router-dom';

import SigProjectCard from '../RenderingComponents/SigProjectCard';
import TitleWithLine from '../RenderingComponents/TitleWithLine';
import '../../css/sigComponent.css';
import { baseRequest, baseUrl, enableRecs } from '../../constants';

class SigComponent extends React.Component {
	constructor(props) {
		super(props);
		var value = 'Crypt';
		if (typeof this.props.match.params.name != 'undefined')
			value = this.props.match.params.name;
		this.state = { name: value, projectsThere: true };
		this.fetchSig = this.fetchSig.bind(this);
		this.printYear = this.printYear.bind(this);
	}
	printYear(year) {
		return String(year) + '-' + String(year + 1);
	}
	async fetchSig() {
		await baseRequest.get(`/sig/${this.state.name}/`).then((res) => {
			this.setState({
				sigData: res.data,
			});
		});
		await baseRequest
			.get(`/project/current/${this.state.name}/`)
			.then((res) => {
				this.setState({
					projectData: res.data,
				});
			});
	}
	componentDidMount() {
		M.AutoInit();
		this.fetchSig();

		if (typeof this.state.projectData === 'undefined')
			this.setState({ projectsThere: false });
	}
	componentDidUpdate() {
		const { history, match } = this.props;
		if (match.params.name) {
			if (match.params.name !== this.state.name) {
				this.setState({ name: match.params.name });
				history.go(0);
			}
		}
		if (
			this.state.projectData === undefined &&
			this.state.projectsThere === true
		)
			this.setState({ projectsThere: false });
		else if (
			this.state.projectData !== undefined &&
			this.state.projectsThere === false &&
			this.state.projectData[0] !== undefined
		)
			this.setState({ projectsThere: true });
		// console.log(this.state.projectData);
	}
	render() {
		// Uncomment and use when necessary
		let button = enableRecs ? (
			<div className="center">
				<Link to={`/recs/${this.state.name}`} className="btn white-text dark">
					APPLY FOR RECRUITMENTS!
				</Link>
			</div>
		) : (
			<></>
		);

		if (this.state.projectData != null) {
			return (
				<div className="sigComponent">
					<div className="row">
						<div className="col l12 s12">
							<TitleWithLine title={this.state.name} />
						</div>
						{button}
						{/* This is the Image for the SIG, uncomment if video in not activated. 
						<div className="col l12 s12">
							<img
								src={`${baseUrl}${this.state.sigData.avatar}`}
								className="responsive-img col s8 l4 center offset-l4 offset-s2"
								alt="sig"
							/>
						</div> */}

						{/* This is the video component, use only if the video is ready */}
						<div className="col l12 s12 center">
							<h4>
								<span className="videotitle">
									See what our Core has to say about {this.state.name}!
								</span>
							</h4>
						</div>
						<div className="col l8 s10 offset-s1 offset-l2">
							<div className="video-container center">
								<iframe
									src={this.state.sigData.website_talk_url}
									frameBorder="0"
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
									alt="sigVideo"
									title="Sig Video"
								></iframe>
							</div>
						</div>
						<div className="row">
							<div className="col l8 offset-l2 s10 offset-s1 description flow-text">
								<br />
								<span>{this.state.sigData.description}</span>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col l10 offset-l1 s10 offset-s1">
							<h4 className="center">
								{this.state.projectsThere ? (
									<span>
										<TitleWithLine
											title={
												'Projects ' +
												this.printYear(this.state.projectData[0].year)
											}
										/>
									</span>
								) : (
									<span>
										<TitleWithLine title="Projects" />
										<h5>Coming soon!</h5>
									</span>
								)}
								{/* {this.printYear(
                                        this.state.projectData[0].year
                                    )}  */}
							</h4>
						</div>
					</div>
					{this.state.projectData.map((project, index) => {
						const { id, name, summary, image } = project;
						return (
							<div className="row proj-item">
								<SigProjectCard
									key={id}
									isImageLeft={index % 2 === 0}
									projID={id}
									name={name}
									description={summary}
									imgUrl={`${baseUrl}${image}`}
									isCurrentProject={true}
								/>
							</div>
						);
					})}
					<br />
				</div>
			);
		} else return null;
	}
}
export default withRouter(SigComponent);
