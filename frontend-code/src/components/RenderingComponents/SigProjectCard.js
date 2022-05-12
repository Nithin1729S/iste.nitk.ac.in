import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import '../../css/sigProjectCard.css';

class SigProjectCard extends React.Component {
	render() {
		const {
			imgUrl,
			projID,
			name,
			description,
			isImageLeft,
			isLinkExternal,
			tools,
			isCurrentProject,
			showButton
		} = this.props;
		const imageCircle = (
			<div className="col l4 hide-on-med-and-down ">
				<img
					src={imgUrl}
					className={`responsive-img valign-wrapper ${showButton ? 'cardImage' : ''} ${
						isImageLeft ? 'left' : 'right'
					}`}
					alt=""
					style={ {
						paddingTop: '5%',
						paddingBottom: '5%',
					}}
				/>
			</div>
		);
		const imageCircleSmall = (
			<div className="col hide-on-large-only s12 proj-image center">
				<img src={imgUrl} className="responsive-img cardImage center" alt="" />
			</div>
		);
		const toolsUsed = tools && tools.length > 0 && tools[0] !== "" ? (
			<pre className="toolsList">
				Tools Used: {tools.map((item) => `\n${item}`)}
			</pre>
		) : null;
		let Hyperlink = null;
		if (showButton) {
			Hyperlink = (
				<Link to={`/expo/${projID}`} className="waves-light btn-small btnColor">
					View Details
				</Link>
			);
		}
		if (showButton && isLinkExternal) {
			Hyperlink = (
				<a
					href={projID}
					className="waves-light btn-small btnColor"
					target="_blank"
					rel="noreferrer"
					style={ {
						backgroundColor: 'var(--primary)',
					}}
				>
					View Details
				</a>
			);
		}
		if (showButton && isCurrentProject) {
			Hyperlink = (
				<Link
					to={`/project/${projID}`}
					className="waves-light btn-small btnColor"
					style={ {
						backgroundColor: 'var(--primary)',
					} }	
				>
					View Details
				</Link>
			);
		}
		const Content = (
			<div className="col l8 s12">
				<div className="row">
					<h4 className="center">{name}</h4>
					<h6 className="descCard">
						<span>{parse(description)}</span>
					</h6>
					<div className="row center">
						{toolsUsed}
						<div className="detButton">{Hyperlink}</div>
					</div>
				</div>
			</div>
		);
		if (isImageLeft)
			var renderedData = (
				<>
					{imageCircle}
					{imageCircleSmall}
					{Content}
				</>
			);
		else
			renderedData = (
				<>
					{imageCircleSmall}
					{Content}
					{imageCircle}
				</>
			);
		return (
			<div className="col l8 offset-l2 z-depth-2 projectCard">
				{renderedData}
			</div>
		);
	}
}

export default SigProjectCard;
