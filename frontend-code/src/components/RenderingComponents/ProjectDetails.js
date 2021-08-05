import React from 'react';
import parse from 'html-react-parser';

import '../../css/projectDetails.css';
import { baseRequest, baseUrl } from '../../constants';

class ProjectDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
		};
		this.fetchHome = this.fetchHome.bind(this);
	}
	async fetchHome() {
		const response = await baseRequest.get(`/project/${this.props.id}/`);
		this.setState({ data: response.data });
	}

	componentDidMount() {
		this.fetchHome();
	}

	// componentDidUpdate() {
	// 	console.log(this.state.data);
	// 	console.log(this.state.length);
	// }

	render() {
		if (this.state.data.length === 0) return <div>Loading...</div>;
		else if(this.state.data.id === undefined) return <div>This project does not exist!</div>;
		return (
			<div className="projectDetails container">
				<div className="row-center">
					<div className="col l6 offset -l3 s12">
						<div className="card-panel hoverable">
							<div className="card-content black-text">
								<h3>{this.state.data.name}</h3>
								<div className="center">
									<h5>
										{this.state.data.sigs[0].name}|{this.state.data.year}
									</h5>
								</div>
								<div className="row mem">
									<i className="material-icons">person</i>
									<span className="member">Members</span>
								</div>
								<div className="center row">
									<div className="flexrow">
										{this.state.data.editable_by.map((person) => (
											<div className="core_img z-depth-2" href="">
												<div className="img__overlay">
													{person.first_name} {person.last_name}
												</div>
												<img src={`${baseUrl}${person.avatar}`} alt="" />
											</div>
										))}
									</div>
								</div>
							</div>
							<div className="row mem">
								<i className="material-icons">description</i>
								<span className="member">Description</span>
							</div>
							<div className="row ckeditor_content">
								<p>{parse(this.state.data.description)}</p>
							</div>
							<div className="row mem">
								<i className="material-icons">local_offer</i>
								<span className="member">Tags</span>
							</div>
							<div className="tags">
								{this.state.data.tags.split(',').map((tag) => (
									<div className="chip">{tag}</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default ProjectDetails;
