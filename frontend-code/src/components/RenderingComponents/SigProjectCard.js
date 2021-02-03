import React from "react";
import "../../css/sigProjectCard.css"
import { Link } from "react-router-dom";

class ProjectCard extends React.Component {
	render() {
		let directionImg = "right";
		if (this.props.isImageLeft) {
			directionImg = "left";
		}
		const imageCicle = (
			<div className="col l4 hide-on-med-and-down ">
				<img
					src={this.props.imgurl}
					className={"responsive-img cardImage valign-wrapper " + directionImg}
					alt=""
				/>
			</div>
		);
		const imageCircleSmall = (
			<div className="col hide-on-large-only s12 proj-image">
				<img src={this.props.imgurl} className="responsive-img cardImage center" alt=""/>
			</div>
		);
		const Content = (
			<div className="col l8 s12">
				<div className="row">
					<h4 className="center">{this.props.name}</h4>
					<h6 className="descCard">
						<span>{this.props.description}</span>
					</h6>
					<div className="row center">
						<div className="detButton">
							<Link className="waves-effect waves-light btn-small btnColor" to="/project">
								View Details
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
		if (this.props.isImageLeft)
			var renderedData = (
				<>
					{imageCicle}
					{imageCircleSmall}
					{Content}
				</>
			);
		else
			renderedData = (
				<>
					{imageCircleSmall}
					{Content}
					{imageCicle}
				</>
			);
		return (
			<div className="col l8 offset-l2 z-depth-2 projectCard">
				{renderedData}
			</div>
		);
	}
}

export default ProjectCard;
