import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import parse from 'html-react-parser';
import { baseUrl } from '../../constants';

class MemberCard extends React.Component {
	render() {
		const imageCircle = (
			<div className="col l4 s12 proj-image center">
				<img
					alt="member card"
					src={`${baseUrl}${this.props.imgurl}`}
					className="responsive-img circle"
					style={{
						width: '250px',
						height: '250px',
						objectFit: 'contain',
					}}
				/>
			</div>
		);
		const Content = (
			<div className="col l8 s12">
				<div className="row center">
					{this.props.name && <h4>{this.props.name}</h4>}
					{this.props.role && <h6>{this.props.role}</h6>}
					{this.props.department && <p><u>Department:</u> {this.props.department}</p>}
					{this.props.about_me && <p><u>About Me:</u> {this.props.about_me}</p>}
					{this.props.technical_interests && <p><u>Technical Interests:</u> {this.props.technical_interests}</p>}
					{this.props.internships && <p><u>Internships:</u> {this.props.internships}</p>}
					{this.props.content && <p>{parse(this.props.content)}</p>}
				</div>

				<div className="row center">
					<a
						href={[this.props.linkedin]}
						className="primary-link btn-large btn-floating waves-effect waves-light"
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon icon={faLinkedin} size="2x" />
					</a>
					<a
						href={this.props.email}
						className="primary-link btn-large btn-floating waves-effect waves-light"
					>
						<i className="material-icons">mail_outline</i>
					</a>
				</div>
			</div>
		);
		if (this.props.isImageLeft)
			var renderedData = (
				<>
					{imageCircle}
					{Content}
				</>
			);
		else
			renderedData = (
				<>
					{Content}
					{imageCircle}
				</>
			);
		return (
			<div
				className="col l10 offset-l1 s12 z-depth-2"
				style={{ padding: '20px' }}
			>
				{renderedData}
			</div>
		);
	}
}

export default MemberCard;
