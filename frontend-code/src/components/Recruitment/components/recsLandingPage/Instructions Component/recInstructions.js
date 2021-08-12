import React from 'react';
import TitleWithLine from '../../../../RenderingComponents/TitleWithLine';
import { instructions } from '../../../constants';

const RecInstructions = () => {
	return (
		<div className="container">
			<TitleWithLine title="Instructions" />
			<ul>
				{instructions.map((item) => {
					return (
						<h4 style={{ color: 'black' }}>
							<li style={{ listStyleType: 'disc' }}>{item}</li>
						</h4>
					);
				})}
			</ul>
		</div>
	);
};

export default RecInstructions;
