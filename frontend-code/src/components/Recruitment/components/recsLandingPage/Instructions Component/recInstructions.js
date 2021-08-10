import React from 'react';
import TitleWithLine from '../../../../RenderingComponents/TitleWithLine';

const RecInstructions = () => {
	return (
		<div className="container">
			<TitleWithLine title="Instructions" />
			<ol>
				<h5 className="flow-text">
					<li style={{ paddingBottom: '10px' }}>This is the information!</li>
					<li style={{ paddingBottom: '10px' }}>This is the information!</li>
					<li style={{ paddingBottom: '10px' }}>This is the information!</li>
					<li style={{ paddingBottom: '10px' }}>This is the information!</li>
					<li style={{ paddingBottom: '10px' }}>This is the information!</li>
				</h5>
			</ol>
		</div>
	);
};

export default RecInstructions;
