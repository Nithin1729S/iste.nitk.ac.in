import React from 'react';
import { Link } from 'react-router-dom';

class RecruitmentComponent extends React.Component {
	// Components to do on this page
	// 1. FAQ and Instructions section (Static)
	// 2. SIG-wise card

	render() {
		return (
			<div>
				Recruitment page here
				<center>
					{/* Dummy button */}
					<Link className="waves-light btn-small" to="/recs/Crypt/">
						View More
					</Link>
				</center>
			</div>
		);
	}
}
export default RecruitmentComponent;
