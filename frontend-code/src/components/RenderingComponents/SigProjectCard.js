import React from "react";

class ProjectCard extends React.Component {
	render() {
		const imageCicle = (
			<div className="col l4 s12 proj-image center">
				<img
					src={this.props.imgurl}
					className="responsive-img circle"
					style={({ width: "300px" }, { height: "300px" })}
				/>
			</div>
		);
		const Content = (
			<div className="col l8 s12">
				<div className="row center">
					<h4>{this.props.name}</h4>
					<h6>{this.props.role}</h6>
					<p>{this.props.content}</p>
				</div>
				<div className="row center">
				</div>
			</div>
		);
		if (this.props.isImageLeft)
			var renderedData = (
				<>
					{imageCicle}
					{Content}
				</>
			);
		else
			renderedData = (
				<>
					{Content}
					{imageCicle}
				</>
			);
		return (
			<div
				className="col l10 offset-l1 s12 z-depth-2"
				style={{ padding: "20px" }}
			>
				{renderedData}
			</div>
		);
	}
}

export default ProjectCard;
