import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import { withRouter } from 'react-router-dom';

import SigProjectCard from '../RenderingComponents/SigProjectCard';
import TitleWithLine from '../RenderingComponents/TitleWithLine';
import '../../css/sigComponent.css';
import { baseRequest, baseUrl } from '../../constants';

class SigComponent extends React.Component {
	constructor(props) {
		super(props);
		var value = 'Crypt';
		if (typeof this.props.match.params.name != 'undefined')
			value = this.props.match.params.name;
		this.state = { name: value };
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
	}
	componentDidUpdate() {
		const { history, match } = this.props;
		if (match.params.name) {
			if (match.params.name !== this.state.name) {
				this.setState({ name: match.params.name });
				history.go(0);
			}
		}
	}
	render() {
		if (this.state.projectData != null) {
			return (
				<div className="sigComponent">
					<div className="row">
						<div className="col l12 s12">
							<TitleWithLine title={this.state.name} />
						</div>
						<div className="col l12 s12">
							<img
								src={`${baseUrl}${this.state.sigData.avatar}`}
								className="responsive-img col s8 l4 center offset-l4 offset-s2"
								alt="sig"
							/>
						</div>
						<div className="row">
							<div className="col l8 offset-l2 s10 offset-s1 description flow-text">
								<br />
								<span>{this.state.sigData.description}</span>
							</div>
						</div>
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
					</div>
					<div className="row">
						<div className="col l10 offset-l1 s10 offset-s1">
							<h4 className="center">
								<span>
									<TitleWithLine title="Projects" />
									{/* {this.printYear(
                                        this.state.projectData[0].year
                                    )} */}
									<h5>Coming soon!</h5>
								</span>
							</h4>
						</div>
					</div>
					{this.state.projectData.map((project, index) => {
						const { id, name, summary, img_url } = project;
						return (
							<div className="row proj-item">
								<SigProjectCard
									key={id}
									isImageLeft={index % 2 === 0}
									projID={id}
									name={name}
									description={summary}
									imgUrl={img_url}
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
